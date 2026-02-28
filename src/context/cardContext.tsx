'use client'

import { Product } from "@/types/data";
import { createContext, useContext, useEffect, useState } from "react";

type CartContextType = {
    cart: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: number) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<Product[]>([]);

    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
        setCart(JSON.parse(storedCart));
        }   
    }, []);


    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    function addToCart(product: Product) {
    setCart(prev => [...prev, product]);
    }

    function removeFromCart(id: number) {
        setCart(prev => prev.filter(item => item.id !== id));
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
        {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart precisa estar dentro do CartProvider");
    return context;
}