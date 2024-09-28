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
import Booking from "../pages/booking/Booking";
import AdminBooking from "../Adminpages/AdminBooking";
import AdminFacilityManagement from "../Adminpages/AdminFacilityManagement";
import UserDashBoard from "../pages/AdminDashboard/UserDashBoard/UserDashBoard";
import UserMainContent from "../pages/userDashboard/UserMainContent";

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
      {
        path: "booking",
        element: <Booking />
      },
      {
        path: "booking/:id",
        element: <Booking />
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
        path: "booking",
        element: <AdminBooking />
      },
      {
        path: "create-account",
        element: <Register />,
      },
      {
        path: "facility-management",
        element: <AdminFacilityManagement />
      },
    ],
  },
  {
    path: "user/dashboard",
    element: <UserDashBoard />,
    children: [
      {
        index: true,
        element: (
          <>
            <UserMainContent />
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