import React from 'react';
import photoHome from '../../assets/teeth.png';
import ItsWorks from '../ItsWorks/ItsWorks';
// import DownloadApp from '../DownloadApp/DownloadApp';
import Dishes from '../Dishes/Dishes';
import homeImage from '../../assets/homeImage.png'
import OurTarget from '../Target/Target';
import DownloadApp from '../DownloadApp/DownloadApp';

const Home = () => {
  return (
    <>
      <section id="home" className=" bg-white md:pt-[250px] pt-[100px] md:pb-[60px] pb-0  overflow-hidden md:mb-10 mb-4">
        <div className="container relative mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-10">

          {/* LEFT SIDE */}
          <div className="w-full lg:w-1/2 relative">

            {/* Fast Delivery Button */}
            <button
              type="button"
              className="bg-[#FFF2D4] text-[#F4B41B] px-[16px] py-[9.5px] rounded-[7.13px] text-sm font-semibold md:mb-5 mb-1 hover:scale-105 transform transition-all duration-200"
            >
              Fast Delivery
            </button>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl font-bold text-[#3C3C3C] leading-snug mb-4">
              Discover Your Favourite <br />
              Food and <span className="text-[#F4B41B]">Test Forever</span>
            </h1>

            {/* Description */}
            <div className="text-[#898989] text-base leading-relaxed mb-10">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </p>
              <div className="absolute bottom-10 left-1/2 translate-x-[1/2] w-6 rotate-[34deg] z-10 sm:w-6 md:w-6 lg:w-[26px] lg:bottom-[40px] lg:left-[480px] lg:translate-x-0 xl:flex hidden">
                <img src={photoHome} alt="Teeth" className="w-full h-full object-contain" />
              </div>

            </div>

            {/* Teeth image */}


            {/* Buttons */}
            <div className="flex items-center space-x-4">
              <button className="bg-[#F4B41B] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:scale-105 transform transition-all duration-200">
                <a href="">Get Started</a>
              </button>
            </div>
          </div>

          {/* RIGHT SIDE - IMAGE */}
          <div className="absolute right-[-430px] lg:right-[-510px] justify-center lg:block hidden">
            <img
              src={homeImage}
              width={1219}
              height={527}
              alt="Delicious Food"
              className="max-w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>
      <ItsWorks />
      <Dishes />
      <OurTarget />
      <DownloadApp />
    </>
  );
};

export default Home;
