import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import Root from './routes/root';
import Check from './pages/checkLogin'
import Regi from './pages/regristration';
import Login from './pages/login'
import ErrorPage from './pages/ErrorPage';
import reportWebVitals from './reportWebVitals';
import App from "./pages/App";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root></Root>,
//     errorElement: <ErrorPage></ErrorPage>,
//     children: [
//       {
//         path: "register",
//         element: <Regi/>,
//       },
//       {
//         path: "login",
//         element: <Login/>
//       },
//       {
//         path: "checkLogin",
//         element: <Check/>
//       },
//     ],

//   },
// ]);
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//https://reactrouter.com/en/main/start/tutorial