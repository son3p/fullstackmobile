const todoFormHbs = `
<header class="navbar navbar-light bg-light navbar-expand">
    <a class="nav-link" href="#">
        <h1 class="btn btn-primary bi-chevron-left">&nbsp;Back</h1>
    </a>
    <h2 class="navbar-text">&nbsp; {{mode}} Todo</h2>
</header>

<form id="submitTodo" >
    <input type="hidden" class="form-control" id="id" name="id" value={{ todo.id }}>
    <input type="hidden" class="form-control" id="id" name="pic" value={{ todo.pic }}>
    <div class="form-group">
        <label for="todoTitle">Todo Title</label>
        <input type="text" class="form-control" id="todoTitle" name="todoTitle" value = "{{todo.todoTitle}}" placeholder="Enter title" {{#if_eq mode 'Destroy'}}  readonly {{/if_eq}}>
    </div>
    <div class="form-group">
        <label for="todoText">Todo text</label>
        <input type="text" class="form-control" id="todoText" name="todoText" value = "{{todo.todoText}}" placeholder="Enter todo" {{#if_eq mode 'Destroy'}}  readonly {{/if_eq}}/>
    </div>
    <div class="form-group">
        <label for="title">Category</label>
        <input type="text" class="form-control" id="title" name="title" value = "{{todo.title}}" placeholder="Enter category" {{#if_eq mode 'Destroy'}}  readonly {{/if_eq}}/>
    </div>
    <div class="form-group">
    {{#if_eq mode 'Destroy'}}  
        <button type="submit" class="btn btn-primary" value="Confirm">Confirm</button>
    {{else}}
        <button type="submit" class="btn btn-primary" value="Save">Save</button>
    {{/if_eq}}
        
    </div>
</form>
`
export {todoFormHbs};