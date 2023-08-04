import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout.tsx";
import Content from "./Components/Content/index.tsx";
import SearchPage from "./Pages/Search.tsx";
import RecommendedSongs from "./Pages/RecommendedSongs.tsx";

const router = createBrowserRouter([
  {
    path: "/",
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
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MainLayout>
      <RouterProvider router={router} />
    </MainLayout>
  </React.StrictMode>,
);
