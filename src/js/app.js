// Import the class from the service implementation
import TodoService from './services/memory/TodoService.js';
import HomeController from './controllers/HomeController.js';
import TodoController from './controllers/TodoController.js';
import Handlebars from 'handlebars'
import router from './router.js'

/* ---------------------------------- File local Functions ---------------------------------- */
// To be able to use await we have to use async, and it seems that we can not use the lambd function for it in this case...
// window.onload likes to have it as a async function, to be able to connect to the Capacitor preferences... might be that when it uses the native stuff...
async function setupApplication () {
    console.log('windows loaded - setting up application');
    
    /* ---------------------------------- Variables ---------------------------------- */
    let service = new TodoService() // moved the service here so it will not be created unnecessarily
    // here we need the await 
    await service.initialize()
    
    console.log("Todo service initialized");

    /* ------------------- Set up the handlebars helper ------------------------------ */
    // Here we register a simple string comparator ie the if equal
    Handlebars.registerHelper('if_eq', (a, b, opts) => {
        if(a==b) {
            return opts.fn(this);
        }

        return opts.inverse(this)
    })

    /* ----- Setup routes, ie frontend page switching ----- */
    router.addRoute('', () => {
        console.log('empty fragment route');

        // Set the body, the controller takes care of it's own list
        const homeController = new HomeController(service);
        document.body.innerHTML = homeController.render(); // This is the default page
        console.log("body html assigned");

        //Setup the start list
        homeController.findByName('');
        
        /* --------------------------------- Event Registration -------------------------------- */
        // The search string in inside the home page so we can register only after the body content is injected
        window.searchString.oninput = homeController.findByName;
    });

   
    router.addRoute('todos/:id/read', (todoId) => {
        console.log('todo details route ');
        const todoController = new TodoController(service);
        window.content.innerHTML = todoController.renderReadById(todoId);
        console.log("content html assigned for read");
    });

    router.addRoute('register', () => {
        console.log('Register route');
        const todoController = new TodoController(service);
        window.content.innerHTML = todoController.signupCompiled()
        todoController.setupEventHandlers();
        console.log("register assigned")
    })

    router.addRoute('login', () => {
        console.log('Login route');
        const todoController = new TodoController(service);
        window.content.innerHTML = todoController.signinCompiled()
        todoController.setupEventHandlers();
        console.log("Login assigned")
    })

    router.addRoute('todos/:id/edit', (todoId) => {
        console.log('todo update route ');
        const todoController = new TodoController(service);
        window.content.innerHTML = todoController.renderUpdateById(todoId);
        // We need to setup eventhandlers AFTER the elements exist in the DOM tree
        todoController.setupEventHandlers();
        console.log("content html assigned for update");
    });
   

    router.addRoute('todos/new', () => {
        console.log('todo new route ');
        const todoController = new TodoController(service);
        window.content.innerHTML = todoController.renderCreate();
        // We need to setup eventhandlers AFTER the elements exist in the DOM tree
        todoController.setupEventHandlers();
        console.log("content html assigned for create");
    });
    
    router.addRoute('todos/:id/delete', (todoId) => {
        console.log('employee update delete ');
        const todoController = new TodoController(service);
        window.content.innerHTML = todoController.renderDestroyById(todoId);
        // We need to setup eventhandlers AFTER the elements exist in the DOM tree
        todoController.setupEventHandlers();
        console.log("content html assigned for destroy");
    });
   
    // Start the router
    router.parseRoute();
    
}

// Add our EventListener for when the window is loaded
window.onload = setupApplication;