import { Item } from "../Item/Item"
import ItemCart from "../ItemCart/ItemCart"

export const ItemList = ({products, template}) => {
    return (

        <>

            {
            
                template === 'item' 
                
                ? products.map(product => <Item item={product} key={product.id}/> ) 
            
                : products.map(product => <ItemCart item={product} key={product.id}/> )
        
        
            }
                    
        </>
    )
}

export default ItemList;
