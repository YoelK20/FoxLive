import { createBrowserRouter, redirect } from "react-router-dom";
import HomeLogin from "../Views/LoginPage";
import BaseLayout from "../Views/BaseLayout";
import StreamerPage from "../Views/Streamer";
import WatcherPage from "../Views/Watcher";
import HomePage from "../Views/Homepage";
import { io } from "socket.io-client";
import RegPage from "../Views/RegisterPage";
import Toastify from "toastify-js"


const socket = io("http://localhost:3000", {
    autoConnect:false
})

const router = createBrowserRouter([
  {
    path: "/login",
    element: <HomeLogin />,
    loader: () => {
      if (localStorage.access_token) {
        Toastify({
          text: "You already logged in",
          duration: 2000,
          newWindow: true,
          close: true,
          gravity: "bottom",
          position: "right",
          stopOnFocus: true,
          style: {
            background: "#EF4C54",
            color: "#17202A",
            boxShadow: "0 5px 10px black",
            fontWeight: "bold",
          },
        }).showToast();
        return redirect("/");
      }
      return null;

    }
  },
  {
    path: "/register",
    element: <RegPage />,
    loader: () => {
      if (localStorage.access_token) {
        Toastify({
          text: "You already logged in",
          duration: 2000,
          newWindow: true,
          close: true,
          gravity: "bottom",
          position: "right",
          stopOnFocus: true,
          style: {
            background: "#EF4C54",
            color: "#17202A",
            boxShadow: "0 5px 10px black",
            fontWeight: "bold",
          },
        }).showToast();
        return redirect("/");
      }
      return null;

    }
  },
  { path: "/",
    element: <BaseLayout socket={socket} />,
    loader: () => {
      if (!localStorage.access_token) {
        Toastify({
          text: "Please log in first",
          duration: 2000,
          newWindow: true,
          close: true,
          gravity: "bottom",
          position: "right",
          stopOnFocus: true,
          style: {
            background: "#EF4C54",
            color: "#17202A",
            boxShadow: "0 5px 10px black",
            fontWeight: "bold",
          },
        }).showToast();
        return redirect("login");
      }

      return null;
    },
    children: [
      {
        index: true,
        element: <HomePage socket={socket} />,
        
      },
      {
        path: "stream",
        element: <StreamerPage />,
      },
      {
        path: "watch",
        element: <WatcherPage />,
      },
    ],
  },
]);

export default router;
