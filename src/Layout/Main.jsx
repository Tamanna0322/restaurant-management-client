import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";


const Main = () => {
    return (
        <div>
            <div className="">
            <Navbar></Navbar>
            </div>
            <div className="max-w-7xl mx-auto mt-10 px-4">
            <Outlet></Outlet>
            </div>
       

            <Footer></Footer>

        </div>
    );
};

export default Main;