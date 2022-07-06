import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { Loading } from "./components";
import PrivateRoutes from "./pages/PrivateRoutes";

//using react lazy loading for code splitting
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Login = React.lazy(() => import("./pages/Login"));
const Error = React.lazy(() => import("./pages/Error"));

const LazyLoading = ({ children }) => {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
};

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: (
        <LazyLoading>
          <PrivateRoutes>
            <Dashboard />
          </PrivateRoutes>
        </LazyLoading>
      ),
    },
    {
      path: "/login",
      element: (
        <LazyLoading>
          <Login />
        </LazyLoading>
      ),
    },
    {
      path: "*",
      element: (
        <LazyLoading>
          <Error />
        </LazyLoading>
      ),
    },
  ]);
}
