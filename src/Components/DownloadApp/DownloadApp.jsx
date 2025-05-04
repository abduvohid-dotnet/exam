import React from 'react'
import downloadImage from '../../assets/downloadImage.png'
import { FaApple, FaGooglePlay } from "react-icons/fa";

const DownloadApp = () => {
    return (
        <>
            <section id="home" className="lg:pt-24 sm:pb-20 pb-2 pt-4 relative">
                <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">

                    <div className="w-full lg:w-1/2 relative">
                        <h1 className="text-4xl lg:text-5xl font-bold text-[#3C3C3C] leading-snug mb-4">
                            To Get 15% Discount <br />
                            Download The App
                        </h1>

                        <div className="text-[#898989] text-base leading-relaxed mb-10">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting <br />
                                industry. Lorem Ipsum has been the industry's standard dummy <br />
                                text ever since the 1500s.
                            </p>
                        </div>
                        <div className='flex lg:gap-4 gap-2'>
                            <div className='px-[16px] py-[9.5px] rounded-[5px] flex items-center lg:gap-4 gap-0 bg-[#3C3C3C] lg:mb-5 mb-1 hover:scale-105 transform transition-all duration-200'>
                                <i><FaGooglePlay className="text-[#F9F9F9] text-2xl" /></i>
                                <div>
                                    <h3 className="text-normal text-[12px] text-[#F9F9F9] m-0 hidden lg:block">Android App On</h3>
                                    <p className="text-[#F9F9F9] text-[20px] font-normal m-0 hidden lg:block">Google Play</p>
                                </div>
                            </div>
                            <div className='px-[16px] py-[9.5px] rounded-[5px] flex items-center lg:gap-4 gap-0 bg-[#3C3C3C] lg:mb-5 mb-1 hover:scale-105 transform transition-all duration-200'>
                                <i><FaApple className="text-[#F9F9F9] text-3xl" /></i>
                                <div>
                                    <h3 className="text-normal text-[12px] text-[#F9F9F9] m-0 hidden lg:block">Android App On</h3>
                                    <p className="text-[#F9F9F9] text-[20px] font-normal m-0 hidden lg:block">Google Play</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 justify-center lg:flex hidden">
                        <img
                            src={downloadImage}
                            alt="Delicious Food"
                            className="max-w-full h-auto object-contain"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default DownloadApp
