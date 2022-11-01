import { useState } from 'react';
import '../styles/Card.css';

function Card(props) 
{
  // console.log(props);
  const [amount, setAmount] = useState(props.item.amount);
  const [total, setTotal] = useState(props.item.total);

  const sendHandler = () =>
  {
    props.item.amount = amount;
    props.item.total = (props.item.amount * props.item.us);
    setTotal(props.item.total);
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
          <p>${ total }</p>
          <div className='infoCardBtns'>
            <div className='amountCardContent'>
              <button onClick={() => sendHandler(setAmount(amount-1))}>-</button>
              <p>{amount}</p>
              <button onClick={() => sendHandler(setAmount(amount+1))}>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
