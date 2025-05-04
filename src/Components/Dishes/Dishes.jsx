import { ArrowRightOutlined } from '@ant-design/icons';
import { Pagination } from 'antd';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Dishes = () => {
    const [data, setData] = useState([]);
    const pageLimit = 8;
    const [currentPage, setCurrentPage] = useState(1);
    const paginateData = data.slice((currentPage - 1) * pageLimit, currentPage * pageLimit);

    const fetchData = async () => {
        try {
            const res = await fetch(
                "https://www.themealdb.com/api/json/v1/1/categories.php"
            );
            const result = await res.json();
            setData(result.categories || [])
        } catch (error) {
            console.error(error);

        }
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <>
            <section id='dishes' className='pt-24 pb-24 relative'>
                <div className="container mx-auto px-4">
                    <div className='mx-auto mb-6'>
                        <div className='flex flex-col text-center items-center pb-6'>
                            <p className='text-[36px] text-[#3C3C3C] font-[700] leading-snug'>
                                Our Delicious Dish
                            </p>
                            <p className='max-w-[540px] text-[14px] text-[#898989] mt-4'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
                            </p>
                        </div>
                    </div>
                    <div className='relative'>
                        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                            {paginateData?.map(el => {
                                return (
                                    <li key={el.idCategory} className='bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center'>
                                        <div className='flex flex-col space-y-6'>
                                            <div className='flex justify-center'>
                                                <img className='w-[148px] h-[147px] object-cover rounded-[4px] mb-2 items-center' src={el.strCategoryThumb} alt="Dish Image" />
                                            </div>
                                            <div>
                                                <h4 className='font-bold text-[#3C3C3C]'>{el.strCategory}</h4>
                                                <p className='text-[#667085]'>{el.strCategoryDescription?.length > 65 ? el.strCategoryDescription.substring(0, 65) + '...' : el.strCategoryDescription}</p>
                                                {/* <p>{el.price}</p> */}
                                            </div>
                                            <div className='transform transition-all duration-200 hover:scale-105 '>
                                                <Link to={`/menu/${el.strCategory}`} type='button' className='bg-[#FCC647] text-[#ffffff] rounded-[5px] p-1'><span className='pr-2'>More</span><ArrowRightOutlined /></Link>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })}

                        </ul>
                        <div className='pt-6'>
                            <Pagination onChange={page => {
                                setCurrentPage(page);
                                document.getElementById('dishes').scrollIntoView({ behavior: 'smooth' })
                            }} align="center" current={currentPage} pageSize={pageLimit} total={data.length} />
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Dishes