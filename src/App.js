import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import RootLayOut from "./LayOut/RootLayOut";
import Header from './components/Header/Header'
import Order from "./components/Order/Order";
import Shop from './components/shop/Shop'
import Inventory from './components/Inventory/Inventory'
import About from "./components/Abou/About";
import { productsAndCartLoader } from "./loaders/ProductAndCartLoader";


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayOut></RootLayOut>,
      children:[
        {
          path: '/order',
          loader: productsAndCartLoader,
          element: <Order></Order>
        },
        {
          path:'/shop',
          loader: ()=>fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: '/inventory',
          element: <Inventory></Inventory>
        },
        {
          path: '/about',
          element: <About></About>
        }
      ]
    },
    
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
