import { Link } from "react-router-dom";
import { FaPenToSquare } from "react-icons/fa6";
import PropTypes from 'prop-types';


const Item = ({myAdd}) => {
    return (
        <tr className=' font-semibold text-orange-700 bg-orange-50'>
        <td>
            <div className="avatar">
                <div className="mask mask-squircle w-16 h-16">
                    <img src={myAdd.photo} alt="Avatar Tailwind CSS Component" />
                </div>
            </div>
        </td>
        <td>{myAdd.foodName}</td>
        <td>{myAdd.price}</td>
        <td>{myAdd.category}</td>
        <td>{myAdd.origin}</td>
        <td> <Link to={`/update/${myAdd._id}`}><button><FaPenToSquare className="text-xl"></FaPenToSquare></button></Link></td>
    </tr>

    );
};


Item.propTypes = {
    myAdd: PropTypes.object,
}

export default Item;