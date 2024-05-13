// import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import Food from "../Food/Food";
import axios from "axios";


const AllFoods = () => {

     const [foods, setFoods] = useState([]);
     useEffect(()=>{

        const getFood = async () =>{
            const {data} = await axios(`${import.meta.env.VITE_API_URL}/add`)
            setFoods(data)
        }
        getFood();

     },[])

    

    return (
        <div>
            <div className="flex justify-center">
                <form>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text text-3xl mb-5 font-bold text-orange-800">Taste Explore !!!</span>
                        </label>
                        <div className="join">
                            <input type="text" placeholder="search your food" className="input input-bordered join-item" />
                            <button className="btn px-6 bg-orange-600 text-white join-item">Search</button>
                        </div>
                    </fieldset>
                </form>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {
                    foods.map(food => <Food key={food._id} food={food}></Food>)
                }
            </div>

        </div>
    );
};

export default AllFoods;