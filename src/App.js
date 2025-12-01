import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import MainComponent from "./components/Main";
import FooterComponent from "./components/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ContactComponent } from "./components/Contact";
import { AboutComponent } from "./components/About";
import { ErrorComponent } from "./components/Error";

const AppComponent = () => {
  console.log(<MainComponent />);
  console.log(MainComponent());
  return (
    <div id="app" className="app">
      <HeaderComponent />
      <RouterProvider router={appRouter} />
      <FooterComponent />
    </div>
  );
};

const appRouter = createBrowserRouter([
  { path: "/", element: <MainComponent />, errorElement: <ErrorComponent /> },
  { path: "/contact", element: <ContactComponent /> },
  { path: "/about", element: <AboutComponent /> },
  { path: "/**", element: <MainComponent /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppComponent />);
