"use client"

import React, { createContext, useState, useContext, ReactNode, FC } from "react";

export interface Poster {
  id: number;
  title: string;
  releaseYear: number;
  poster: string;
  director: string;
  genre: string;
  price?: number;
  rating: number;
}

interface CartContextType {
  cart: Poster[];
  addToCart: (poster: Poster) => void;
  removeFromCart: (id: number) => void;
}

const CartContext = createContext<CartContextType | null>(null);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: FC<CartProviderProps> = ({ children }) => {
    const [cart, setCart] = useState<Poster[]>([]);
  
    const addToCart = (poster: Poster) => {

      setCart((prevCart) => {
      const exists = prevCart.find((cartItem) => cartItem.id === poster.id);
      if (exists) {
        return prevCart;
      } else {
        return [...prevCart, poster];
      }
    });
    };
  
    const removeFromCart = (id: number) => {
      setCart((prevCart) => prevCart.filter((poster) => poster.id !== id));
    };
  
    const value = { cart, addToCart, removeFromCart };
  
    return (
      <CartContext.Provider value={value}>
        {children}
      </CartContext.Provider>
    );
  };
  

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
