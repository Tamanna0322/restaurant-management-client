import axios from "axios";
import { useEffect, useState } from "react";
import OneGallery from "../OneGallery/OneGallery";


const Gallery = () => {

    const [foods, setFoods] = useState([]);

    useEffect(()=>{

        const getFood = async () =>{
            const {data} = await axios(`${import.meta.env.VITE_API_URL}/add`)
            setFoods(data)
        }
        getFood();

     },[])
     console.log(foods);

    return (
        <div>
            <div>
                <h3 className="lg:text-5xl md:text-3xl text-2xl font-bold text-center text-orange-700">Our Gallery Section</h3>
            </div>
           <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mb-10">
           {
                foods.map(gallery => <OneGallery key={gallery._id} gallery={gallery}></OneGallery> )
            }
           </div>
        </div>
    );
};

export default Gallery;