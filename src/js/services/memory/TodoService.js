"use strict";
import axios from "axios";
const USER_API_URL = 'http://localhost:3000/';

class TodoService {
    async fetchTodosForUser(userId) {
        try {
            // Assuming you have an endpoint to fetch todos for a specific user, 
            // you should pass the userId as a parameter to the API call
            return await axios.get(USER_API_URL + `api/todos?userId=${userId}`, { headers: AuthService.authHeader() });
        } catch (error) {
            console.error("Error fetching todos for user:", error);
            throw error;
        }
    }
    
    async addTodosForUser(todo) {
        try {
            // Assuming your API endpoint for adding todos expects a todo object in the request body
            return await axios.post(USER_API_URL + 'api/todos', todo, { headers: AuthService.authHeader() });
        } catch (error) {
            console.error("Error adding todo for user:", error);
            throw error;
        }
    }
    
    async changeTodoForUser(todoId, todo) {
        try {
            return await axios.put(USER_API_URL + `api/todos/${todoId}`, todo, { headers: AuthService.authHeader() });
        } catch (error) {
            console.error("Error updating todo for user:", error);
            throw error;
        }
    }
    
    findByName = (searchKey) => {
        let results = this.todos.filter(function (element) {
            let fullName = element.todoTitle + " " + element.todoText;
            return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
        });
        return results;
    }

    persist = async (todo) => {
        if (todo != null) {
            if (todo.id == null || parseInt(todo.id) < 1) {
                todo.id = TodoService.getNextId();
                this.todos.push(todo);
            } else {
                const todoIndex = this.todos.findIndex(e => e.id == todo.id);
                if (todoIndex >= 0) {
                    let oldTodo = this.todos[todoIndex];
                    const mergedTodo = { ...oldTodo, ...todo };
                    this.todos[todoIndex] = mergedTodo;
                } else {
                    return false;
                }
            }
            return true;
        }
        return false;
    }

    discard = async (todo) => {
        if (todo != null && todo.id != null && parseInt(todo.id) > 0) {
            let filteredTodos = this.todos.filter((item) => item.id != todo.id);
            this.todos = filteredTodos;
            return true;
        }
        return false;
    }
}

export default new TodoService();
