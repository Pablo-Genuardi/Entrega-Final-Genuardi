import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createOrder, getOrder, getProduct, updateProduct } from "../../Firebase/Firebase"
import { useState } from 'react';

export const Checkout = () => {
    const {cart, emptyCart, totalPrice} = useCartContext()
    const formData = React.useRef()
    let navigate = useNavigate()

    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [error, setError] = useState('');

    const handleInputChange1 = (e) => {
        setInputValue1(e.target.value);
        setError('');
    }

    const handleInputChange2 = (e) => {
        setInputValue2(e.target.value);
        setError('');
    }


    const grabForm = (e) => {
        e.preventDefault()
        const datForm = new FormData(formData.current)
        const client = Object.fromEntries(datForm)
        
        const aux = [...cart]

        aux.forEach(prodCart => {
            getProduct(prodCart.id).then(db => {
                db.stock -= prodCart.cant 
                updateProduct(prodCart.id, db)
            })

        })

        if(inputValue1 === inputValue2){ 
    
 
         
            createOrder(client, aux, totalPrice(), new Date().toISOString()).then(order =>{
                toast(`Thank you for your purchase! Your order ID: ${order.id} for a total of $${new Intl.NumberFormat('en-US').format(totalPrice())} was done successfully!`, {
                    position: "top-right",
                    autoClose: 6000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    })
                emptyCart()
                e.target.reset()
                navigate("/")
            })

        }else{
            setInputValue2('')
            setError('E-mails do not match')  
        }

    }

    return (

        <>
            {cart.length === 0
            ?
            <div className='flex-container'>
                
                    <h2 className='margin-n '>Empty Cart</h2>
                    <Link className="nav-link" to={'/'}><button className='btn btn-info'>Back to Shop</button></Link>

            </div>            
            :
            <div>

                <form onSubmit={grabForm} ref={formData} className='container-fluid-contact'>


                    <div>
                        <img src="../img/catsynth.png" alt="the space cat" />
                    </div>

                    <div className="form-text">

                        <h1>Thank you for your purchase!</h1>

                        <div className="form-text">We'll never share your personal information with anyone else.</div>

                    </div>

                    <div className="mb-3">
                        <label htmlFor="Name" className="form-label">Name:</label>
                        <input type="text" className="form-control" name='Name' />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="E-mail" className="form-label">E-mail address:</label>
                        <input type="email" value={inputValue1} onChange={handleInputChange1} className="form-control" name='E-mail'/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="repE-mail" className="form-label">Repeat E-mail address:</label>
                        <input type="email" value={inputValue2} onChange={handleInputChange2} className="form-control" name='Repeat E-mail'/>
                        {error && <p style={{color: 'red'}}>E-mails do not match, try again</p>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone number:</label>
                        <input type="text" className="form-control" name='Phone number'/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Address:</label>
                        <input type="text" className="form-control" name='Phone number'/>
                    </div>

                    <button type="submit" className="btn btn-warning">Finish Order</button>

                    <div className='margin-top-1'>
                        <img src="../img/mloguexd.png" alt="Korg minilogue XD" />
                    </div>


                </form>
                
            </div>

            }
        </>
       
    );
}

export default Checkout;
