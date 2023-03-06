import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"
import { getProducts } from "../../Firebase/Firebase"
export const ItemListContainer = () => {

    const [products, setProducts] = useState ([])
    const {categoryId} = useParams()

    useEffect(() => {
        if(categoryId) {
            getProducts()
            .then(itemsProducts => {
                const products = itemsProducts.filter(prod => prod.stock > 0).filter(prods => prods.categoryId === parseInt (categoryId))
                const productsList = <ItemList products={products} template= {'item'}/> 
                setProducts(productsList)})  
        } 

        else {
            getProducts()
            .then(itemsProducts => {
                const products = itemsProducts.filter(prod => prod.stock > 0)
                const productsList = <ItemList products={products} template= {'item'}/>
                setProducts(productsList)})
        }

      
        }, [categoryId])
                
    return (
        <div className="row cardProducts">
           {products} 
        </div>
    );
}

export default ItemListContainer;
