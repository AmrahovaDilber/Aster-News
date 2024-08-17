import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Search from "../pages/Search";
import View from "../pages/View";
import AppLayout from "../layouts/AppLayout";
import Contact from "../pages/Contact";

const routers = [
  {
    path: "/",
    name: "home",
    element: <Home></Home>,
    layout: "app",
  },
  {
    path: "about",
    name: "about",
    element: <About></About>,
  },
  {
    path: "elaqe",
    name: "contact",
    element: <Contact></Contact>,
  },
  {
    path: "search",
    name: "search",
    element: <Search></Search>,
    layout: "app",
  },
  {
    path: "view",
    name: "view",
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
export default routerMap(routers);
