import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";


const Update = () => {
    const { user } = useContext(AuthContext);
    const data = useLoaderData();
    const {_id, photo, foodName, category, quantity, price, origin, description } = data;


    const handleUpdate =async event =>{
        event.preventDefault();
        const form = event.target;

        const photo = form.photo.value;
        const foodName = form.foodName.value;
        const category = form.category.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const price = form.price.value;
        const origin = form.origin.value;
        const name = form.name.value;
        const email = form.email.value;
        const updateItem ={photo, foodName, category, quantity, description, price,origin,name,email};
        //   console.log(updateItem)

          try {
            const {data} = await axios.put(`${import.meta.env.VITE_API_URL}/add/${_id}`,
            updateItem
            )
            console.log(data)
             toast.success("Food Item Updated successfully");
        }
        catch (error) {
            console.log(error)
        }

    }

    return (
        <div className="border border-orange-400 border-dashed p-8 mb-16 rounded-xl bg-orange-50">
             <Helmet>
                <title>FlavorFleet | Update</title>
            </Helmet>
        <div className="md:mb-5 mb-3">
            <h3 className="text-center md:text-3xl text-xl font-bold text-orange-500">Update Your Food ITEM</h3>
        </div>
        <form onSubmit={handleUpdate}>
            <div className="md:mb-5 mb-3">
                {/*image URL*/}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-orange-700 lg:text-xl font-bold">Food Image URL</span>
                    </label>
                    <input type="text" name="photo" defaultValue={photo} className="input input-bordered"
                    />
                </div>
            </div>

            <div className="grid md:grid-cols-3 grid-cols-1 gap-5 md:mb-5 mb-3">
                {/* Food name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-orange-700 lg:text-xl font-bold">Food Name</span>
                    </label>
                    <input type="text" name="foodName" defaultValue={foodName} className="input input-bordered"
                    />
                </div>
                {/* category name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-orange-700 lg:text-xl font-bold">Food Category</span>
                    </label>
                    <input type="text" name="category" defaultValue={category} className="input input-bordered"
                    />
                </div>
                {/* Quantity */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-orange-700 lg:text-xl font-bold">Quantity</span>
                    </label>
                    <input type="text" name="quantity" defaultValue={quantity} className="input input-bordered"
                    />
                </div>
            </div>
            
            <div className="md:mb-5 mb-3 grid md:grid-cols-2 grid-cols-1 gap-9">
                 {/* price */}
                 <div className="form-control">
                    <label className="label">
                        <span className="label-text text-orange-700 lg:text-xl font-bold">Food Price</span>
                    </label>
                    <input type="text" name="price" defaultValue={price} className="input input-bordered"
                    />
                </div>

                {/* origin */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-orange-700 lg:text-xl font-bold">Food Origin</span>
                    </label>
                    <input type="text" name="origin" defaultValue={origin} className="input input-bordered"
                    />
                </div>
          
        </div>

        <div className="md:mb-5 mb-3">
                {/* description */}
                <label className="label">
                    <span className="label-text text-orange-700 lg:text-xl font-bold">Short Description</span>
                </label>

                <textarea id="" name="description" defaultValue={description} rows="10" cols="30" className="input input-bordered">
                   
                </textarea>
            </div>

            <div className="mb-7 grid md:grid-cols-2 grid-cols-1 gap-9">
                 {/* user name */}
                 <div className="form-control">
                    <label className="label">
                        <span className="label-text text-orange-700 lg:text-xl font-bold">User Name</span>
                    </label>
                    <input type="text" name="name" value={user?.displayName} placeholder="Enter Your Name" className="input input-bordered"
                    />
                </div>

                 {/* user email */}
                 <div className="form-control">
                    <label className="label">
                        <span className="label-text text-orange-700 lg:text-xl font-bold">User Email</span>
                    </label>
                    <input type="email" name="email" value={user?.email} placeholder="Enter Your Email" className="input input-bordered"
                    />
                </div>
            </div>

           <div className="flex justify-center">
            <input type="submit" value="Update Item" className="btn w-1/2 border-none bg-gradient-to-r from-[#FFD133] to-[#C04619]"/>
           </div>

        </form>
    </div>
    );
};

export default Update;