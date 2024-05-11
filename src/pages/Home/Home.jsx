import About from "../../components/About/About";
import Salad from "../../components/Salad/Salad";
import Slider from "../../components/Slider/Slider";


const Home = () => {
    return (
        <div>
              <Slider></Slider>

              <Salad></Salad>
              <About></About>
        </div>
    );
};

export default Home;