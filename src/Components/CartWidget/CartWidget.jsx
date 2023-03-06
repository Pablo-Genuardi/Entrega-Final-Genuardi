import { FaCartPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../Context/CartContext';

const CartWidget = () => {
      const {getItemQuantity} = useCartContext()
      return (
          <> 
            
            

            <Link className='nav-link' to={'/cart'}>
            {getItemQuantity() > 0 && <span className='margin-n cartQuant'>{getItemQuantity()}</span>}

                <FaCartPlus size={'25px'} color={'white'}/>
                      
            </Link>
          </>
          
    );
}

export default CartWidget;
 