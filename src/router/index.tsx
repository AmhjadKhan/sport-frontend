import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../Components/layout/Mainlayout";
import Login from "../pages/Loginpage/Login";
import Register from "../pages/RegisterPage/Register";
import Notfoundrouter from "../pages/NotfoundRouter/Notfoundrouter";
import About from "../pages/aboutus/About";
import Contactus from "../pages/contact/Contactus";

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
      {
        path: "about-us",
        element: <About />
      },
      {
        path: "contact-us",
        element: <Contactus />
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