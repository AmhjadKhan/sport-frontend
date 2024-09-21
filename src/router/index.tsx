import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../Components/layout/Mainlayout";
import Login from "../pages/Loginpage/Login";
import Register from "../pages/RegisterPage/Register";
import Notfoundrouter from "../pages/NotfoundRouter/Notfoundrouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <>
           <App />
          </>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "*",
    element: <Notfoundrouter />
  },
]);

export default router;