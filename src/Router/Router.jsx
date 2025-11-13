import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Component/Home/Home";
import Error from "../Component/Error/Error";
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";
import PrivateRoute from "../Component/PrivetRouter/PrivetRouter";
import ArtDetails from "../Component/ArtDetails/ArtDetails";
import AllArt from "../Component/AllArt/AllArt";
import AddArt from "../Component/AddArt/AddArt";
import MyGallery from "../Component/MyGallery/MyGallery";
import MyFavorit from "../Component/MyFavorit/MyFavorit";

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
          path: '/artDetails/:id',
          element: <PrivateRoute><ArtDetails></ArtDetails></PrivateRoute>
        },
        {
          path: '/artwork',
          Component: AllArt
        },
        {
          path: '/addArt',
          element: <PrivateRoute><AddArt></AddArt></PrivateRoute>
        },
        {
          path : '/gallery',
          element: <PrivateRoute><MyGallery></MyGallery></PrivateRoute>
        },
        {
          path: '/favorites',
          element: <PrivateRoute><MyFavorit></MyFavorit></PrivateRoute>
        }
    ],
  },
  {
    path:'/*',
    Component: Error
  }
]);

export default router