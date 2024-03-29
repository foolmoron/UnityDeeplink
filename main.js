const HEADER = `$$UNITY_DEEPLINK$$`
const HEADER_RUNTIME = `$$UNITY_DEEPLINK_RUNTIME$$`
const UNITY_EDITOR_LINK = `com.unity3d.kharma://unity_deeplink_hack`

async function main() {
    var params = new URLSearchParams(location.search);
    var command = params.get('command');
    var args = params.getAll('args');
    var runtime = params.get('r');

    if (command && args[0]) {
        document.title = document.title.replace('| ', `| ${command} - ${args[0]} |`)
    } else if (command) {
        document.title = document.title.replace('| ', `| ${command} |`)
    }

    document.body.insertAdjacentHTML('beforeend', `
        <h4>command</h4>
        <div>
            ${params.get('command')}
        </div>
        <h4>args</h4>
        <div>
            ${args.join('<br>')}
        </div>
    `);
    
    if (!command) {
        // invalid
        throw new Error("Link is invalid!")
    }

    // expose this func to the HTML
    window.openLink = async function openLink() {
        const h = runtime ? HEADER_RUNTIME : HEADER;
        await navigator.clipboard.writeText([h, command, ... args].join('\n'));
    
        var win = window.open(UNITY_EDITOR_LINK, '_blank');
        if (!win || win.closed || typeof win.closed == 'undefined') {
            // blocked
            throw new Error("Popups are not allowed! Allow popups for this site and then refresh.")
        };
        window.close();
    }
    await openLink();
}

main().catch(err => {
    document.body.insertAdjacentHTML('beforeend', `
        <h4 style="color: firebrick;">Error</h4>
        <div>
            ${err.toString()}
        </div>
    `);
    throw err;
})
