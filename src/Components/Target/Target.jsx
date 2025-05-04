import React from 'react'
import fastDelivery from '../../assets/fastDelivery.png'

const OurTarget = () => {
    return (
        <>
            <section id='target' className='lg:py-0 py-6 relative bg-[#FFFBF3]'>
                <div className="container relative mx-auto px-4 flex flex-col-reverse items-center justify-between lg:flex-row">
                    <div className='relative hidden lg:flex'>
                        <img src={fastDelivery} alt="fastDelivery" />
                    </div>
                    <div className='w-full lg:w-1/2 relative'>
                        <button
                            type="button"
                            className="bg-[#FFF2D4] text-[#F4B41B] px-[16px] py-[9.5px] rounded-[7.13px] text-sm font-semibold mb-5 hover:scale-105 transform transition-all duration-200"
                        >
                            Our Target
                        </button>

                        <h1 className="text-[36px] md:text-[36px] font-bold text-[#3C3C3C] leading-snug mb-4">
                            We Earn Your Trust and are  <br />
                            Diligent in Your Case
                        </h1>

                        <div className="text-[#898989] text-base leading-relaxed mb-10">
                            <p className='mb-10'>
                                When an unknown printer took a galley of type and scrambled it to <br />
                                make a type specimen book. It has survived not only five centuries, <br />
                                but also the leap into electronic typesetting,
                            </p>
                            <p>
                                It was popularised in the 1960s with the release of Letraset sheets <br />
                                containing Lorem Ipsum passages, and more recently with desktop <br />
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>

                        <div className="flex items-center space-x-4">
                            <button className="bg-[#F4B41B] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:scale-105 transform transition-all duration-200">
                                <a href="">Order Now</a>
                            </button>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default OurTarget