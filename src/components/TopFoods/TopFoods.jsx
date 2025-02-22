import axios from "axios";
import { useEffect, useState } from "react";
import TopFood from "../TopFood/TopFood";
import { Link } from "react-router-dom";


const TopFoods = () => {

    const [foods, setFoods] = useState([]);

    useEffect(()=>{

        const getFood = async () =>{
            const {data} = await axios(`${import.meta.env.VITE_API_URL}/add`)
            setFoods(data.slice(0,6))
        }
        getFood();

     },[])

    return (
        <div>
            <div>
                <h4 className="text-4xl font-bold text-orange-700 text-center">Our TOP Food Items</h4>
            </div>
             <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {
                    foods.map(food => <TopFood key={food._id} food={food}></TopFood>)
                }
            </div>
            <div className="flex justify-center ">
               <Link to='/allFoods'> <button className='btn border-none px-14 bg-gradient-to-r from-[#FFD133] to-[#C04619]'>See All</button></Link>
            </div>
        </div>
    );
};

export default TopFoods;