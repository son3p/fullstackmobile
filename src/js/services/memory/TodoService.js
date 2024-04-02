"use strict";

export default class TodoService {
    constructor() {
        this.todos = [
            { "id": 1, "todoTitle": "First todo", "todoText": "Buy worms", "title": "Food" },
            { "id": 2, "todoTitle": "Second todo", "todoText": "Mix worms and bugs", "title": "Food" },
            { "id": 3, "todoTitle": "Third todo", "todoText": "Stir in butter until worms and bugs are golden brown", "title": "Food" }           
        ];
        // Hard coded due to the fact that this service is a list in RAM each time when created! Do not work in a real storage situation, use the db for that!
        TodoService.lastUsedIdValue = 12;
    }

    static lastUsedIdValue = 0;

    static getNextId = () => {
        TodoService.lastUsedIdValue = TodoService.lastUsedIdValue + 1;
        return TodoService.lastUsedIdValue;
    }

    initialize = async () => {
        // No Initialization required
    }

    findById = (id) => {
        let todo = null;
        let l = this.todos.length;
        for (let i = 0; i < l; i++) {
            if (this.todos[i].id === id) {
                todo = this.todos[i];
                break;
            }
        }

        return todo;
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
                // we have a new one
                todo.id = TodoService.getNextId();
                this.todos.push(todo);
            } else {
                // we already have the one in the cache
                const todoIndex = this.todos.findIndex(e => e.id == todo.id);

                //sanity check
                if (todoIndex >= 0) {
                    let oldTodo = this.todos[todoIndex];
                    const mergedTodo = { ...oldTodo, ...todo };
                    this.todos[todoIndex] = mergedTodo;
                }
                else
                    return false;
            }

            return true;
        }

        return false;
    }

    // Discard - throw away, remove from consideration
    discard = async (todo) => {
        if (todo != null && todo.id != null && parseInt(todo.id) > 0) {
            // we have one to remove, get all others
            let filteredTodos = this.todos.filter((item) => item.id != todo.id);
            this.todos = filteredTodos;
            return true;
        }

        return false;
    }
}