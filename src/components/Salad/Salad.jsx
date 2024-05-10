import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaCartShopping } from "react-icons/fa6";


import salad1 from "../../assets/images/file (1).png"
import salad2 from "../../assets/images/file (2).png"
import salad3 from "../../assets/images/file (3).png"
import salad4 from "../../assets/images/file (4).png"
import salad5 from "../../assets/images/file (5).png"
import salad6 from "../../assets/images/file (6).png"

const Salad = () => {
    return (
        <div className="my-20">
      
        <div>
            <h3 className="md:text-3xl text-2xl text-center font-bold mb-5 text-[#c46919]">Salad Sensation</h3>
            <p className="text-center lg:mb-8 text-[#d97b29]">A delightful mix of fresh greens, crisp vegetables, and tangy dressing, offering a burst of flavor in every bite.</p>
        </div>
      <Swiper
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={40}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        modules={[ Autoplay, Pagination,Navigation]}
        onAutoplay={true}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
          
        <div>
             <img className='absolute bottom-[80%] w-[120px] h-[120px] md:right-[50%] md:bottom-[60%] lg:right-[60%] lg:bottom-[50%] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px]' src={salad1} alt="" />
        </div>
         
            <div className="border rounded-xl bg-[#c4691926] md:p-6 p-2 mt-20">
                <div className="flex justify-end mt-3">
                    <h2 className="md:font-bold font-semibold mt-4 text-orange-600">$20</h2>
                    </div> 
                <div className="flex flex-col space-y-2 md:space-y-4 mt-4 md:mt-10">
                    <h3 className="lg:text-2xl text-[#965114] md:font-bold lg:font-semibold">Green Garden</h3>
                    <p className="md:font-bold text-[#d77d2f]">Fresh and vibrant greens</p>
                    </div> 
                <div className="flex mt-3 items-center justify-between">
                    <p className="md:text-xl md:font-bold text-orange-400">5.0</p>
                    <FaCartShopping className="md:text-xl text-orange-600"></FaCartShopping>
                    </div> 
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
          
        <div>
             <img className='absolute bottom-[80%] w-[120px] h-[120px] md:right-[50%] md:bottom-[60%] lg:right-[60%] lg:bottom-[50%] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px]' src={salad2} alt="" />
        </div>
         
            <div className="border rounded-xl bg-[#c4691926] md:p-6 p-2 mt-20">
                <div className="flex justify-end mt-3">
                    <h2 className="md:font-bold font-semibold mt-4 text-orange-600">$20</h2>
                    </div> 
                <div className="flex flex-col space-y-2 md:space-y-4 mt-4 md:mt-10">
                    <h3 className="lg:text-2xl text-[#965114] md:font-bold lg:font-semibold">Classic Caesa</h3>
                    <p className="md:font-bold text-[#d77d2f]">Timeless favorite, flavors</p>
                    </div> 
                <div className="flex mt-3 items-center justify-between">
                    <p className="md:text-xl md:font-bold text-orange-400">5.0</p>
                    <FaCartShopping className="md:text-xl text-orange-600"></FaCartShopping>
                    </div> 
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
          
        <div>
             <img className='absolute bottom-[80%] w-[120px] h-[120px] md:right-[50%] md:bottom-[60%] lg:right-[60%] lg:bottom-[50%] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px]' src={salad3} alt="" />
        </div>
         
            <div className="border rounded-xl bg-[#c4691926] md:p-6 p-2 mt-20">
                <div className="flex justify-end mt-3">
                    <h2 className="md:font-bold font-semibold mt-4 text-orange-600">$20</h2>
                    </div> 
                <div className="flex flex-col space-y-2 md:space-y-4 mt-4 md:mt-10">
                    <h3 className="lg:text-2xl text-[#965114] md:font-bold lg:font-semibold">Veggie Delight</h3>
                    <p className="md:font-bold text-[#d77d2f]">Colorful, nutritious, satisfying</p>
                    </div> 
                <div className="flex mt-3 items-center justify-between">
                    <p className="md:text-xl md:font-bold text-orange-400">5.0</p>
                    <FaCartShopping className="md:text-xl text-orange-600"></FaCartShopping>
                    </div> 
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
          
        <div>
             <img className='absolute bottom-[80%] w-[120px] h-[120px] md:right-[50%] md:bottom-[60%] lg:right-[60%] lg:bottom-[50%] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px]' src={salad4} alt="" />
        </div>
         
            <div className="border rounded-xl bg-[#c4691926] md:p-6 p-2 mt-20">
                <div className="flex justify-end mt-3">
                    <h2 className="md:font-bold font-semibold mt-4 text-orange-600">$20</h2>
                    </div> 
                <div className="flex flex-col space-y-2 md:space-y-4 mt-4 md:mt-10">
                    <h3 className="lg:text-2xl text-[#965114] md:font-bold lg:font-semibold">Crisp Coleslaw</h3>
                    <p className="md:font-bold text-[#d77d2f]">Crunchy, creamy, classic</p>
                    </div> 
                <div className="flex mt-3 items-center justify-between">
                    <p className="md:text-xl md:font-bold text-orange-400">5.0</p>
                    <FaCartShopping className="md:text-xl text-orange-600"></FaCartShopping>
                    </div> 
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
          
        <div>
             <img className='absolute bottom-[80%] w-[120px] h-[120px] md:right-[50%] md:bottom-[60%] lg:right-[60%] lg:bottom-[50%] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px]' src={salad5} alt="" />
        </div>
         
            <div className="border rounded-xl bg-[#c4691926] md:p-6 p-2 mt-20">
                <div className="flex justify-end mt-3">
                    <h2 className="md:font-bold font-semibold mt-4 text-orange-600">$20</h2>
                    </div> 
                <div className="flex flex-col space-y-2 md:space-y-4 mt-4 md:mt-10">
                    <h3 className="lg:text-2xl text-[#965114] md:font-bold lg:font-semibold">Tomato Tango</h3>
                    <p className="md:font-bold text-[#d77d2f]">Juicy, tangy, refreshing </p>
                    </div> 
                <div className="flex mt-3 items-center justify-between">
                    <p className="md:text-xl md:font-bold text-orange-400">5.0</p>
                    <FaCartShopping className="md:text-xl text-orange-600"></FaCartShopping>
                    </div> 
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
          
        <div>
             <img className='absolute bottom-[80%] w-[120px] h-[120px] md:right-[50%] md:bottom-[60%] lg:right-[60%] lg:bottom-[50%] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px]' src={salad6} alt="" />
        </div>
         
            <div className="border rounded-xl bg-[#c4691926] md:p-6 p-2 mt-20">
                <div className="flex justify-end mt-3">
                    <h2 className="md:font-bold font-semibold mt-4 text-orange-600">$20</h2>
                    </div> 
                <div className="flex flex-col space-y-2 md:space-y-4 mt-4 md:mt-10">
                    <h3 className="lg:text-2xl text-[#965114] md:font-bold lg:font-semibold">Simple Spinach</h3>
                    <p className="md:font-bold text-[#d77d2f]"> Fresh, flavorful greens</p>
                    </div> 
                <div className="flex mt-3 items-center justify-between">
                    <p className="md:text-xl md:font-bold text-orange-400">5.0</p>
                    <FaCartShopping className="md:text-xl text-orange-600"></FaCartShopping>
                    </div> 
            </div>
          </div>
        </SwiperSlide>
       
      </Swiper>
  
     
    </div>
    );
};

export default Salad;