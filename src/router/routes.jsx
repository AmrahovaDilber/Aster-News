import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Search from "../pages/Search";
import View from "../pages/View";
import AppLayout from "../layouts/AppLayout";

const routers = [
  {
    path: "/",
    element: <Home></Home>,
    layout: "app",
  },
  {
    path: "about",
    element: <About></About>,
  },
  {
    path: "search",
    element: <Search></Search>,
    layout: "app",
  },
  {
    path: "view",
    element: <View></View>,
    layout: "app",
  },
];
const routerMap = (arr) =>
  arr.map((router) => {
    if (router.layout) {
      if (router.layout === "app") {
              router.element = <AppLayout>{router.element}</AppLayout>;
          }
      }
      return router;
  });
export default createBrowserRouter(routerMap(routers))
