import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./Components/Layouts/MainLayout.tsx";
import SearchPage from "./Components/Pages/Search.tsx";
import Home from "./Components/Pages/Home.tsx";
import MoreSongs from "./Components/Pages/MoreSongs.tsx";
import UserPlaylistSongs from "./Components/Pages/UserPlaylistSong.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/:playlistId",
        element: <MoreSongs />,
      },
      {
        path: "/user/playlist/:playlistId",
        element: <UserPlaylistSongs />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
