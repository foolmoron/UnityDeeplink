# Unity Deeplink
Handle deeplinks to the currently opened Unity project, using any data that fits in a copied URL. I wrote it for internal use on our new game [GHOST BIKE](https://www.messhof.com/ghostbike), but you can adapt it to any Unity project.

## How to use
Create a URL that uses `command` and `args` query params. Ex:  
https://unityl.ink?command=GoToNode&args=f47e7959-7851-43bf-9072-d4e0276062b0

In Unity `DeeplinkHandler.cs`, use `RegisterCommand` to add your new command.

### Multiple Args
You can append as many `args` as you want, using the multiple URL query param syntax. Ex:  
https://unityl.ink?command=MultiArgTest&args=firstArg&args=secondArg&args=thirdArg
