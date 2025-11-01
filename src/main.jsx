import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Onboarding from "./pages/Onboarding.jsx";
import Start from "./pages/Start.jsx";
import Resources from "./pages/Resources.jsx";

import OnboardingGuard from "./guards/OnboardingGuard.jsx";
import AuthGuard from "./guards/AuthGuard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthGuard>
        <App />
      </AuthGuard>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: "start", element: <Start /> },
      { path: "resources", element: <Resources /> },
    ],
  },
  {
    path: "/onboarding",
    element: (
      <OnboardingGuard>
        <Onboarding />
      </OnboardingGuard>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
