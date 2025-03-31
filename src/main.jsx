import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import HomePage from "./components/HomePage.jsx";
import About from "./components/About.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import BrowseBooks from "./components/BrowseBooks.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BookDetails from "./components/BookDetails.jsx";
import AddBook from "./components/AddBook.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/browsebooks",
        element: <BrowseBooks />,
      },
      {
        path: "/browsebooks/:category",
        element: <BrowseBooks />,
      },
      {
        path: "/addbookpage",
        element: <AddBook />,
      },
      {
        path: "/book/:id",
        element: <BookDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
