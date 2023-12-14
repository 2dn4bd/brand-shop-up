import { createBrowserRouter } from "react-router-dom";
import Root from "../src/Components/Root/Root";
import AddProduct from "../src/Components/pages/AddProduct/AddProduct";
import Mycart from "../src/Components/pages/Mycart/Mycart";
import Login from "../src/Components/pages/Login/Login";
import Home from "../src/Components/pages/Home/Home";
import CategoryDetails from "../src/Components/pages/CategoryDetails/CategoryDetails";
import ProductDetails from "../src/Components/pages/productDetails/ProductDetails";
import UpdateProducts from "../src/Components/pages/UpdateProducts/UpdateProducts";
import Registration from "../src/Components/pages/Registration/Registration";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../src/Components/pages/ErrorPage/ErrorPage";

const Routes = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader: () => fetch('/category.json'),
                
            },
            {
                path:"/addproduct",
                element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path:"/mycart",
                element:<PrivateRoute><Mycart></Mycart></PrivateRoute>,
                
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/items/:name",
                element:<CategoryDetails></CategoryDetails>,
                loader: ({params}) => fetch(`https://brand-shop-server-lyart.vercel.app/items/${params.name}`)
            },
            {
                path:"/product/:id",
                element:<PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://brand-shop-server-lyart.vercel.app/item/${params.id}`)
            },
            {
                path:"/update/:id",
                element:<PrivateRoute><UpdateProducts></UpdateProducts></PrivateRoute>,
                loader: ({params}) => fetch(`https://brand-shop-server-lyart.vercel.app/item/${params.id}`)
            },
            {
                path:"/register",
                element:<Registration></Registration>
            }
        ]
    }
])

export default Routes;