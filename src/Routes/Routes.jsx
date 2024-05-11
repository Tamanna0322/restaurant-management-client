import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import AllFoods from "../components/AllFoods/AllFoods";
import Error from "../pages/Home/Error/Error";
import Login from "../pages/Login/Login";
import Register from "../components/Register/Register";
import AddFood from "../pages/AddFood/AddFood";


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
            loader: () => fetch(`${import.meta.env.VITE_API_URL}/add`)
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
        }
      ]
    },
  ]);


  export default router;