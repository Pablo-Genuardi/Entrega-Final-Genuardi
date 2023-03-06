import { useContext, createContext, useState } from "react";

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

export const CartProvider = (props) => {

    const [cart, setCart] = useState([])

    const isInCart = (id) => {
        return cart.find(prod => prod.id === id)

    }

    const emptyCart = () => {
        setCart([])
    }

    const removeItem = (id) => {
        setCart(cart.filter(prod => prod.id !== id))
    }

    const getItemQuantity = () => {
        return cart.reduce((acum, prod) => acum += prod.quant, 0)
    }

    const addItem = (product, quantity) => {
        if(isInCart(product.id)) {
            const index = cart.findIndex(prod => prod.id === product.id)
            const aux = [...cart]
            aux[index].quant = quantity
            setCart(aux)
        } else {
            const cartProd ={...product, quant: quantity}
            setCart([...cart, cartProd])
        }

    }
    const totalPrice = () => {
        return cart.reduce((acum, prod) => acum += (prod.quant * prod.price), 0)
    }
    console.log(cart)

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, emptyCart, getItemQuantity, totalPrice}}>
            {props.children}
        </CartContext.Provider>
    )

    

}