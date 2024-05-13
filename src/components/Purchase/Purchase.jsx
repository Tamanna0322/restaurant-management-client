import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";


const Purchase = () => {
    const {user} = useContext(AuthContext);
    // console.log(user)

    const handlePurchaseBtn =async event =>{
        event.preventDefault();
        const form = event.target;

        const foodName = form.foodName.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;
        const orderedFoodItem ={ foodName, quantity, price, date, name, email};
          console.log(orderedFoodItem)

          try {
            const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/purchase`,
            orderedFoodItem
            )
            console.log(data)
             toast.success("Food Purchase Successfully");
             form.reset();
        }
        catch (error) {
            console.log(error)
        }
  
    }


    return (
        <div className="">

<Helmet>
                <title>FlavorFleet | Purchase</title>
            </Helmet>

             <div className="border mt-16 border-orange-400 border-dashed p-8 mb-16 rounded-xl bg-orange-50">
           <div className="md:mb-5 mb-3">
               <h3 className="text-center md:text-3xl text-xl font-bold text-orange-600">FOOD PURCHASE FORM</h3>
           </div>
           <form onSubmit={handlePurchaseBtn}>

               <div className="grid md:grid-cols-2 grid-cols-1 gap-9 md:mb-5 mb-3">
                   {/* Food name */}
                   <div className="form-control">
                       <label className="label">
                           <span className="label-text text-orange-700 lg:text-xl font-bold">Food Name</span>
                       </label>
                       <input type="text" name="foodName" placeholder="Enter Food Name" className="input input-bordered"
                       />
                   </div>
                   {/* Quantity */}
                   <div className="form-control">
                       <label className="label">
                           <span className="label-text text-orange-700 lg:text-xl font-bold">Quantity</span>
                       </label>
                       <input type="text" name="quantity" placeholder="Enter Quantity" className="input input-bordered"
                       />
                   </div>
               </div>
               
               <div className="md:mb-5 mb-3 grid md:grid-cols-2 grid-cols-1 gap-9">
                    {/* price */}
                    <div className="form-control">
                       <label className="label">
                           <span className="label-text text-orange-700 lg:text-xl font-bold">Food Price</span>
                       </label>
                       <input type="text" name="price" placeholder="Enter Food Price" className="input input-bordered"
                       />
                   </div>
                    <div className="form-control">
                       <label className="label">
                           <span className="label-text text-orange-700 lg:text-xl font-bold">Buying Date</span>
                       </label>
                       <input type="text" name="date" value={new Date().toISOString()} placeholder="Enter date of buying" className="input input-bordered"
                       />
                   </div>
             
           </div>

               <div className="mb-7 grid md:grid-cols-2 grid-cols-1 gap-9">
                    {/* buyer name */}
                    <div className="form-control">
                       <label className="label">
                           <span className="label-text text-orange-700 lg:text-xl font-bold">Buyer Name</span>
                       </label>
                       <input type="text" name="name" value={user?.displayName} placeholder="Enter Your Name" className="input input-bordered"
                       />
                   </div>

                    {/* buyer email */}
                    <div className="form-control">
                       <label className="label">
                           <span className="label-text text-orange-700 lg:text-xl font-bold">Buyer Email</span>
                       </label>
                       <input type="email" name="email" value={user?.email} placeholder="Enter Your Email" className="input input-bordered"
                       />
                   </div>
               </div>

              <div className="flex justify-center">
               <input type="submit" value="Purchase" className="btn w-1/2 border-none bg-gradient-to-r from-[#FFD133] to-[#C04619]"/>
              </div>

           </form>
       </div>
        </div>
    );
};

export default Purchase;