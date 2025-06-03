"use client";
import { CartProvider } from "../context/cart";

export function Providers({ children }) {
    return (  
        <CartProvider>
            {children}
        </CartProvider>
    );
}
