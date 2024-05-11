import { useState } from "react";
import food1 from '../../assets/images/cook.jpg'
import food2 from '../../assets/images/cook.webp';


const About = () => {

    const [showMore, setShowMore] = useState(false);

    const handleBtn = () => {
        setShowMore(true)
    }

    return (
        <div className="my-14">
           
            <div className="flex flex-col-reverse md:flex-row justify-between items-center">
                <div className="md:w-[48%]">
                    <h2 className="text-[#C04619] mt-16 font-bold text-3xl">About</h2>
                    <p className="lg:text-5xl md:text-4xl text-3xl mt-4 text-[#ea802f] font-semibold">Why <span className="bg-gradient-to-r from-[#C04619] to-[#FFD133] text-transparent bg-clip-text">FlavorFleet</span> ?</p>

                    <div className='flex flex-col space-y-4 mt-5'>
                        <ul>
                            <h2 className="font-bold text-xl text-[#992d06]">Our Fresh Philosophy:</h2>
                            <p className="text-[#d16c1f] font-semibold mt-2">Discover our commitment to sourcing the freshest ingredients and delivering quality meals that nourish and delight.</p>
                        </ul>
                        <ul>
                            <h2 className="font-bold text-xl text-[#992d06]">Freshness Redefined:</h2>
                            <p className="text-[#d16c1f] font-semibold mt-2">Explore how we redefine freshness by handpicking the finest produce and crafting flavorful dishes with care.</p>
                        </ul>
                        <ul>
                            <h2 className="font-bold text-xl text-[#992d06]">From Farm to Table:</h2>
                            <p className="text-[#d16c1f] font-semibold mt-2">Learn about our journey from local farms to your table, ensuring each ingredient is at the peak of freshness.</p>
                        </ul>

                        {showMore && (
                            <>
                                <ul>
                                    <h2 className="font-bold text-xl text-[#992d06]">The Fresh Difference:</h2>
                                    <p className="text-[#d16c1f] font-semibold mt-2">Find out what sets us apart as we prioritize freshness, sustainability, and taste in every dish we serve.</p>
                                </ul>

                                <ul>
                                    <h2 className="font-bold text-xl text-[#992d06]">Fresh Food, Fresh Experience:</h2>
                                    <p className="text-[#d16c1f] font-semibold mt-2">Experience the difference of fresh ingredients as we bring you vibrant flavors and wholesome meals to savor.</p>
                                </ul>

                            </>
                        )}
                    </div>

                    <div className='mt-7'>
                        {!showMore && (
                            <button className="btn px-6 border-none bg-gradient-to-r from-[#FFD133] to-[#C04619]" onClick={handleBtn}>See More...</button>
                        )}
                    </div>

                </div>
                <div className="md:w-[48%] relative">
                       <div className="flex justify-end">
                        <img className="w-[60%] border-2 rounded-xl" src={food2} alt="" />
                        </div>    
                       <div className="flex justify-end">
                        <img className="w-[50%] border-4 rounded-xl absolute right-[40%] bottom-[-25%]" src={food1} alt="" />
                        </div>    
                </div>

            </div>
        </div>
    );
};

export default About;