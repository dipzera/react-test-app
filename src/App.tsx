import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AppInventory from "./components/AppInventory";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Outlet />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/apps",
        element: <AppInventory />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
