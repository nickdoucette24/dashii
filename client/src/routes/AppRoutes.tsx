import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import App from "../App";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <LandingPage /> },
      { path: "signup", element: <SignUpPage /> },
      { path: "home", element: <HomePage /> }, // todo - :userId will need to be added
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
