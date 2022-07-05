import { useRoutes } from "react-router-dom";
import { Dashboard, Error, Login, PrivateRoutes } from "./pages";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: (
        <PrivateRoutes>
          <Dashboard />
        </PrivateRoutes>
      ),
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "*",
      element: <Error />,
    },
  ]);
}
