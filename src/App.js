import './App.css';
import CartList from './components/CartList';

function App(props) 
{
  return (
    <div className="App">
      <h1>H O M E</h1>
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
