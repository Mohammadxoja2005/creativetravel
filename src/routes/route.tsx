import { createBrowserRouter } from "react-router-dom";
// pages
import MAIN from "../pages/main";
import ABOUT from "../pages/about";
import TOUR from "../pages/tour/indext";
import TOURS from "../pages/tours";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <MAIN />
    },
    {
        path: "/about",
        element: <ABOUT />
    },
    {
        path: "/tour",
        element: <TOUR />
    },
    {
        path: "/tours",
        element: <TOURS />
    },
]) 