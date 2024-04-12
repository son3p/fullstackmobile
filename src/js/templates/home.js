import './css/home.css'

const homeHbs = `
<nav class="navbar navbar-expand-sm  navbar-dark">
    <div class="container-fluid justify-content-center">
      <a class="navbar-brand" href="#">To Do List Application</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center m-4 border border-dark border-2 rounded" id="collapsibleNavbar">
        <ul class="navbar-nav">
          <li class="nav-item m-2">
            <a class="nav-link bi bi-list-task" href="/todos">Tasks</a>
          </li>
          <li class="nav-item m-2">
            <a class="nav-link bi-person-plus-fill" href="/register">Register</a>
          </li>
          <li class="nav-item m-2" >
            <a class="nav-link bi-box-arrow-in-right" href="/login">Login</a>
          </li>
        </ul>
      </div>       
    </div>
</nav>
<p></p>
<div id='content' class="container-fluid">
    <div class="row">
      <div class="col">
        <div class="mb-3">
          <label for="searchString" class="form-label fw-bold">Search:</label>
          <input id="searchString" class='search-key' type="text" placeholder="Enter search string" name="searchString">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="mb-3">
        <a class="nav-link" href="#todos/new">
          <h1 class="btn btn-dark border border-2 border-dark  ">New Todo</h1>
        </a>
        </div>
      </div>
    </div>
    <div class="row">
        <div class="col ">
        <article id="todoList" class="mt-3"> <!-- Add margin-top for spacing -->
      
        </div>
    </div>
</div>
`
export {homeHbs}; // returning a object in case we want many templates in the same file