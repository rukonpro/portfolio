import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Dashboard from "../Dashboard/Dashboard";
import Loader from "../Components/Loader";
import Root from "../Pages/Root/Root";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        loader: Loader,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: Loader,
            },
            {
                path: "home",
                element: <Home />,
                loader: Loader,
            },
            {
                path: "dashboard",
                element: <Dashboard />,
                loader: Loader,
            },
        ],
    },
]);

export default router;