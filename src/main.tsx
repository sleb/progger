import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import AuthRequired from "./components/AuthRequired";
import HomePage from "./components/HomePage/HomePage";
import Layout from "./components/Layout/Layout";
import LoginPage from "./components/LoginPage/LoginPage";
import ProgramViewPage from "./components/ProgramDetailPage/ProgramViewPage";
import ProgramListPage from "./components/ProgramsListPage/ProgramListPage";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { path: "login", element: <LoginPage /> },
      {
        element: <Layout />,
        children: [
          { index: true, element: <HomePage /> },
          {
            element: <AuthRequired />,
            children: [
              {
                path: "programs",
                children: [
                  { index: true, element: <ProgramListPage /> },
                  { path: ":id", element: <ProgramViewPage /> },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CssBaseline />
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>
);
