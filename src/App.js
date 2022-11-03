import { Link } from 'react-router-dom';
import './App.css';
import CartList from './components/CartList';

function App(props) 
{
  return (
    <div className="App">
      <div  className='infoContentApp'>
        <div>
          <h1>Video Game Deals</h1>
          <br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Natus unde perferendis, autem ipsum ducimus eaque exercitationem error, 
            magnam suscipit placeat aut laboriosam nostrum ratione vero aliquid ullam 
            eum est doloremque.
          </p>
          <br /><br />
          <h4>Save on the hottest games, accessories & more.</h4>
          <br />
          <div>
            <p>Shop now</p>
            <Link to="/products" className='btnShopNow'>Shop now</Link>
          </div>
        </div>
        <div>
          <img 
              src={require(`./images/pac-man.png`)}
              alt={`Pac Man`}
          />
        </div>
      </div>

      <div>
        <CartList 
          cartItem={props.cartItem} 
          total={props.total} 
          updateTotal={props.updateTotal}
        />
      </div>
    </div>
  );
}

export default App;
