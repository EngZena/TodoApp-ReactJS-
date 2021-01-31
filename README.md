you can check the website here https://todo-app-90b48.web.app/
or download it then 
npm start

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

to complete the cycle all you have to do is to create account in firebase then create a database https://firebase.google.com/ then change the link on axios-todo.js https://github.com/EngZena/TodoReactJS/blob/main/src/axios-todo.js from baseURL: 'https://todo[APIKEY].firebaseio.com' to the link in your database and to apply the search you have to add "todoList": { ".indexOn": ["descreption"] } in the rules of the created database
