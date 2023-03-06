import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { getProduct } from "../../Firebase/Firebase"

export const ItemDetailContainer = () => {

    const [product, setProduct] = useState ([])
    const {id} = useParams()
    useEffect(() => {
        getProduct(id)
        .then(item => {
            setProduct(item)})},
            [])
                
    return (
        <div className="itemDetail container-fluid">
           <ItemDetail item={product}/> 
        </div>
    );
}

export default ItemDetailContainer;

