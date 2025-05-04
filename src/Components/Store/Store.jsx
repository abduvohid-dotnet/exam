import { DeleteOutlined } from '@ant-design/icons';
import { message, Pagination } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Store = () => {
    const { id } = useParams();
    const pageLimit = 6;

    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState([]);

    const [loading, setLoading] = useState(false);
    const SendMessage = async () => {
        if (data.length === 0) {
            message.warning("Orders are not exist!");
            return;
        }

        setLoading(true);

        const token = '7793631552:AAGAd9KyMBall-VRt_YGfwzK_1jQbS7wgKE';
        const chat_id = -1002682229756;
        const url = `https://api.telegram.org/bot${token}/sendMessage`;

        // Xabar mazmunini tuzamiz
        let messageContent = "🛍 Yangi Buyurtmalar:\n\n";
        data.forEach((item, index) => {
            const price = (Math.random() * 10 + 5).toFixed(2); // Ixtiyoriy narx
            messageContent += `${index + 1}. 🍽 ${item.strMeal} x ${item.count} ta\n   💵 Narxi: $${price}\n`;
        });

        messageContent += `\n🔢 Umumiy buyurtma soni: ${data.length} ta`;
        messageContent += `\n💰 Umumiy narx: $${totalPrice}`;

        try {
            const response = await axios.post(url, {
                chat_id,
                text: messageContent
            });

            if (response.status === 200) {
                message.success("Buyurtmalar Telegramga muvaffaqiyatli yuborildi!");
                setData([]);
                localStorage.removeItem("cartItems");
            } else {
                message.error("Xatolik yuz berdi!");
            }
        } catch (error) {
            console.error(error);
            message.error("Telegramga yuborishda xatolik yuz berdi.");
        }

        setLoading(false);
    };


    const updateLocalStorage = (newData) => {
        localStorage.setItem('cartItems', JSON.stringify(newData));
    };

    const increment = (idMeal) => {
        const updated = data.map(item =>
            item.idMeal === idMeal ? { ...item, count: item.count + 1 } : item
        );
        setData(updated);
        updateLocalStorage(updated);
    };

    const decrement = (idMeal) => {
        const updated = data
            .map(item =>
                item.idMeal === idMeal ? { ...item, count: item.count - 1 } : item
            )
            .filter(item => item.count > 0);
        setData(updated);
        updateLocalStorage(updated);
    };

    const removeItem = (idMeal) => {
        const updatedData = data.filter(item => item.idMeal !== idMeal);
        setData(updatedData);
        updateLocalStorage(updatedData);
    };

    useEffect(() => {
        const localCart = JSON.parse(localStorage.getItem('cartItems')) || [];
        const normalized = localCart.map(item => ({
            ...item,
            count: item.count || 1
        }));
        setData(normalized);
    }, []);

    const paginatedData = data.slice((currentPage - 1) * pageLimit, currentPage * pageLimit);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        scrollToTop();
    }, [currentPage]);

    const totalPrice = data.reduce((total, item) => {
        const price = Math.random() * 10 + 5;
        return total + price * item.count;
    }, 0).toFixed(2);

    return (
        <section id={id} className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-screen-xl mx-auto">
                <div className="text-center mb-8">
                    <p className="text-[28px] md:text-[36px] text-[#3C3C3C] font-bold">
                        Orders
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-4">
                    {/* Total Summary */}
                    <div className="lg:w-[30%] w-full bg-white p-4 rounded-md shadow-md">
                        <p className="text-lg font-semibold mb-4">
                            Total Price: <span className="text-[#F24D21]">${totalPrice}</span>
                        </p>

                        <ul className="flex flex-col gap-4">
                            {data
                                .sort((a, b) => a.strMeal.localeCompare(b.strMeal))
                                .map((element, index) => (
                                    <li
                                        key={element.idMeal}
                                        className="flex justify-between items-start gap-2"
                                    >
                                        <div className="flex gap-2 max-w-full">
                                            <span className="font-bold">{index + 1}.</span>
                                            <div className="max-w-full">
                                                <p className="font-medium break-words">{element.strMeal}</p>
                                                <p className="text-sm text-gray-500">
                                                    ${(Math.random() * 10 + 5).toFixed(2)}
                                                </p>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => removeItem(element.idMeal)}
                                            className="bg-red-500 p-1 text-white rounded hover:scale-105 transition"
                                        >
                                            <DeleteOutlined />
                                        </button>
                                    </li>
                                ))}
                        </ul>

                        <button
                            onClick={SendMessage}
                            disabled={loading}
                            className="mt-6 w-full py-3 text-sm sm:text-base bg-[#FCC647] text-white font-semibold rounded hover:scale-105 transition"
                        >
                            {loading ? "Sending..." : "Buy"}
                        </button>

                    </div>

                    {/* Product List */}
                    <div className="lg:w-[70%] w-full">
                        {data.length === 0 ? (
                            <p className="text-center text-gray-500">No orders found.</p>
                        ) : (
                            <>
                                <ul className="flex items-stretch sm:items-start justify-center sm:justify-between flex-wrap gap-4 flex-col-3">
                                    {paginatedData.map(el => (
                                        <li
                                            key={el.idMeal}
                                            className="bg-white max-w-[170px] sm:max-w-[280px] w-full flex flex-col sm:flex-row items-center sm:items-start rounded-md shadow-md"
                                        >
                                            <img
                                                className=" sm:w-[100px] md:w-[150px] sm:h-[100px] md:h-[150px] object-cover rounded m-1"
                                                src={el.strMealThumb}
                                                alt={el.strMeal}
                                            />
                                            <div className="h-full flex flex-col justify-between pt-4 pb-8 px-2 sm:py-2 sm:px-4 sm:mt-0 w-full text-center sm:text-left">
                                                <h4 className="text-base font-bold mb-2 break-words">
                                                    {el.strMeal}
                                                </h4>
                                                <div className="flex justify-center sm:justify-start items-center">
                                                    <button
                                                        onClick={() => decrement(el.idMeal)}
                                                        className="w-8 h-8 bg-red-500 text-white rounded hover:scale-105 transition"
                                                    >
                                                        -
                                                    </button>
                                                    <span className="w-8 text-center font-semibold">
                                                        {el.count}
                                                    </span>
                                                    <button
                                                        onClick={() => increment(el.idMeal)}
                                                        className="w-8 h-8 bg-green-500 text-white rounded hover:scale-105 transition"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>

                                {data.length > pageLimit && (
                                    <div className="pt-6 flex justify-center">
                                        <Pagination
                                            onChange={page => setCurrentPage(page)}
                                            current={currentPage}
                                            pageSize={pageLimit}
                                            total={data.length}
                                        />
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Store;
