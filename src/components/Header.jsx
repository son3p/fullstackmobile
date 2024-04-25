import './css/Header.css';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg  navbar-dark ">
      <div className="container-fluid ">
        <a className="navbar-brand" href="#">To Do List Application</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center m-4 border border-dark border-2 rounded" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item m-2">
              <a className="nav-link bi bi-house-door-fill" href="/">Home</a>
            </li>
            <li className="nav-item m-2">
              <a className="nav-link bi bi-list-task" href="/todos">Todos</a>
            </li>
            <li className="nav-item m-2">
              <a className="nav-link bi bi-bookmark-fill" href="/about">About</a>
            </li>
            <li className="nav-item m-2">
              <a className="nav-link bi bi-bug-fill" href="/sadSD">Test for error</a>
            </li>
            <li className="nav-item m-2">
              <a className="nav-link bi-person-plus-fill" href="/register">Register</a>
            </li>
            <li className="nav-item m-2">
              <a className="nav-link bi-box-arrow-in-right" href="/login">Login</a>
            </li>
        </ul>
        </div>
      </div>
    </nav>
  )
}