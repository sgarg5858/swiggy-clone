import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import MainComponent from "./components/Main";
import FooterComponent from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { ContactComponent } from "./components/Contact";
import { AboutComponent } from "./components/About";
import { ErrorComponent } from "./components/Error";

const AppComponent = () => {
  return (
    <div id="app" className="app">
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    children: [
      { path: "/", element: <MainComponent /> },
      { path: "/contact", element: <ContactComponent /> },
      { path: "/about", element: <AboutComponent /> },
    ],
    errorElement: <ErrorComponent />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
