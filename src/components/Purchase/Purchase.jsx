import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const Purchase = () => {
    const { user } = useContext(AuthContext);
    const [orderCount, setOrderCount] = useState(0);
    const [foodItems, setFoodItems] = useState([]);
    const [selectedFood, setSelectedFood] = useState(null);
    const [quantityAvailable, setQuantityAvailable] = useState(null);
    const [isOwner, setIsOwner] = useState(false);

    useEffect(() => {
        const fetchOrderCount = async () => {
            if (user?.email) {
                try {
                    const response = await axios.get(`${import.meta.env.VITE_API_URL}/user/${user.email}`);
                    setOrderCount(response.data?.orderCount || 0);
                } catch (error) {
                    console.error(error);
                }
            }
        };

        const fetchFoodItems = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/add`);
                setFoodItems(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchOrderCount();
        fetchFoodItems();
    }, [user?.email]);

    console.log(orderCount);

    const handleFoodSelection = e => {
        const foodId = e.target.value;
        const food = foodItems.find(item => item._id === foodId);
        setSelectedFood(food);
        setQuantityAvailable(food?.quantity || 0);
        setIsOwner(food?.email === user?.email);
    };

    const handlePurchaseBtn = async event => {
        event.preventDefault();
        const form = event.target;

        const foodId = selectedFood._id;
        const foodName = selectedFood.foodName;
        const quantity = parseInt(form.quantity.value);
        const price = form.price.value;
        const name = form.name.value;
        const email = form.email.value;
        const date = new Date().toISOString();
        const orderedFoodItem = { foodId, foodName, quantity, price, date, name, email };

        if (quantity > quantityAvailable) {
            toast.error("Cannot purchase more than available quantity");
            return;
        }

        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/purchase`, orderedFoodItem);
            console.log(data);
            toast.success("Food Purchase Successfully");
            form.reset();
            setOrderCount(prevCount => prevCount + 1);
        } catch (error) {
            console.error(error);
        }
    };

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
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-orange-700 lg:text-xl font-bold">Food Name</span>
                            </label>
                            <select name="foodName" className="input input-bordered" onChange={handleFoodSelection}>
                                <option value="">Select Food</option>
                                {foodItems.map(item => (
                                    <option key={item._id} value={item._id}>
                                        {item.foodName}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-orange-700 lg:text-xl font-bold">Quantity</span>
                            </label>
                            <input type="text" name="quantity" placeholder="Enter Quantity" className="input input-bordered" />
                        </div>
                    </div>

                    <div className="md:mb-5 mb-3 grid md:grid-cols-2 grid-cols-1 gap-9">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-orange-700 lg:text-xl font-bold">Food Price</span>
                            </label>
                            <input type="text" name="price" placeholder="Enter Food Price" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-orange-700 lg:text-xl font-bold">Buying Date</span>
                            </label>
                            <input type="text" name="date" value={new Date().toISOString().split('T')[0]} readOnly placeholder="Enter date of buying" className="input input-bordered" />
                        </div>
                    </div>

                    <div className="mb-7 grid md:grid-cols-2 grid-cols-1 gap-9">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-orange-700 lg:text-xl font-bold">Buyer Name</span>
                            </label>
                            <input type="text" name="name" value={user?.displayName} readOnly placeholder="Enter Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-orange-700 lg:text-xl font-bold">Buyer Email</span>
                            </label>
                            <input type="email" name="email" value={user?.email} readOnly placeholder="Enter Your Email" className="input input-bordered" />
                        </div>
                    </div>

                    {quantityAvailable === 0 && (
                        <p className="text-red-600 text-center">This item is not available for purchase</p>
                    )}

                    {isOwner && (
                        <p className="text-red-600 text-center">You cannot purchase your own added food items</p>
                    )}

                    <div className="flex justify-center">
                        <input
                            type="submit"
                            value="Purchase"
                            className="btn w-1/2 border-none bg-gradient-to-r from-[#FFD133] to-[#C04619]"
                            disabled={quantityAvailable === 0 || isOwner}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Purchase;
