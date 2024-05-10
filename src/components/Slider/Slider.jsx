import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import banner1 from '../../assets/images/banner1.webp';
import banner2 from '../../assets/images/banner2.jpg';
import banner3 from '../../assets/images/banner3.jpg';

const Slider = () => {
    return (
        <div className="my-10 max-w-7xl mx-auto px-4">
      
        <Swiper
          
          modules={[Autoplay, Pagination,Navigation]}
          pagination={{
            clickable: true,
        }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
        }}
          className="mySwiper"
          onAutoplay={true}
          loop={true}
        >
         <SwiperSlide className=' text-center mb-6'>
                    <div className='object-cover bg-center bg-no-repeat lg:w-full lg:h-[580px] h-[400px] rounded-3xl bg-cover' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(${banner1})` }}>
                        <div className='flex flex-col justify-center h-full'>
                            <h3 className='lg:text-5xl text-white font-bold md:text-3xl text-2xl'> Savor Every <span className="text-[#d45e34]">Bite</span> with <span className="text-[#e05826]">FlavorFleet</span></h3>
                            <p className='lg:w-[60%] md:w-[80%] w-[90%] mx-auto text-white md:mt-9 mt-5'>FlavorFleet simplifies restaurant management, ensuring seamless service and unforgettable experiences for diners and staff alike.</p>
                           <div className="mt-7">
                           <button className="btn px-8 font-bold border-none bg-gradient-to-r from-[#FFD133] to-[#C04619]">See All Foods</button>
                           </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=' text-center mb-6'>
                    <div className='object-cover bg-center bg-no-repeat lg:w-full lg:h-[580px] h-[400px] rounded-3xl bg-cover' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.4)), url(${banner2})` }}>
                        <div className='flex flex-col justify-center h-full'>
                            <h3 className='lg:text-5xl text-white font-bold md:text-3xl text-2xl'> Effortless <span className="text-[#d46c34]">Dining</span> and Streamlined <span className="text-[#d46c34]">Operations</span></h3>
                            <p className='lg:w-[60%] md:w-[80%] w-[90%] mx-auto text-white md:mt-9 mt-5'>Elevate your restaurant with FlavorFleet, simplifying tasks for smoother service and exceptional dining experiences.</p>
                            <div className="mt-7">
                           <button className="btn px-8 font-bold border-none bg-gradient-to-r from-[#FFD133] to-[#C04619]">See All Foods</button>
                           </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=' text-center mb-6'>
                    <div className='object-cover bg-center bg-no-repeat lg:w-full lg:h-[580px] h-[400px] rounded-3xl bg-cover' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.4)), url(${banner3})` }}>
                        <div className='flex flex-col justify-center h-full'>
                            <h3 className='lg:text-5xl text-white font-bold md:text-3xl text-2xl'> <span className="text-[#d46c34]">Unforgettable</span> Meals</h3>
                            <p className='lg:w-[60%] md:w-[80%] w-[90%] mx-auto text-white md:mt-9 mt-5'>FlavorFleet revolutionizes restaurant management, delivering seamless operations and unforgettable dining experiences to patrons worldwide.</p>
                            <div className="mt-7">
                           <button className="btn px-8 font-bold border-none bg-gradient-to-r from-[#FFD133] to-[#C04619]">See All Foods</button>
                           </div>
                        </div>
                    </div>
                </SwiperSlide>
        </Swiper>
      
    </div>
    );
};

export default Slider;