import Handlebars from 'handlebars'
import { Dialog } from '@capacitor/dialog';
import router from'../router.js'
import AuthService from '../services/storage/AuthService.js';

// Handlebars template text in files. Remember we are not in a server so can not use filesystem!
// We select what properties we like to have from the object.

import {todoHbs} from '../templates/todo.js'
import {todoFormHbs} from '../templates/todoForm.js'
import { signupHbs } from '../templates/signup.js';
import { signinHbs } from '../templates/signin.js';


export default class TodoController {
    constructor(todoService) {
        this.todoService = todoService;
        this.selectedTodo = null;
        this.mode = "Update"; // default is to update form, we also can use the same form for create then the value shall/could be Create. ALso need to add eventhandler for this also


        // To show the details about the todo
        this.todoCompiled = Handlebars.compile(todoHbs); 

        // To modify the todo
        this.todoFormCompiled = Handlebars.compile(todoFormHbs); 
        // signinup
        this.signupCompiled = Handlebars.compile(signupHbs) 
        this.signinCompiled = Handlebars.compile(signinHbs)

    }

    initialize = ()=> {
        // if needed
    }

    setupEventHandlers = ()=> {
        let element = null;
        let signupElement = null;
        let signinElement = null;
        signinElement = document.getElementById('signinTodo')
        if(signinElement)
            signinElement.addEventListener('submit', this.onSubmitSignin)
    
        signupElement = document.getElementById('signupTodo');
        if (signupElement)
            signupElement.addEventListener('submit', this.onSubmitSignup);
    
        element = document.getElementById('submitTodo');
        if (element)
            element.addEventListener('submit', this.onSubmitTodo);
    }

    onSubmitSignin = async (event) => {
        event.preventDefault();
        // Extract form data
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        try {
            // Perform authentication request
            const result = await AuthService.login(data);
            Dialog.alert({
                title: 'Success',
                message: 'Login succesful',
            });
            // Display a success message or handle the response as needed

            // Navigate to the desired page within your application
            const url = "#"; // Navigate to the home page or any other desired page
            router.load(url);

            // Reset the form if needed
            event.target.reset();
        } catch (error) {
            console.error(error);
            // Handle errors if authentication fails
        }
    };

onSubmitSignup = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target); // Get form data
    const data = Object.fromEntries(formData.entries()); // Convert FormData to plain object
    console.log('Form data:', data);

    try {
        const result = await AuthService.register(data);
        Dialog.alert({
            title: 'Success',
            message: 'Register succesful',
        });
        const url = "#";

        router.load(url);
        event.target.reset(); // Reset the form
    } catch (error) {
        console.error(error);
        throw error;
    }
}

    onSubmitTodo = async (event) => {

        event.preventDefault();
        event.stopImmediatePropagation();

        
        const form = event.target;
        
        const formData = new FormData(form);
        
        
        const formPersonObj = Object.fromEntries(formData.entries());
        formPersonObj.id = parseInt(formPersonObj.id);
        
       
        if(this.mode!='Destroy') {
            const result= await this.todoService.persist(formPersonObj);
            if(result == true) {
                const todo = this.todoService.findById(parseInt(formPersonObj.id));
                this.selectedTodo = todo;
                
                if(this.selectedTodo!=null) {
                    
                    
                    await Dialog.alert({
                        title: 'Save',
                        message: 'todo saved',
                    });
        
                    const url= "#todos/"+ this.selectedTodo.id + "/read";
                    
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
                await Dialog.alert({
                    title: 'Discard',
                    message: 'todo discarded',
                });
      
                const url= "#";
                router.load(url);

            } else {
                await Dialog.alert({
                    title: 'Discard',
                    message: 'todo NOT discarded',
                });
            }
        }
        return false;
    }

    render = () => {
        return this.todoCompiled(this.selectedTodo) 
    }
    
    renderForm = () => {
        return this.todoFormCompiled({ todo: this.selectedTodo, mode: this.mode});
    }

    renderReadById = async (todoId) => {
        const todo = this.todoService.findById(parseInt(todoId));
        this.selectedTodo = todo;
    
        return this.render();
    }

    renderUpdateById = async (todoId) => {
        const todo = this.todoService.findById(parseInt(todoId));
        this.selectedTodo = todo;
        this.mode = "Update";
        
        return this.renderForm(); 
    }

    renderCreate = async () => {
        const newTodo = {
            "task": "", 
            "body": "", // main text
            "estimated_time": 0, 
            "created_at": new Date().toISOString(), // not sure if works
            "belongsTo": ""
        };
        this.selectedTodo = newTodo;
        this.mode = "Create";
        return await this.todoFormCompiled({ todo: this.selectedTodo, mode: this.mode });
       // return this.renderForm();
    }

    renderDestroyById = async (todoId) => {
        const todo = this.todoService.findById(parseInt(todoId));
        this.selectedTodo = todo;
        this.mode = "Destroy";
        
        return this.renderForm(); 
    }

    renderRegister = async () => {
        return this.signupCompiled()
    }

    renderLogin = async () => {
        return this.signinCompiled()
    }
}