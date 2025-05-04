import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    // LocalStorage'dan ma'lumotlarni olish
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCart);
        const total = storedCart.reduce((acc, item) => acc + item.count, 0);
        setCartCount(total);
    }, []);

    const addToCart = (item) => {
        let updatedCart = [...cartItems];
        const existingItem = updatedCart.find(i => i.idMeal === item.idMeal);

        if (existingItem) {
            existingItem.count += 1;
        } else {
            updatedCart.push({ ...item, count: 1 });
        }

        setCartItems(updatedCart);
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));

        const total = updatedCart.reduce((acc, item) => acc + item.count, 0);
        setCartCount(total);
    };

    const subToCart = (item) => {
        let updatedCart = [...cartItems];
        const existingItem = updatedCart.find(i => i.idMeal === item.idMeal);

        if (existingItem) {
            existingItem.count -= 1;
            if (existingItem.count <= 0) {
                updatedCart = updatedCart.filter(i => i.idMeal !== item.idMeal);
            }
        }

        setCartItems(updatedCart);
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));

        const total = updatedCart.reduce((acc, item) => acc + item.count, 0);
        setCartCount(total);
    };

    return (
        <CartContext.Provider value={{ cartCount, cartItems, addToCart, subToCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);