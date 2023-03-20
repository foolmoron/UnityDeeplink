const HEADER = `$$UNITY_DEEPLINK$$`
const UNITY_EDITOR_LINK = `com.unity3d.kharma://unity_deeplink_hack`

async function main() {
    var params = new URLSearchParams(location.search);
    var command = params.get('command');
    var args = params.getAll('args');
    document.body.insertAdjacentHTML('beforeend', `
        <h4>Command</h4>
        <div>
            ${params.get('command')}
        </div>
        <h4>args</h4>
        <div>
            ${args.join('<br>')}
        </div>
    `);
    await navigator.clipboard.writeText([HEADER, command, ... args].join('\n'));
    console.log("Success");
    window.open(UNITY_EDITOR_LINK);
    window.close();
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
