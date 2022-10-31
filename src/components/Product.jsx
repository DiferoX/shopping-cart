import { useState } from 'react';
import '../styles/Product.css';

function Product(props) 
{
  // console.log(props);
  const [amount, setAmount] = useState(1);

  const sendHandler = () =>
  {
    props.item.amount = amount;
    props.cartHandrler(props.item)
  }

  return (
    <div className="productContent">
      <img 
          className='productImg' 
          src={require(`../images/${props.item.name}.jpg`)}
          alt={`${props.item.name} Card`}
      />
      <div className='infoProductContent'>
        <p>{ props.item.name }</p>
        <div>
          <p>${ props.item.us }</p>
          <div className='infoProductBtns'>
            <div className='amountContent'>
              <button onClick={() => amount < 2 ? 1 : setAmount(amount-1)}>-</button>
              <p>{amount}</p>
              <button onClick={() => setAmount(amount+1)}>+</button>
            </div>
            <button className='handlerBtnProduct' onClick={() => sendHandler()}>Add</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
