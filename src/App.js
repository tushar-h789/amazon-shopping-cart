import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import RootLayOut from "./LayOut/RootLayOut";
import Header from './components/Header/Header'
import Order from "./components/Order/Order";
import Shop from './components/shop/Shop'
import Inventory from './components/Inventory/Inventory'
import About from "./components/Abou/About";
import { productsAndCartLoader } from "./loaders/ProductAndCartLoader";
import Login from "./components/Login/Login";
import Register from './components/Register/Register'
import Shipping from "./components/Shipping/Shipping";
import PrivateRoute from "./route/PrivateRoute";


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayOut></RootLayOut>,
      children:[
        {
          path: 'order',
          loader: productsAndCartLoader,
          element: <Order></Order>
        },
        {
          path:'shop',
          loader: ()=>fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: 'shipping',
          element: <PrivateRoute><Shipping></Shipping></PrivateRoute>
        },
        {
          path: 'inventory',
          element: <PrivateRoute><Inventory></Inventory></PrivateRoute>
        },
        {
          path: 'about',
          element: <About></About>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'register',
          element: <Register></Register>
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
