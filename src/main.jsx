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
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
