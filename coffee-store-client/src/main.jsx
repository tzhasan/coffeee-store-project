// import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AddCoffee from "./Component/AddCoffee.jsx";
import UpdateCoffee from "./Component/UpdateCoffee.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () =>
      fetch("https://coffee-store-server-tzhasan.vercel.app/coffee"),
  },
  {
    path: "addCoffee",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "updateCoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) =>
      fetch(
        `https://coffee-store-server-tzhasan.vercel.app/coffee/${params.id}`
      ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
