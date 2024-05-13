// import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import Food from "../Food/Food";
import axios from "axios";
import { Helmet } from "react-helmet-async";


const AllFoods = () => {

     const [foods, setFoods] = useState([]);
     const [searchQuery, setSearchQuery] = useState("");
     const [filteredFoods, setFilteredFoods] = useState([]);
     console.log(foods);
     useEffect(()=>{

        const getFood = async () =>{
            const {data} = await axios(`${import.meta.env.VITE_API_URL}/add`)
            setFoods(data)
            setFilteredFoods(data);
        }
        getFood();

     },[])


     const handleSearch =async event => {
        event.preventDefault();
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/search`, {
                params: { searchQuery }
            });
            setFilteredFoods(data);
        } catch (error) {
            console.error('Error searching for foods:', error);
        }
    };

    

    return (
        <div>
             <Helmet>
                <title>FlavorFleet | AllFoods</title>
            </Helmet>

            <div className="flex justify-center">
                <form onSubmit={handleSearch}>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text text-3xl mb-5 font-bold text-orange-800">Taste Explore !!!</span>
                        </label>
                        <div className="join">
                            <input type="text" placeholder="search your food" className="input input-bordered join-item" onChange={event => setSearchQuery(event.target.value)} />
                            <button type="submit" className="btn px-6 bg-orange-600 text-white join-item">Search</button>
                        </div>
                    </fieldset>
                </form>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {
                    filteredFoods.map(food => <Food key={food._id} food={food}></Food>)
                }
            </div>

        </div>
    );
};

export default AllFoods;