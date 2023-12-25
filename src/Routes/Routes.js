import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Dashboard from "../Dashboard/Dashboard";
import Loader from "../Helpers/Loader";
import Root from "../Pages/Root/Root";
import NotfoundPage from "../Pages/404/NotfoundPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        loader: Loader,
        errorElement:<NotfoundPage/>,
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