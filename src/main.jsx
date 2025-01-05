import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Root from './components/Root';

import Home from './pages/Home';
import DashBoard from './pages/DashBoard';
import ProductDetails from './components/ProductDetails';
import ProductList from './components/ProductList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from './pages/NotFound';
import CategorySidebar from './components/CategorySidebar';
  const router = createBrowserRouter([
    {
      path: "/",
      element:  <Root></Root>,
      errorElement:  <NotFound></NotFound>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "products/:product_id",
          element: <ProductDetails></ProductDetails>,
          loader: ()=> fetch ('/public/productData.json')
        },
          {
            path: 'listedProducts',
            element: <ProductList></ProductList>,
            loader: ()=> fetch ('/public/productData.json')
          },
         {
          path: "dashboard",
          element: <DashBoard></DashBoard> ,
         },
{
  path: "categorysidebar",
  element: <CategorySidebar></CategorySidebar>,
}


      ],
    },
  ]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
