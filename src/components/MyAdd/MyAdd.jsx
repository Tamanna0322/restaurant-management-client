import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import Item from "../Item/Item";


const MyAdd = () => {
 
    const { user } = useContext(AuthContext);
    console.log(user)

    const [item, setItem] = useState([]);
    useEffect(()=>{

       const getFood = async () =>{
           const {data} = await axios(`${import.meta.env.VITE_API_URL}/myAdd/${user?.email}`)
           setItem(data)
       }
       getFood();

    },[user])
    console.log(item)

    return (
        <div className="my-16">
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead className="bg-orange-100">
                    <tr className="text-orange-700 text-xl">
                        <td>Image</td>
                        <td>Food Name</td>
                        <td>Price</td>
                        <td>Category</td>
                        <td>Origin</td>
                        <td>Update</td>    
                    </tr>
                </thead>
                <tbody>

                    {
                        item.map(myAdd => <Item key={myAdd._id} myAdd={myAdd}></Item>)

                    }
                </tbody>
            </table>
        </div>

    </div>
    );
};

export default MyAdd;