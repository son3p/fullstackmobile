import Handlebars from 'handlebars'
import { Dialog } from '@capacitor/dialog';
import router from'../router.js'

// Handlebars template text in files. Remember we are not in a server so can not use filesystem!
// We select what properties we like to have from the object.
import {todoHbs} from '../templates/todo.js'
import {todoFormHbs} from '../templates/todoForm.js'

export default class TodoController {
    constructor(todoService) {
        this.todoService = todoService;
        this.selectedTodo = null;
        this.mode = "Update"; // default is to update form, we also can use the same form for create then the value shall/could be Create. ALso need to add eventhandler for this also


        // To show the details about the todo
        this.todoCompiled = Handlebars.compile(todoHbs); 

        // To modify the todo
        this.todoFormCompiled = Handlebars.compile(todoFormHbs); 

    }

    initialize = ()=> {
        // if needed
    }

    setupEventHandlers = ()=> {
        let element = null;

        // Only available if we have rendered the todoForm
        element = document.getElementById('submitTodo');
        // Are we doing a update or create
        if(element)
            element.addEventListener('submit', this.onSubmitTodo); 
            if (signupLink) {
                signupLink.addEventListener('click', () => {
                    router.load('signup');
                });
            }     
    }

    onSubmitTodo = async (event) => {

        event.preventDefault();
        event.stopImmediatePropagation();

        // The form sending the data
        const form = event.target;
        //FormData is a helper to get key:value pairs 
        // ALL ARE STRINGS SO WE NEED TO CONVERT NUMBER STRINGS to numbers
        const formData = new FormData(form);
        
        // Convert from DTO to object.
        const formPersonObj = Object.fromEntries(formData.entries());
        formPersonObj.id = parseInt(formPersonObj.id);
        
        // Are we doing a create/update or destroy
        if(this.mode!='Destroy') {
            const result= await this.todoService.persist(formPersonObj);
            if(result == true) {
                const todo = this.todoService.findById(parseInt(formPersonObj.id));
                this.selectedTodo = todo;
                
                if(this.selectedTodo!=null) {
                    
                    // If we are here, we are on the 'bright' side!
                    await Dialog.alert({
                        title: 'Save',
                        message: 'todo saved',
                    });
        
                    const url= "#todos/"+ this.selectedTodo.id + "/read";
                    // Page based switching on url
                    router.load(url);

                } else {
                    await Dialog.alert({
                        title: 'Save',
                        message: 'todo NOT saved',
                    });
                }
            }
        } else {
            const result = await this.todoService.discard(formPersonObj);
            
            if(result==true) {
                
                // If we are here, we are on the 'bright' side!
                await Dialog.alert({
                    title: 'Discard',
                    message: 'todo discarded',
                });
      
                const url= "#";
                // Page based switching on url
                router.load(url);

            } else {
                await Dialog.alert({
                    title: 'Discard',
                    message: 'todo NOT discarded',
                });
            }
        }

        // We return false so the form do not try to send to noexisting server, even if we have the preventors!
        return false;
    }

    render = () => {
        // We should check if there is a selectedTodo and return an error if not!
        return this.todoCompiled(this.selectedTodo) // Here we give the context to use to the handlebars compiled function
    }
    
    renderForm = () => {
        return this.todoFormCompiled({ todo: this.selectedTodo, mode: this.mode});
    }

    renderReadById = (todoId) => {
        const todo = this.todoService.findById(parseInt(todoId));
        this.selectedTodo = todo;
    
        return this.render();
    }

    renderUpdateById = (todoId) => {
        const todo = this.todoService.findById(parseInt(todoId));
        this.selectedTodo = todo;
        this.mode = "Update";
        
        return this.renderForm(); // Handlebars will create the callback name submitTodoEdit
    }

    renderCreate = () => {
        // New default todo data
        const newTodo = {"id": 0, "todoTitle": "", "todoText": "", "managerId": 0, "managerName": "", "title": "", "department": "", "cellPhone": "", "officePhone": "", "email": "", "city": "", "pic": "James_King.jpg", "twitterId": "", "blog": ""};
        this.selectedTodo = newTodo;
        this.mode = "Create";
        
        return this.renderForm(); // Handlebars will create the callback name submitTodoCreate
    }

    renderDestroyById = (todoId) => {
        const todo = this.todoService.findById(parseInt(todoId));
        this.selectedTodo = todo;
        this.mode = "Destroy";
        
        return this.renderForm(); // Handlebars will create the callback name submitTodoEdit
    }
}