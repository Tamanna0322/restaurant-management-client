import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const OneGallery = ({ gallery }) => {
    const {user} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);
    const [showOverlay, setShowOverlay] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleMouseEnter = () => {
        setShowOverlay(true);
    };

    const handleMouseLeave = () => {
        setShowOverlay(false);
    };


    const [formData, setFormData] = useState({
        name: gallery.name || '', 
        description: '',
        imageUrl: gallery.photo || '' 
    });

    const handleInputChange = e => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        try {
            setIsModalOpen(false);
        } catch (error) {
            console.error(error);
        }
    };

    const handleAddFeedback = () => {
        if (user) {
            setIsModalOpen(true);
        } else {
            return  navigate('/login', { state: { from: location } });
        }
    };


    return (
        <div className='border rounded-xl p-5 bg-orange-50 flex justify-center'>
            <div className='relative overflow-hidden'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <img className='h-[300px] w-full object-contain' src={gallery.photo}
                    alt="" />
                {showOverlay && (
                    <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white'>
                        <div className='text-center'>
                            <h2 className='text-xl font-bold'>{gallery.name}</h2>
                            <div className='mt-5'>
                                <button onClick={handleAddFeedback} className='btn bg-orange-600 text-white border-none px-6'>Add</button>
                                {isModalOpen && (
                                    <div className='fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50'>
                                        <div className='bg-white p-6 rounded-md'>
                                            <h2 className='text-xl font-bold mb-4'>Submit Feedback</h2>
                                            <form onSubmit={handleSubmit}>
                                                <label className='block mb-4 text-orange-700 font-bold'>
                                                    User Name:
                                                    <input type='text' name='name' value={formData.name} readOnly className='border text-orange-500 border-gray-300 p-2 w-full' />
                                                </label>
                                                <label className='block mb-4 text-orange-700 font-bold'>
                                                    Feedback or Experience:
                                                    <textarea name='description' defaultValue={formData.description} onChange={handleInputChange} className='border text-orange-500 border-gray-300 p-2 w-full'></textarea>
                                                </label>
                                                <label className='block mb-4 text-orange-700 font-bold'>
                                                    Image URL:
                                                    <input type='text' name='imageUrl' value={formData.imageUrl} onChange={handleInputChange} className='border text-orange-500 border-gray-300 p-2 w-full' />
                                                </label>
                                                <button type='submit' className='bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600'>Submit</button>
                                            </form>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

OneGallery.propTypes = {
    gallery: PropTypes.object
}


export default OneGallery;