import { createBrowserRouter } from "react-router-dom";
// import NotFoundRoute from "../shared/NotFoundRoute";

// import Login from "../pages/Login";
// import Register from "../pages/Register";
import App from "../App";
import MainLayout from "../Components/layout/Mainlayout";

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
    // element: <Login />,
  },
  {
    path: "/register",
    // element: <Register />,
  },
  {
    path: "*",
    // element: <NotFoundRoute />,
  },
]);

export default router;