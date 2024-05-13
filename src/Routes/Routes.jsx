import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import AllFoods from "../components/AllFoods/AllFoods";
import Error from "../pages/Home/Error/Error";
import Login from "../pages/Login/Login";
import Register from "../components/Register/Register";
import AddFood from "../pages/AddFood/AddFood";
import SingleFood from "../components/SingleFood/SingleFood";
import Purchase from "../components/Purchase/Purchase";
import MyAdd from "../components/MyAdd/MyAdd";
import Update from "../components/Update/Update";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/allFoods',
            element: <AllFoods></AllFoods>,
    
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/add',
          element: <AddFood></AddFood>
        },
        {
          path: '/food/:id',
          element: <SingleFood></SingleFood>,
          loader: () => fetch(`${import.meta.env.VITE_API_URL}/add`)
        },
        {
          path: '/purchase',
          element: <Purchase></Purchase>
        },
        {
          path: '/myAdd',
          element: <MyAdd></MyAdd>
        },
        {
          path: '/update/:id',
          element: <Update></Update>,
          loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/add/${params.id}`)
        }
      ]
    },
  ]);


  export default router;