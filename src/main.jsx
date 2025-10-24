import DefaultRouter from "./providers/DefaultRouter.jsx";
import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={DefaultRouter} />

    <ToastContainer theme="colored" position="bottom-right" closeOnClick />
  </StrictMode>
);
