import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Base from "./Layouts/Base";
import { Home, About, Products, ProductDetail, Error } from "./pages/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Base />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "products", element: <Products /> },
      { path: "/productDetails/:id", element: <ProductDetail /> },
    ],
  },
]);
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
