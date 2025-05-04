import React, { useState } from 'react'
import { Link, useParams } from "react-router-dom";
import { Button, Drawer } from 'antd';
import { MenuOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { useCart } from '../context/CardContext/CardContext';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(1);
  const { cartCount } = useCart();
  const { id } = useParams()

  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);
  return (
    <header className="bg-[#FFFBF3] fixed top-0 left-0 right-0 z-50 py-5">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <div>
          <Link to='/' className='text-[#3C3C3C] font-bold pr-1 text-[32px]'>Tammy <span className='text-[#FCC647] font-bold text-[32px]'>Food</span></Link>
        </div>
        <nav className='flex items-center space-x-4 ml-auto'>
        <Link to={'store'} className={`${cartCount !== 0 ? 'cursor-pointer' : ''} relative sm:hidden block`}>
            <ShoppingCartOutlined style={{ fontSize: '28px', color: '#3C3C3C' }} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          </Link>
          <div className="lg:hidden block">
            <Button type="text" icon={<MenuOutlined style={{ fontSize: '26px' }} />} onClick={showDrawer} />
          </div>
          <ul className="hidden lg:flex space-x-10">
            <li><a onClick={() => setSelected(1)} href="#home" className={`${selected === 1 ? 'underline text-[#FCC647]' : ''} text-[24px] font-bold text-[#3C3C3C] transform transition-all duration-200 hover:text-[#FCC647]`}>Home</a></li>
            <li><a onClick={() => setSelected(2)} href="#itworks" className={`${selected === 2 ? 'underline text-[#FCC647]' : ''} text-[24px] font-bold text-[#3C3C3C] transform transition-all duration-200 hover:text-[#FCC647]`}>About Us</a></li>
            <li><a onClick={() => setSelected(3)} href="#dishes" className={`${selected === 3 ? 'underline text-[#FCC647]' : ''} text-[24px] font-bold text-[#3C3C3C] transform transition-all duration-200 hover:text-[#FCC647]`}>Menu</a></li>
            <li><a onClick={() => setSelected(4)} href="#target" className={`${selected === 4 ? 'underline text-[#FCC647]' : ''} text-[24px] font-bold text-[#3C3C3C] transform transition-all duration-200 hover:text-[#FCC647]`}>Blog</a></li>
            <li><a onClick={() => setSelected(5)} href="#" className={`${selected === 5 ? 'underline text-[#FCC647]' : ''} text-[24px] font-bold text-[#3C3C3C] transform transition-all duration-200 hover:text-[#FCC647]`}>Contact Us</a></li>
            {id && <li>
              <Link to={'store'} className={`${cartCount !== 0 ? 'cursor-pointer' : ''} relative ml-4`}>
                <ShoppingCartOutlined style={{ fontSize: '28px', color: '#3C3C3C' }} />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              </Link>
            </li>}
          </ul>
        </nav>
        <div>
          <Drawer title="Menu" placement="right" onClose={onClose} open={open}>
            <ul className="space-y-4">
              <li>
                <a href="#home"
                  onClick={(e) => { e.preventDefault(); onClose(); }}
                  className="text-[#111827]"
                >
                  Home
                </a>
              </li>
              <li>
                <a href="#itworks"
                  onClick={(e) => { e.preventDefault(); onClose(); }}
                  className="text-[#111827]"
                >
                  About Us
                </a>
              </li>
              <li>
                <a href="#target"
                  onClick={(e) => { e.preventDefault(); onClose(); }}
                  className="text-[#111827]"
                >
                  Blog
                </a>
              </li>
              <li>
                <Link to="/" onClick={onClose} className="text-[#111827]">
                  Contact
                </Link>
              </li>
            </ul>
          </Drawer>
        </div>
      </div>
    </header >


  )
}

export default Header