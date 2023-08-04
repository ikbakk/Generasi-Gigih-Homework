import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./Layouts/MainLayout.tsx";
import SearchPage from "./Pages/Search.tsx";
import RecommendedSongs from "./Pages/RecommendedSongs.tsx";
import Content from "./Components/Content/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Content />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/recommended",
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
