const todoHbs = `
<header class="navbar navbar-light bg-light navbar-expand">
    <a class="nav-link" href="#">
        <h1 class="btn btn-primary bi-chevron-left">&nbsp;Back</h1>
    </a>
    <h2 class="navbar-text">&nbsp;&nbsp Todo details</h1>
</header>
<div class="content">
    <div class="card">
        
        <div class="card-body">
            <h5 class="card-title">
                {{ todoTitle }} 
                </p> 
                {{ todoText }}
            </h5>
            <h6 class="card-subtitle mb-2 text-muted">
                {{ title }}
            </h6>
        </div>
        <ul class="list-group list-group-flush d-flex ">

            <a href='#todos/{{ id }}/edit' class="btn btn-primary" role="button">Edit</a>
            </p>
            <a href='#todos/{{ id }}/delete' class="btn btn-primary" role="button">Delete</a>
                
        </ul>
    </div>
</div>
`
export {todoHbs};