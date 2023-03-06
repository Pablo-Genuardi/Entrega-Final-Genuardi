import { useState } from "react"
import { toast } from 'react-toastify'

export const ItemCount = ({initValue, stock, onAdd }) => {
        
        const [counter, setCounter] = useState(initValue)
        const increaseCounter = () => (counter < stock) && setCounter(counter + 1) 
        const decreaseCounter = () => (counter > initValue) && setCounter(counter - 1)
        const addToCart = () => {
            onAdd(counter)
            toast(`Hey! There is always room for more! (${counter}) added to your cart`, {
            position: "top-right",
            autoClose: 6000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            })}            
            
        const addToWishlist = () => toast('Dreams come true!', {
            position: "top-right",
            autoClose: 6000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            })
        
    return (
        <>
            <button className="btn btn-dark" onClick={() => decreaseCounter()}>-</button> 
                {counter}
            <button className="btn btn-dark" onClick={() => increaseCounter()}>+</button> 
            <button className="btn btn-secondary" onClick={() => addToCart()} >Add to cart</button>
            <button className="btn btn-dark" onClick={() => addToWishlist()}>Add to wishlist</button>
        </>
    );
}

export default ItemCount;
