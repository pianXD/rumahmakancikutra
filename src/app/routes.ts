import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "./pages/Home";
import Minuman from "./pages/Minuman";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "minuman", Component: Minuman },
    ],
  },
]);
