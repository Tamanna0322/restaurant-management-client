import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import AllFoods from "../components/AllFoods/AllFoods";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/allFoods',
            element: <AllFoods></AllFoods>
        }
      ]
    },
  ]);


  export default router;