import Handlebars from 'handlebars'

// Handlebars template text in files. Remember we are not in a server so can not use filesystem!
// We select what properties we like to have from the object.
import {homeHbs} from '../templates/home.js'

import TodoListController from './TodoListController.js';

export default class HomeController {
    constructor(todoService) {
        this.todoListController = new TodoListController();
        this.todoService = todoService;
        this.homeCompiled = Handlebars.compile(homeHbs);    
        
        // Initialize todos
        const todos =this.todoService.findByName('')
        this.todoListController.setTodos(todos);
    }

    render = () => {
        return this.homeCompiled();
    }

    findByName = (event) => {
        let todos = null;
        // If we call it without an event we use what ever we got 
        if(event) {
            event.preventDefault();
            console.log('findByName event'+event);
            todos =this.todoService.findByName(event.target.value)
        }
        // The todoList element is coming from the home page!
        // and we assign the todos object to the compiled handlebars,
        // which generates the html result.
        window.todoList.innerHTML = this.todoListController.render(todos);
    }
    
}