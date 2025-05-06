import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { publicRoutes } from "./routes-config";
import Loading from "@/components/loading";

export default function AppRouter() {
  const routes = useRoutes([...publicRoutes]);
  return <Suspense fallback={<Loading />}>{routes}</Suspense>;
}
