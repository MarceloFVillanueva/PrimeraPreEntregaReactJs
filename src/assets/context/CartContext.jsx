import { createContext, useEffect, useState } from "react";


export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState(carritoInicial);

    const agregarAlCarrito = (pelicula,cantidad) => {
        
        const peliculaAgregada = {...pelicula,quantity:cantidad};
        const nuevoCarrito = [...carrito];
        const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === peliculaAgregada.id);

        if(estaEnElCarrito) {
            estaEnElCarrito.quantity += cantidad;
        }else{
            nuevoCarrito.push(peliculaAgregada);
        }
        setCarrito(nuevoCarrito)
    }
    
    const precioTotal = () => {
        return carrito.reduce((acc,prod) => acc + prod.price * prod.quantity, 0);
    }
    
    const vaciarCarrito = () => {
        setCarrito([]);
    }

    const quitarDelCarrito = (id) => {
        const nuevoCarrito = carrito.filter((producto) => producto.id !== id);
        setCarrito(nuevoCarrito);
      };

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }, [carrito])

    return (
        <CartContext.Provider value={ {
            carrito, 
            agregarAlCarrito, 
            precioTotal,
            quitarDelCarrito,
            vaciarCarrito } }>
            {children}
        </CartContext.Provider>
    )

}