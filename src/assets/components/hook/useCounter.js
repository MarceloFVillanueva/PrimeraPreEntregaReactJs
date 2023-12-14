import { useState } from "react";

export const useCounter = (initial,stock) => {
    const [quantity,setQuantity] = useState(initial)

    const increase = () => {
        if(quantity < stock){
            setQuantity(quantity+1)
        }
    }

    const decrease = () => {
        if(quantity >= 1){
            setQuantity(quantity-1)
        }
    }

    return {
        quantity,
        increase,
        decrease
    }
}