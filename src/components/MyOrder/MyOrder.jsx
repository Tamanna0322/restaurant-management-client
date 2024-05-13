import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import Order from "../Order/Order";
import { Helmet } from "react-helmet-async";


const MyOrder = () => {

    const { user } = useContext(AuthContext);
    const [order, setOrder] = useState([]);
    const [control, setControl] = useState(false);
    useEffect(()=>{

       const getFood = async () =>{
           const {data} = await axios(`${import.meta.env.VITE_API_URL}/myOrder/${user?.email}`)
           setOrder(data)
       }
       getFood();

    },[user, control])
    console.log(order)

    return (
        <div className="my-16">
             <Helmet>
                <title>FlavorFleet | MyOrderedFood</title>
            </Helmet>
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead className="bg-orange-100">
                    <tr className="text-orange-700 text-xl">
                        <td>Food Name</td>
                        <td>Quantity</td>
                        <td>Price</td>
                        <td>Date</td>
                        <td>Delete</td>    
                    </tr>
                </thead>
                <tbody>

                    {
                        order.map(myOrder => <Order key={myOrder._id} myOrder={myOrder} control={control} setControl={setControl}></Order>)

                    }
                </tbody>
            </table>
        </div>

    </div>
    );
};

export default MyOrder;