import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Root from './components/Root';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ProductDetails from './components/ProductDetails';
import ProductList from './components/ProductList';
import { ToastContainer} from 'react-toastify';
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
          loader: ({ params }) => fetch(`/productData.json?id=${params.product_id}`),
        },
        
          {
            path: 'listedProducts',
            element: <ProductList></ProductList>,
            loader: ({ params }) => fetch(`/productData.json?id=${params.product_id}`),
          },
         {
          path: "dashboard",
          element: <Dashboard></Dashboard> ,
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
