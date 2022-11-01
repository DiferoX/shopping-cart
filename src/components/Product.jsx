import { useState } from 'react';
import '../styles/Product.css';
import { FaShoppingCart } from 'react-icons/fa';
import { HiMinusSm } from 'react-icons/hi';
import { IoMdAdd } from 'react-icons/io';

function Product(props) 
{
  // console.log(props);
  const [amount, setAmount] = useState(1);

  const sendHandler = () =>
  {
    props.item.amount = amount;
    props.item.total = (props.item.amount * props.item.us);
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
        <p><strong>{ props.item.name }</strong></p>
        <div>
          <p>$ { props.item.us }</p>
          <div className='infoProductBtns'>
            <div className='amountContent'>
              <button onClick={() => amount < 2 ? 1 : setAmount(amount-1)}><HiMinusSm /></button>
              <p>{amount}</p>
              <button onClick={() => setAmount(amount+1)}><IoMdAdd /></button>
            </div>
            <button className='handlerBtnProduct' onClick={() => sendHandler()}>
              <strong>Add</strong>
              <FaShoppingCart className='iconCart' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
