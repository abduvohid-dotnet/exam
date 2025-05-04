import React from 'react'
import itWorksData from '../../data/ItWorks/ItWorksData'

const ItsWorks = () => {

    return (
        <>
            <section id='itworks' className='md:pt-24 pt-0 relative py-5'>
                <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row">
                    <div className='mx-auto md:mb-6 mb-0'>
                        <div className='flex flex-col text-center items-center'>
                            <p className='text-[36px] text-[#3C3C3C]  font-[700] leading-snug'>
                                How it works
                            </p>
                            <p className='max-w-[540px] text-[14px] text-[#898989] md:mt-4 mt-0'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
                            </p>
                        </div>
                        <ul className='mx-auto flex flex-col md:flex-row md:gap-24 gap-6 md:pt-24 pt-8 items-center justify-center flex-wrap'>

                            {itWorksData?.map((el, index) => {
                                return (
                                    <li key={index} className={`w-full max-w-[340px] ${index % 2 === 0 ? '' : 'lg:pt-16 pt-0'}`}>
                                        <i className={`flex items-center justify-center text-[40px] md:mb-6 mb-2 ${index === 0
                                            ? 'text-[#335DFF]'
                                            : index === 1
                                                ? 'text-[#F6CA00]'
                                                : 'text-[#0BD28E]'
                                            }`}>
                                            {el.icon}
                                        </i>
                                        <h4 className='flex items-center justify-center text-[#3C3C3C] text-[20px] font-bold'>
                                            {el.title}
                                        </h4>
                                        <p className='flex items-center justify-center text-center font-[400] text-[#667085] text-[14px] md:mt-2 mt-0 leading-[27px] tracking-normal'>
                                            {el.subtitle}
                                        </p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ItsWorks