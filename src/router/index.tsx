import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../Components/layout/Mainlayout";
import Login from "../pages/Loginpage/Login";
import Register from "../pages/RegisterPage/Register";
import Notfoundrouter from "../pages/NotfoundRouter/Notfoundrouter";
import About from "../pages/aboutus/About";
import Contactus from "../pages/contact/Contactus";
import AdminDashboard from "../pages/AdminDashboard/AdminDashboard";
import AdminMainContent from "../Adminpages/AdminMainContant";
import FacilityListing from "../pages/Facilities/FacilityListing";
import FacilityDetails from "../pages/Facilities/FacilityDetails";

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
      {
        path: "facility-listing",
        element: <FacilityListing />
      },
      {
        path: "facility-listing/:id",
        element: <FacilityDetails />
      },
    ],
  },
  {
    path: "admin/dashboard",
    element: <AdminDashboard />,
    children: [
      {
        index: true,
        element: (
          <>
            <AdminMainContent />
          </>
        ),
      },
      {
        path: "create-account",
        element: <Register />,
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