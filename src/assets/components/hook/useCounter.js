import { useState } from "react";

export const useCounter = (initial,stock) => {
    const [cantidad,setCantidad] = useState(initial)

    const aumentar = () => {
        if(cantidad < stock){
            setCantidad(cantidad+1)
        }
    }

    const disminuir = () => {
        if(cantidad >= 1){
            setCantidad(cantidad-1)
        }
    }

    return {
        cantidad,
        aumentar,
        disminuir
    }
}