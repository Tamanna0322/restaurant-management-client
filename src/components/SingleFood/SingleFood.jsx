import { Helmet } from "react-helmet-async";
import { NavLink, useLoaderData, useParams } from "react-router-dom";


const SingleFood = () => {

    const details = useLoaderData();
    const {id} = useParams();
    const detail = details.find(detail => detail._id === id)
    console.log(detail)

    

    return (
        <div className="border border-dashed border-orange-600 mt-16 mb-16 rounded-xl bg-orange-50">

<Helmet>
                <title>FlavorFleet | singleFood</title>
            </Helmet>

               <div className="flex flex-col  lg:flex-row-reverse justify-between  md:p-4 p-2">
           
            <div className="lg:w-[54%]">
                 <div className=" md:h-[400px] h-[350px]">
                    <img src={detail.photo} className="rounded-xl w-full h-full object-contain" alt="" />
                 </div>
            </div>
            <div className="lg:w-[44%] p-4">
            
              <h2 className="md:text-4xl text-2xl mt-5 font-bold mb-6 text-orange-700">{detail.foodName}</h2>
              <p className="text-orange-700 font-bold" >Category: <span className="text-orange-600">{detail.category}</span></p>

              <p className='text-orange-700 mt-5 mb-5 font-bold'>Price: <span className="text-orange-600">{detail.price}</span></p>
              <p className='flex items-center text-orange-700 font-bold'>Food Origin: <span className="text-orange-600">{detail.origin}</span></p>
            
             <div className="border-t my-5 border-dotted border-orange-800"></div>
              <p className="my-3 text-orange-900 font-bold">Description: <span className="text-orange-700 font-semibold ">{detail.description}</span></p>
              <div className="border-t mt-5 border-dotted border-orange-800"></div>
              
              <p className="text-orange-700 md:text-xl font-bold mt-5">Made By: <span className="text-orange-600">{detail.name}</span></p> 
              
              
            <div className="mt-8">
            <NavLink to='/purchase'> <button className="btn font-bold bg-gradient-to-r from-[#FFD133] to-[#C04619] w-1/2">Purchase</button></NavLink>
            </div>
            </div>
        </div>        

        </div>
    );
};

export default SingleFood;