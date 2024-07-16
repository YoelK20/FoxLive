
import { createBrowserRouter } from "react-router-dom";
import HomeLogin from "../Views/Login";
import BaseLayout from "../Views/BaseLayout";
import StreamerPage from "../Views/Streamer";
import WatcherPage from "../Views/Watcher";
import HomePage from "../Views/Homepage";


const router = createBrowserRouter([
    {
        path: "/login",
        element: <HomeLogin />
    },
    {
        element: <BaseLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/stream",
                element: <StreamerPage />
            },
            {
                path: "/watch",
                element: <WatcherPage />
            },


        ]
    },

]);


export default router