import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ComponentLogin from "./components/Login/index.jsx";
import { ErrorHandling } from "./components/ErrorHandler";
import { ComponentHome } from "./components/Home";
import { ComponentUsers } from "./components/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ComponentLogin />,
    errorElement: <ErrorHandling />,
  },
  {
    path: "/home",
    element: <ComponentHome />,
  },
  {
    path: "/clients",
    element: <ComponentUsers />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
