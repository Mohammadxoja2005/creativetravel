import { createBrowserRouter } from "react-router-dom";
import MAIN from "../pages/main";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <MAIN />
    },
]) 