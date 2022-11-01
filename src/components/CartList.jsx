import '../styles/CartList.css';
import { FaShoppingCart } from 'react-icons/fa';
import Card from './Card';

function CartList(props) 
{
  const displayCart = () =>
  {
    console.log(props.cartItem);
    let cartContent = document.querySelectorAll (".cartListContent");
    cartContent.forEach(item => item.classList.add('active'))
  }

  const hideCart = () =>
  {
    let cartContent = document.querySelectorAll (".cartListContent");
    cartContent.forEach(item => item.classList.remove('active'))
  }

  return (
    <div className="cartListContent">
      <div className='iconCartListContent' onClick={displayCart}>
        <FaShoppingCart className='iconCart' />
        <div>
          <p>{props.cartItem.length === 0 ? "" : props.cartItem.length}</p>
        </div>
      </div>
      <div className='displayCartListContent'>
        <div>
          <p>Shopping Cart</p>
        </div>
        <div className='cartItemMainContent'>
          {
            props.cartItem.map((item) => 
              <Card
                key={item.id}
                item={item}
                updateTotal={props.updateTotal}
              />
            )
          }
        </div>
        <p><strong>Total: ${props.total.toFixed(2)}</strong></p>
        <div className='cartBtnsMainContent'>
          <button onClick={hideCart}>Close</button>
          <button >Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default CartList;
