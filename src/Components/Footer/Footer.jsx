import React, { useState } from 'react'
import { MdEmail, MdLocalPhone } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import { FacebookOutlined, InstagramOutlined, LoadingOutlined, TwitterOutlined, YoutubeOutlined } from '@ant-design/icons';
import axios from 'axios';
import { message } from 'antd';

const Footer = () => {
  const [loading, setLoading] = useState(false);
  const SendMessage = () => {
    setLoading(true);
    // event.preventDefault();
    const token = '7793631552:AAGAd9KyMBall-VRt_YGfwzK_1jQbS7wgKE';
    const chat_id = -1002682229756;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const email = document.getElementById("email").value;

    const messageContent = `Email: ${email}`;
    axios({
      url: url,
      method: 'POST',
      data: {
        "chat_id": chat_id,
        "text": messageContent
      }
    }).then(() => {
        message.success("Muvaffaqiyatli yuborildi!")
        console.log('yuborildi');
        document.getElementById("messageForm").reset();
    }).catch((err) => {
      message.error("Yuborishda xatolik bor!")
      console.error("Xatolik bor!", err);
    }).finally(() => {
      setLoading(false);
    })
  }
  return (
    <footer id='footer' className='lg:py-0 py-6 relative bg-[#232233] mt-3 sm:mt-10'>
      <div className="container relative mx-auto items-center justify-between lg:flex-row">
        {/*1st div*/}
        <div className='container absolute top-[-13%] left-[50%] translate-x-[-50%] max-w-[1170px] w-full flex justify-center items-center rounded-[30px] shadow-2xl bg-[#FFFFFF]'>
          <div className='flex items-center py-8 md:flex-row flex-col md:space-x-8 space-x-1 justify-center text-center md:space-y-0 space-y-2'>
            <div className='flex items-center md:space-x-10 space-x-2'>
              <div className='bg-[#F6CA00] rounded-full p-4'><MdEmail className='text-[#ffffff] lg:text-[36px] text-[20px]' /></div>
              <p className='text-[#232233] font-semibold lg:text-[28px] text-[18px]'>info@yourmail.com</p>
            </div>
            <div className='md:flex items-center hidden md:space-x-10 space-x-2'>
              <p className='text-[#E6E6E6] text-[28px]'>|</p>
            </div>
            <div className='flex items-center md:space-x-10 space-x-2'>
              <div className='bg-[#F6CA00] rounded-full p-4'><MdLocalPhone className='text-[#ffffff] lg:text-[36px] text-[20px]' /></div>
              <p className='text-[#232233] font-semibold lg:text-[28px] text-[18px]'>+880 321 655 9985</p>
            </div>
          </div>
        </div>
        {/*2nd div*/}
        <div className='w-full lg:pt-36 pt-24 flex md:flex-row flex-col justify-between mb-6'>
          <div>
            <h1 className="lg:text-[25px] text-[20px] font-bold text-[#ffffff] leading-snug mb-4">
              Tammy <span className="text-[#F4B41B]">Food</span>
            </h1>
            <div className="text-[#ffffff] lg:text-[16px] text-[12px] leading-relaxed mb-4">
              <span>
                Lorem Ipsum is simply dummy text of the printing  <br />
                and typesetting industry. Lorem Ipsum has been  <br />
                the industry's standard dummy text ever <br />
                since the 1500s.
              </span>
            </div>
            <div className='flex items-center justify-start flex-row space-x-6 text-center lg:text-[20px] text-[12px]'>
              <div className='flex items-center space-x-2 text-white hover:text-[#F4B41B] transform transition-all duration-200 hover:scale-105'>
                <i><FacebookOutlined /></i>
              </div>
              <div className='text-white'>
                <p>|</p>
              </div>
              <div className='flex items-center space-x-2 text-white hover:text-[#F4B41B] transform transition-all duration-200 hover:scale-105'>
                <i><InstagramOutlined /></i>
              </div>
              <div className='text-white'>
                <p>|</p>
              </div>
              <div className='flex items-center space-x-2 text-white hover:text-[#F4B41B] transform transition-all duration-200 hover:scale-105'>
                <i><TwitterOutlined /></i>
              </div>
              <div className='text-white'>
                <p>|</p>
              </div>
              <div className='flex items-center space-x-2 text-white hover:text-[#F4B41B] transform transition-all duration-200 hover:scale-105'>
                <i><YoutubeOutlined /></i>
              </div>
            </div>
          </div>
          <div>
            <h1 className="lg:text-[25px] text-[20px] md:pt-0 pt-4 font-bold text-[#ffffff] leading-snug mb-4">
              QUICK LINK
            </h1>
            <ul className='text-[#ffffff] text-[14px]'>
              <li className='hover:text-[#F4B41B] transform transition-all duration-200'>
                <a href="#itworks">About us</a>
              </li>
              <li className='hover:text-[#F4B41B] transform transition-all duration-200'>
                <a href="#menu">Menu</a>
              </li>
              <li className='hover:text-[#F4B41B] transform transition-all duration-200'>
                <a href="#target">Blog</a>
              </li>
              <li className='hover:text-[#F4B41B] transform transition-all duration-200'>
                <a href="#conta">Contact us</a>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="lg:text-[25px] text-[20px] md:pt-0 pt-4 font-bold text-[#ffffff] leading-snug mb-4">
              NEWS LETTER
            </h1>
            <div className="text-[#ffffff] lg:text-[16px] text-[12px] leading-relaxed mb-6">
              <p>
                Subscribe our newsletter to get our latest
                update & news
              </p>
            </div>
            <div className="relative w-full max-w-md">
              <form id='messageForm' onSubmit={SendMessage}>
                <input required id='email' type="email" className="w-full border rounded bg-white px-4 py-3 pr-20 focus:outline-none" placeholder="Emailingizni kiriting" />
                <button type='submit' className="absolute right-[1px] top-1/2 transform -translate-y-1/2 bg-[#F4B41B] text-white px-5 py-[16px] rounded hover:bg-[#F4B41B] duration-200 hover:scale-105">{loading ? <i><LoadingOutlined /></i> : <i><IoSend /></i>}</button>
              </form>
            </div>
          </div>
        </div>
        {/* 3rd div */}
        <div className='pt-8'>
          <hr className='text-[#ffffff]' />
          <div className="copyright text-center pt-6 pb-6 text-[#ffffff]">
            <p>© <span>Copyright</span> <strong>2021.</strong> <span>Tammy Food.</span><span>All Right Reserved.</span></p>

          </div>
        </div>
      </div>
    </footer >
  )
}

export default Footer
