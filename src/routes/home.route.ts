import HomePage from "../pages/home-page";
import { RouteRootInterface } from "./route.types";

const HomePageRoutes: RouteRootInterface[] = [
  {
    name: "home-page",
    path: "/",
    component: HomePage,
  },
];

export default HomePageRoutes;
