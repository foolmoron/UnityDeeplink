# Unity Deeplink
Handle deeplinks to the currently opened Unity project, using any data that fits in the clipboard

## How to use
Create a URL that uses `command` and `args` query params. Example:
https://foolmoron.io/UnityDeeplink/?command=GoToNode&args=f47e7959-7851-43bf-9072-d4e0276062b0

In Unity `DeeplinkHandler.cs`, use `RegisterCommand` to add your new command.

### Multiple Args
You can append as many `args` as you want, using the multiple URL query param syntax. Example:
https://foolmoron.io/UnityDeeplink/?command=MultiArgTest&args=firstArg&args=secondArg&args=thirdArg
