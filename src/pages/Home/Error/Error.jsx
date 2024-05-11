import { Link } from 'react-router-dom';
import pizza from '../../../assets/images/404.png'

const Error = () => {
    return (
      <div className='min-h-screen flex justify-center flex-col items-center'>
         <div className='bg-[#f7d5c9] py-14 w-full'>
         <div className='flex justify-center'>
            <div className="flex items-center space-x-4">
                <div className='md:text-9xl text-7xl text-orange-900 font-extrabold'>4</div>
                <div>
                    <img className='w-[75px] h-[75px] md:w-[125px] md:h-[125px]' src={pizza} alt="" />
                </div>
                <div className='md:text-9xl text-7xl text-orange-900 font-extrabold'>4</div>
            </div>
            
        </div>
        <div className='mt-10 text-center'>
                <h3 className='text-4xl font-bold bg-gradient-to-r from-[#C04619] to-[#cc9433] text-transparent bg-clip-text'>Error</h3>
                <p className='lg:text-6xl md:text-5xl text-3xl mt-4 font-semibold text-orange-600'>Sorry, Page Not Found</p>
               <div className='mt-12'>
              <Link to='/'> <button className='btn px-6 border-none bg-gradient-to-r from-[#FFD133] to-[#C04619]'>Go Back To Home</button></Link>
               </div>
            </div>
       </div>
      </div>
    );
};

export default Error;