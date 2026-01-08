"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Product, CartItem, INITIAL_PRODUCTS } from '../types';

interface ShopContextType {
    products: Product[];
    cart: CartItem[];
    addProduct: (product: Product) => void;
    deleteProduct: (id: string) => void;
    addToCart: (product: Product) => void;
    removeFromCart: (id: string) => void;
    clearCart: () => void;
    isAuthenticated: boolean;
    login: (pin: string) => boolean;
    logout: () => void;
    isContactOpen: boolean;
    toggleContact: () => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export function ShopProvider({ children }: { children: React.ReactNode }) {
    const [products, setProducts] = useState<Product[]>([]);
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);

    const toggleContact = () => setIsContactOpen(prev => !prev);

    // Load products from localStorage or use initial on mount
    useEffect(() => {
        const savedProducts = localStorage.getItem('eltanque_products_v7');
        if (savedProducts) {
            setProducts(JSON.parse(savedProducts));
        } else {
            setProducts(INITIAL_PRODUCTS);
        }

        // Check auth session
        const auth = sessionStorage.getItem('eltanque_auth');
        if (auth === 'true') setIsAuthenticated(true);
    }, []);

    // Save products whenever they change
    useEffect(() => {
        if (products.length > 0) {
            localStorage.setItem('eltanque_products_v7', JSON.stringify(products));
        }
    }, [products]);

    const addProduct = (product: Product) => {
        setProducts(prev => [...prev, product]);
    };

    const deleteProduct = (id: string) => {
        setProducts(prev => prev.filter(p => p.id !== id));
    };

    const addToCart = (product: Product) => {
        setCart(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (id: string) => {
        setCart(prev => prev.filter(item => item.id !== id));
    };

    const clearCart = () => setCart([]);

    const login = (pin: string) => {
        // Simple PIN for demo: "1827" (Address number)
        if (pin === "1827" || pin === "1234") {
            setIsAuthenticated(true);
            sessionStorage.setItem('eltanque_auth', 'true');
            return true;
        }
        return false;
    };

    const logout = () => {
        setIsAuthenticated(false);
        sessionStorage.removeItem('eltanque_auth');
    };

    return (
        <ShopContext.Provider value={{
            products,
            cart,
            addProduct,
            deleteProduct,
            addToCart,
            removeFromCart,
            clearCart,
            isAuthenticated,

            login,
            logout,
            isContactOpen,
            toggleContact
        }}>
            {children}
        </ShopContext.Provider>
    );
}

export function useShop() {
    const context = useContext(ShopContext);
    if (context === undefined) {
        throw new Error('useShop must be used within a ShopProvider');
    }
    return context;
}
