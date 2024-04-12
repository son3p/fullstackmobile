import './css/todo.css'

const todoHbs = `
<header class="navbar navbar-light bg-light navbar-expand">
    <a class="nav-link" href="#">
        <h1 class="btn btn-dark border border-2 border-dark bi-chevron-left">&nbsp;Back</h1>
    </a>
    <h2 class="navbar-text fw-bold">&nbsp;&nbsp Todo details</h2>

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
    </div>
        <ul class="list-group list-group-flush d-flex mt-4 ">

            <a href='#todos/{{ id }}/edit' class="btn btn-dark border border-2 border-dark custom-btn-1" role="button">Edit</a>
            </p>
            <a href='#todos/{{ id }}/delete' class="btn btn-dark border border-2 border-dark custom-btn-2" role="button">Delete</a>
                
        </ul>
   
</div>
`
export {todoHbs};