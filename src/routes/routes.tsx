import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Posts from "../pages/Posts/Posts";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Auth/Login";
import NotFound from "../pages/NotFound/NotFound";

export const routes = createBrowserRouter([
  {
    element: <MainLayout />,
    path: "/",
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "posts",
        element: <Posts />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    path: "/auth/login",
    children: [
      {
        index: true,
        element: <Login />,
      },
    ],
  },
  {
    element: <NotFound />,
    path: "*",
  },
]);
