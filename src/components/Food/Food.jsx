import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Food = ({ food }) => {

    const { foodName, photo, category, price, quantity } = food;

    return (
        <div>

            <div className='border border-orange-700 border-dotted p-3 bg-orange-50 rounded-lg'>
                <div className=' flex h-[240px] justify-center rounded-lg'>
                    <img className="w-full h-full rounded-lg object-contain" src={photo} alt="" />
                </div>
                <h3 className='mt-5 mb-4 text-2xl text-orange-900 font-bold'>{foodName}</h3>
                <div className='border-t mb-3 border-orange-500 border-dotted'>

                </div>
                <p className='text-orange-700 font-bold mr-6'>Price: <span className='text-orange-600'>{price}</span></p>

                <p className='text-orange-700 mt-3 font-bold'>Category: <span className='text-orange-600'>{category}</span></p>

                <p className=' mb-5 font-bold mt-3 text-orange-700'>Quantity: <span className='text-orange-600'>{quantity}</span></p>


                <div className='flex justify-center mb-4'>
                   <Link to={`/food/${food._id}`}> <button className='btn border-none px-9 bg-gradient-to-r from-[#FFD133] to-[#C04619]'>Details</button></Link>
                </div>
            </div>

        </div>
    );
};

Food.propTypes = {
    food: PropTypes.object
}

export default Food;