import axios from 'axios';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { MdDelete } from "react-icons/md";

const Order = ({myOrder, control, setControl}) => {
    
    const handleDelete =async _id =>{
         try{
            const {data} = await axios.delete(`${import.meta.env.VITE_API_URL}/purchase/${_id}`)
            console.log(data)
            toast.success('Delete Successful')
            setControl(!control)
         }
         catch (error) {
            console.log(error)
        }

    }


    return (
        <tr className=' font-semibold text-orange-700 bg-orange-50'>
        
        <td>{myOrder.foodName}</td>
        <td>{myOrder.quantity}</td>
        <td>{myOrder.price}</td>
        <td>{myOrder.date}</td>
        <td><button onClick={() => handleDelete(myOrder._id)}><MdDelete className="text-xl"></MdDelete></button></td>
    </tr>
    );
};


Order.propTypes = {
    myOrder: PropTypes.object,
    control: PropTypes.array,
    setControl: PropTypes.array
}

export default Order;