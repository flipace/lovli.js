# Change Log

### v0.4.0
- some readme additions
- added logo and various styles for the example page
- added ```postcss-nested, file-loader, later, rethinkdbdash```
- automatically removing todos every 10 minutes
- nicer todo entry by using input field instead of prompt

### v0.3.1
- updated dependencies to their latest versions

### v0.3.0
- added production configuration
  - run ```npm run prod``` to start the app in production mode
  - run ```npm run build``` to generate the combined js files
  - run ```node .build/server.bundle.js``` to start your app manually
- added page configuration in ```config/page.js```
  - there you can change title, port and horizon token_secret
- fixed webpack config to only include "source" folder for babel-loader

### v0.2.2
- explicitly setting token_secret for horizon server to make sure tokens are valid on server restart
- update @horizon/client to 0.0.4-4

### v0.2.1
- allow env PORT to set port for express
- changes webpack dev server port to 9095
- updates horizon-react to 0.1.2
- adds horizon-react mapDataObject example

### v0.2.0
- moved utils/horizon to horizon-react
- splitted TodoList and AddTodoButton into separate components
- added new subscribe example for horizon-react to TodoList

### v0.1.0
- initial commit
