import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Component/Home/Home";
import Error from "../Component/Error/Error";
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";
import PrivateRoute from "../Component/PrivetRouter/PrivetRouter";
import ArtDetails from "../Component/ArtDetails/ArtDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
    children: [
        {
            index: true,
            Component: Home
        },
        {
          path:'/login',
          Component: Login
        },
        {
          path: '/register',
          Component: Register
        },
        {
          path: '/artDetails',
          element: <PrivateRoute><ArtDetails></ArtDetails></PrivateRoute>
        }
    ],
  },
  {
    path:'/*',
    Component: Error
  }
]);

export default router