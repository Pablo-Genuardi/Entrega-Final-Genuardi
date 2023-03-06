import React from 'react';
import { Link } from 'react-router-dom';

export const Item = ({item}) => {
    return (

            <div className="card mb-3 cardProduct border-dark"> 
                <img src={item.img} className="card-img-top" alt={`${item.model}`}/>
                <div className="card-body">
                    <p className="card-text">{item.brand}</p>
                    <h5 className="card-title">{item.model}</h5>
                    <p className="card-text">{item.type}</p>                  
                    <h3 className="card-text">${new Intl.NumberFormat ('en-IN').format(item.price)}</h3>
                    <button className="btn btn-dark"><Link className="nav-link" to={`/item/${item.id}`}>More Info</Link></button>    
                </div>
            </div>
                      
    );
}

export default Item;
