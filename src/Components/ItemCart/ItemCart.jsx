import React from 'react';
import { useCartContext } from '../../Context/CartContext';

export const ItemCart = ({item}) => {
    const {removeItem} = useCartContext()
    return (
        <div>

            <section className="vh-50 background-cart" >
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="margin-top-1 col">
                            <div className="card mb-2">
                                <div className="card-body p-1">
                                    <div className="row align-items-center">
                                        <div className="col-md-1">
                                            <img src={item.img} className="img-fluid" alt={`Product view of ${item.name}`} />
                                        </div>
                                        <div className="col-md-2 d-flex justify-content-center">
                                            <div>
                                                <p className="small text-muted mb-0 pb-0">Name</p>
                                                <p className="lead fw-normal mb-0">{item.name} {item.model}</p>
                                            </div>
                                        </div>
                                        <div className="col-md-2 d-flex justify-content-center">
                                            <div>
                                                <p className="small text-muted mb-0 pb-0">Quantity</p>
                                                <p className="lead fw-normal mb-0">{item.quant}</p>
                                            </div>
                                        </div>
                                        <div className="col-md-2 d-flex justify-content-center">
                                            <div>
                                                <p className="small text-muted mb-0 pb-0">Price</p>
                                                <p className="lead fw-normal mb-0">${new Intl.NumberFormat('en-US').format(item.price)}</p>
                                            </div>
                                        </div>
                                        <div className="col-md-2 d-flex justify-content-center">
                                            <div>
                                                <p className="small text-muted mb-0 pb-0">Total</p>
                                                <p className="lead fw-normal mb-0">${new Intl.NumberFormat('en-US').format(item.price * item.quant)}</p>
                                            </div>
                                        </div>
                                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                            <button className="text-danger" onClick={() => removeItem(item.id)}><i className="bi bi-trash"></i></button>
                                        </div>
                                        <div className='col-md-1 col-lg-1 col-xl-1 text-end'>
                                            <button className="btn btn-danger btn-sm me-2" onClick={() => removeItem(item.id)}>Remove</button>
                                        </div>
                                    </div>
                                </div>
                            </div>                                                        
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    );
}

export default ItemCart;
