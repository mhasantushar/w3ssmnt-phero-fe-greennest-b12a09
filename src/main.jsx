import DefaultRouter from "./providers/DefaultRouter.jsx";
import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router";
import AuthProvider from "./providers/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={DefaultRouter} />
    </AuthProvider>

    <ToastContainer theme="colored" position="bottom-right" closeOnClick />
  </StrictMode>
);
