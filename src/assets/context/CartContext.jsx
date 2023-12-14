import { createContext, useEffect, useState } from "react";


export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState(carritoInicial);

    const addOnCart = (movie,quantity) => {
        
        const movieAdded = {...movie,quantity:quantity};
        const newCart = [...cart];
        const isInTheCart = newCart.find((product) => product.id === movieAdded.id);

        if(isInTheCart) {
            isInTheCart.quantity += quantity;
        }else{
            newCart.push(movieAdded);
        }
        setCart(newCart)
    }
    
    const totalPrice = () => {
        return cart.reduce((acc,prod) => acc + prod.price * prod.quantity, 0);
    }
    
    const emptyCart = () => {
        setCart([]);
    }

    const removeFromCart = (id) => {
        const newCart = cart.filter((product) => product.id !== id);
        setCart(newCart);
      };

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    return (
        <CartContext.Provider value={ {
            cart, 
            addOnCart, 
            totalPrice,
            removeFromCart,
            emptyCart } }>
            {children}
        </CartContext.Provider>
    )

}