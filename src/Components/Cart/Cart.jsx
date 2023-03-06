import React from 'react';
import { Link } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"
import { useCartContext } from '../../Context/CartContext';

export const Cart = () => {

        const {cart, totalPrice, emptyCart} = useCartContext()

        return (
            <>
                { cart.length === 0 
                    
                    ?

                    <div className='flex-container'>

                        <h2 className='margin-n '>Empty Cart</h2>
                        <Link className="nav-link" to={'/'}><button className='btn btn-info'>Back to Shop</button></Link>
                    
                    </div>

                    :

                    <div className="container cartContainer">
                        {
                            <ItemList products={cart} template={'itemCart'} />
                        }
                        <div className='background-cart padding-b1'>
                            <div className="card mb-4 margin-total">
                                <div className="card-body p-2">
                                    <div className="float-end">
                                        <p className="mb-0 me-5 d-flex align-items-center">
                                            <span className="small text-muted me-2">Order total:</span> <span className="lead fw-normal">${new Intl.NumberFormat('en-US').format(totalPrice())}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="divButtons d-flex justify-content-end">
                                
                                <Link className='nav-link' to={'/'}><button className="btn btn-info btn-lg me-2">Continue Shopping</button></Link>
                                <Link className='nav-link' to={'/checkout'}><button className="btn btn-warning btn-lg me-2">Checkout</button></Link>
                                <button className="btn btn-danger btn-lg me-2" onClick={()=> emptyCart()}>Empty Cart</button>

                            </div>
                        </div>
                    </div>




                }
            </>
        )
}

export default Cart;
