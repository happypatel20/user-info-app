import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import UserDetails from './components/UserDetails';
import UserList from './components/UserList';
import About from './components/About';


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: "<h1>Error</h1>",
    children : [
      {
        path: "/",
        element: <UserList />  
      },
      {
        path: "/users/:userId",
        element: <UserDetails />  
      },
      {
        path: "about",
        element: <About />
      }
    ]
  },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
   <RouterProvider router={appRouter} />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
