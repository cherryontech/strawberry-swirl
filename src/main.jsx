import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Onboarding from "./pages/Onboarding.jsx";
import Start from "./pages/Start.jsx";
import Resources from "./pages/Resources.jsx";

import OnboardingGuard from "./guards/OnboardingGuard.jsx";
import Navbar from "./components/Navbar.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import JobTracking from "./pages/JobTracking.jsx";

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "onboarding",
        element: (
          <OnboardingGuard>
            <Onboarding />
          </OnboardingGuard>
        ),
      },
      { path: "start", element: <Start /> },
      { path: "resources", element: <Resources /> },
      { path: "/", element: <App /> },
      { path: "/jobtracking", element: <JobTracking /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

export default Layout;
