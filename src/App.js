import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import MainComponent from "./components/Main";
import FooterComponent from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { ContactComponent } from "./components/Contact";
import { AboutComponent } from "./components/About";
import { ErrorComponent } from "./components/Error";
import { ResturantMenu } from "./components/ResturantMenu";
import UserContext from "./context/UserContext.js";
import { Cart } from "./components/Cart.js";

const Grocery = lazy(() => import("./components/Grocery.js"));

const AppComponent = () => {
  const [userName, setUserName] = useState("Guest");

  useEffect(() => {
    //some auth logic
    setTimeout(() => {
      setUserName("Sanjay");
    }, 2000);
  }, []);

  return (
    <div id="app" className="app">
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <HeaderComponent />
        <Outlet />
        <FooterComponent />
      </UserContext.Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    children: [
      {
        path: "/groceries",
        element: (
          <Suspense fallback={<h1>Loading Groceries</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      { path: "/resturants", element: <MainComponent /> },
      { path: "/contact", element: <ContactComponent /> },
      { path: "/about", element: <AboutComponent /> },
      { path: "/cart", element: <Cart /> },
      {
        path: "/resturant/menu/:id",
        element: <ResturantMenu />,
      },
    ],
    errorElement: <ErrorComponent />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
