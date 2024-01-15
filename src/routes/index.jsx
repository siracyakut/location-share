import { createBrowserRouter } from "react-router-dom";
import MainLayout from "~/layouts/main";
import Home from "~/pages/home";
import Profile from "~/pages/profile";
import ProtectedRoute from "~/routes/components/protected-route";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "*",
        element: (
          <div className="flex items-center justify-center">
            <p className="w-max rounded-lg px-4 py-2 bg-red-200 text-red-600">
              404 Not Found
            </p>
          </div>
        ),
      },
    ],
  },
]);

export default routes;
