import React from 'react';
import {ItemCount} from '../ItemCount/ItemCount';
import { useCartContext } from '../../Context/CartContext';

export const ItemDetail = ({item}) => {

    const {addItem} = useCartContext()

    const onAdd = (quantity) =>{
        addItem(item, quantity)

    }

    return (
        <div className="container-fluid">
            <div className="card mb-3">
                <img src={item.img} className="card-img-top" alt={`a beautiful ${item.model}`} />
                <div className="card-body">

                    <p className="card-text">{item.brand}</p>
                    <h5 className="card-title">{item.model}</h5>
                    <p className="card-text">{item.features}</p>
                    <h3 className="card-title">${new Intl.NumberFormat ('en-IN').format(item.price)}</h3>
                    <p className="card-text"><small className="text-muted">Stock: {item.stock}</small></p>
                    <ItemCount initValue={1} stock={item.stock} onAdd={onAdd}/>
                    
                    
                
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
