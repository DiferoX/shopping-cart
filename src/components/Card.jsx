import { useState } from 'react';
import '../styles/Card.css';

function Card(props) 
{
  // console.log(props);
  const [amount, setAmount] = useState(props.item.amount);

  const sendHandler = () =>
  {
    props.item.amount = amount;
    props.updateTotal();
    // console.log(props.item);
  }

  return (
    <div className="cardContent">
      <img 
          className='cardImg' 
          src={require(`../images/${props.item.name}.jpg`)}
          alt={`${props.item.name} card`}
      />
      <div className='infoCardContent'>
        <p>{ props.item.name }</p>
        <div>
          <p>${ props.item.us }</p>
          <div className='infoCardBtns'>
            <div className='amountContent'>
              <button onClick={() => sendHandler(setAmount(amount-1))}>-</button>
              <p>{amount}</p>
              <button onClick={() => sendHandler(setAmount(amount+1))}>+</button>
            </div>
            {/* <button className='handlerBtnCard' onClick={() => sendHandler()}>Add</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
