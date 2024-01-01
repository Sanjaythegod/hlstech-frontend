import React, { createContext, useContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const shoppingCartContext = createContext({});

export function useShoppingCart() {
    return useContext(shoppingCartContext);
}

export function ShoppingCartProvider({ children }) {
    const [cartState, setCartState] = useLocalStorage('shopping-cart',[]);

    const getItemQuantity = (id) => {
        return cartState.find(item => item.id === id)?.quantity || 1
    };

    const increaseCartQuantity = (id, incQuantity) => {
        setCartState(prevCart => {
            const existingItem = prevCart.find(item => item.id === id);

            if (!existingItem) {
                // Item not found, add it to the cart
                return [...prevCart, { id, quantity: 1 }];
            } else {
                // Item found, update its quantity
                return prevCart.map(item =>
                    item.id === id ? { ...item, quantity: item.quantity + incQuantity } : item
                );
            }
        });
    };


    const decreaseCartQuantity = (id) => {
        setCartState(prevCart => {
            if (prevCart.find(item => item.id === id)?.quantity === 1) {
                return prevCart.filter(item => item.id !== id)
            } else {
                return prevCart.map(item => {
                    if (item.id == id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }

        });
    };

    const removeFromCart = (id) => {
        setCartState(prevCart => {
            return prevCart.filter(item => item.id !== id)
        });
    };

    const clearItems = () => {
        setCartState([])
    }

    const cartQuantity = cartState.reduce((quantity, item) => item.quantity + quantity, 0)

    return (
        <shoppingCartContext.Provider
            value={{
                cartState,
                getItemQuantity,
                increaseCartQuantity,
                decreaseCartQuantity,
                removeFromCart,
                cartQuantity,
                clearItems
            }}
        >
            {children}
        </shoppingCartContext.Provider>
    );
}
