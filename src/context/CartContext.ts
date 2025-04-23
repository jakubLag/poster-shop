
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Poster {
    id: number;
    title: string;
    releaseYear: number;
    poster: string;
    director: string;
    genre: string;
    rating: number;
};

interface CartContextType {
    cart: Poster[];
    addToCart: (poster: Poster) => void;
    removeFromCart: (id: number) => void;
};


const CartContext = createContext<CartContextType | undefined>(undefined);


interface CartProviderProps {
    children: ReactNode;
}



export const CartProvider = ({ children }: CartProviderProps) => {
    const [cart, setCart] = useState<Poster[]>([]);
    const CartContext = createContext<CartContextType | undefined>(undefined);
    const addToCart = (product: Poster) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    const removeFromCart = (productId: number) => {
        setCart((prevCart) => prevCart.filter(product => product.id !== productId));
    };

    // return (
    //     <CartContext.Provider value={{cart, addToCart, removeFromCart}}>
    //     {children}
    // )



}