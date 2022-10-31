import '../styles/ProductsList.css';
import CartList from './CartList';
import Product from './Product';

function ProductsList(props) 
{
  return (
    <div className="productsMainContent">
      <CartList 
        cartItem={props.cartItem} 
        total={props.total} 
        updateTotal={props.updateTotal}
      />
      <div className="displayProduct">
        {
          props.productsList.map((item) => 
            <Product 
              key={item.id}
              item={item}
              cartHandrler={props.cartHandrler}
            />
          )
        }
      </div>
    </div>
  );
}

export default ProductsList;
