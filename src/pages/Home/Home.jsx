
import { Helmet } from "react-helmet-async";
import About from "../../components/About/About";
import Salad from "../../components/Salad/Salad";
import Slider from "../../components/Slider/Slider";
import TopFoods from "../../components/TopFoods/TopFoods";


const Home = () => {
    return (
        <div>
               <Helmet>
                <title>FlavorFleet | Home</title>
            </Helmet>

              <Slider></Slider>
               <TopFoods></TopFoods>
              <Salad></Salad>
              <About></About>
        </div>
    );
};

export default Home;