import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import { Pagination } from 'antd';
import { CheckOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { useCart } from '../context/CardContext/CardContext';

const Menu = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const { addToCart, subToCart } = useCart();
    const [selected, setSelected] = useState([]);
    const localItem = JSON.parse(localStorage.getItem('cartItems'))

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(
                    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`
                );
                const result = await res.json();
                setData(result?.meals || []);
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
    }, [id]);

    const [currentPage, setCurrentPage] = useState(1);
    const pageLimit = 9;
    const paginatedData = data.slice((currentPage - 1) * pageLimit, currentPage * pageLimit);




    //   `https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    useEffect(() => {
        scrollToTop()
    }, [])

    return (
        <>
            <section id={id} className='pt-32 pb-18 relative'>
                <div className="container mx-auto px-4">
                    <div className='mx-auto mb-6'>
                        <div className='flex flex-col text-center items-center pb-6'>
                            <p className='text-[36px] text-[#3C3C3C]  font-[700] leading-snug'>
                                {id}
                            </p>
                        </div>
                    </div>
                    <div className='relative'>
                        <ul className='flex items-center gap-5 flex-wrap'>
                            {paginatedData?.map(el => {
                                return (
                                    <li key={el.idMeal} className='w-full sm:w-[48%] lg:w-[32%] flex flex-col md:flex-row items-start gap-5 p-4 rounded-md shadow-md bg-white'>
                                        <img className='w-full md:w-[120px] h-[200px] md:h-[120px] object-cover rounded-[5px]' src={el.strMealThumb} alt="" />
                                        <div className='flex flex-col justify-between md:flex-1 h-full'>
                                            <h4 className='font-bold text-[16px] md:text-[18px] text-gray-800'>
                                                {el.strMeal}
                                            </h4>
                                            <div className='flex flex-wrap gap-2 mt-4'>
                                                <Link to={'/store'} onClick={() => {
                                                    if (selected.includes(el.idMeal)) {
                                                        subToCart(el);
                                                        setSelected(prev => prev.filter(id => id !== el.idMeal));
                                                    } else {
                                                        addToCart(el);
                                                        setSelected(prev => [...prev, el.idMeal]);
                                                    }
                                                }}
                                                    className='px-4 py-2 bg-[#FCC647] text-sm text-white rounded-md transform transition-all duration-200 hover:scale-105'>
                                                    Buy Now
                                                </Link>
                                                <button onClick={() => {
                                                    if (selected.includes(el.idMeal)) {
                                                        subToCart(el);
                                                        setSelected(prev => prev.filter(id => id !== el.idMeal));
                                                    } else {
                                                        addToCart(el);
                                                        setSelected(prev => [...prev, el.idMeal]);
                                                    }
                                                }}
                                                    className='w-[40px] h-[40px] bg-[#F24D21] text-white rounded-md transform transition-all duration-200 hover:scale-105'>
                                                    {localItem?.some(item => item.idMeal === el.idMeal)
                                                        ? <CheckOutlined />
                                                        : <ShoppingCartOutlined />}
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>

                        <div className='pt-10'>
                            <Pagination onChange={page => {
                                setCurrentPage(page);
                                document.getElementById('beef')?.scrollIntoView({ behavior: 'smooth' })
                            }} align="center" current={currentPage} pageSize={pageLimit} total={data.length} />
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}
export default Menu