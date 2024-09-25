import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Register from "./page/register/register";
import Login from "./page/login/login";
import HomePage from "./page/home/home";
import AddPage from "./page/add/add";
import FoodPage from "./page/food/food";
import Environment from "./page/environment/environment";
import UpdatePage from "./page/update/update";
// import Profile from "./page/profile/profile";
function Koi() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/add",
      element: <AddPage />,
    },
    {
      path: "/food",
      element: <FoodPage />,
    },
    {
      path: "/environment",
      element: <Environment />,
    },
    {
      path: "/update",
      element: <UpdatePage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Koi;