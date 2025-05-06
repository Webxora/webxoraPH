import { lazy } from "react";
import MainLayout from "@/components/layouts/main-layout";

const HomePage = lazy(() => import("@/features/home/pages/home-page"));
const NotFoundPage = lazy(() =>
  import("@/features/errors/pages/not-found-page")
);

export const publicRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
  { path: "*", element: <NotFoundPage /> },
];
