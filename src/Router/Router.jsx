import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Component/Home/Home";
import Error from "../Component/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
    children: [
        {
            index: true,
            Component: Home
        }
    ],
  },
  {
    path:'/*',
    Component: Error
  }
]);

export default router