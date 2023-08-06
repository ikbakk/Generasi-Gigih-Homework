import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./Components/Layouts/MainLayout.tsx";
import SearchPage from "./Components/Pages/Search.tsx";
import RecommendedSongs from "./Components/Pages/RecommendedSongs.tsx";
import Home from "./Components/Pages/Home.tsx";

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
        element: <RecommendedSongs />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
