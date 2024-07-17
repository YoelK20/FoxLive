import { createBrowserRouter } from "react-router-dom";
import HomeLogin from "../Views/Login";
import BaseLayout from "../Views/BaseLayout";

import WatcherPage from "../Views/Watcher";
import HomePage from "../Views/Homepage";
import { io } from "socket.io-client";
import CardPage from "../Views/PageGame";

const socket = io("http://localhost:3000", {
    autoConnect:false
})

const router = createBrowserRouter([
  {
    path: "/login",
    element: <HomeLogin />,
  },
  {
    element: <BaseLayout socket={socket} />,
    children: [
      {
        path: "/",
        element: <HomePage socket={socket} />,
      },
      {
        path: "/CardGame",
        element: <CardPage/>,
      },
      {
        path: "/watch",
        element: <WatcherPage />,
      },
    ],
  },
]);

export default router;
