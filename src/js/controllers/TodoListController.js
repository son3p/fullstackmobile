import Handlebars from 'handlebars'

// Handlebars template text in files. Remember we are not in a server so can not use filesystem!
// We select what properties we like to have from the object.
import {todoListHbs} from '../templates/todoList.js'

export default class TodoListController {
    constructor() {
        this.todos=[];
        this.todoListCompiled = Handlebars.compile(todoListHbs);    
    }

    setTodos = (todos) => {
        this.todos = todos;
    }

    render = (todos=null) => {
        // todos parameter overrides the this.todos
        if(todos) {
            this.todos = todos;
        }

        if(this.todos) {
            return this.todoListCompiled(this.todos);
        } else {
            return '<div> Todo list empty </div>'
        }
    }
}