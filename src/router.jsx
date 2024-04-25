import { createBrowserRouter } from 'react-router-dom';
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Signup from './components/Signup.jsx'
import Signin from './components/Signin.jsx'
import Profile from './components/Profile.jsx'

// Note related
import Todos from './components/todo/Todos.jsx'
import TodoCreate from './components/todo/TodoCreate.jsx'
import TodoUpdate from './components/todo/TodoUpdate.jsx'
import TodoDelete from './components/todo/TodoDelete.jsx'

// Subnote related
import Tasks from './components/task/Tasks.jsx';
import TaskUpdate from './components/task/TaskUpdate.jsx';
import TaskDelete from './components/task/TaskDelete.jsx';
import TaskCreate from './components/task/TaskCreate.jsx';

//  Misc
import ErrorPage from "./components/ErrorPage.jsx";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
      path: "/todos",
      element: <Todos />,
    },
    {
      path: "todos/:todoId/task",
      element: <Tasks />,
    },
    {
      path: "/todos/create",
      element: <TodoCreate />,
    },
    {
      path: "/todos/:todoId/task/create",
      element: <TaskCreate />,
    },
    {
      path: "/todos/:todoId/update",
      element: <TodoUpdate />,
    },
    {
      path: "/todos/:todoId/task/:taskId/delete",
      element: <TaskDelete />,
    },
    {
      path: "/todos/:todoId/task/:taskId/update",
      element: <TaskUpdate />,
    },
    {
      path: "/register",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Signin />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/todos/:todoId/delete",
      element: <TodoDelete />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);

  export default router;