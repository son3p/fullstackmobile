const todoListHbs = `
<div class="table-view">
    {{#each this}}
    <div class="table-view-cell media">
        <a href="#todos/{{ id }}/read">
            <div class="card">
                <div class="card-content">
                    <div class="card-header">
                        <h2 class="todo-title">{{todoTitle}}</h2>
                        <p class="title">{{title}}</p>
                    </div>
                    <div class="card-body">
                        <p class="todo-text">{{todoText}}</p>
                    </div>
                </div>
            </div>
        </a>
    </div>
    {{/each}}
</div>

`
export {todoListHbs};