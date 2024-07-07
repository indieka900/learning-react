import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './global.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RegisterForm } from './component/RegisterForm';
import { UsersPage } from './pages/UsersFile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/users',
        element: <UsersPage/>
      }
    ]
  },
  {
    path: '/register',
    element: <RegisterForm/>
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
