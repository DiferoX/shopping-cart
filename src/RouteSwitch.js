import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import App from "./App";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";


const productsList =
[
  { id: uuidv4(), name: "The Legend of Zelda", us: 59.99 },
  { id: uuidv4(), name: "Super Smash Bros", us: 59.99 },
  { id: uuidv4(), name: "Super Mario Odyssey", us: 59.88 },
  { id: uuidv4(), name: "Mario Kart 8", us: 59.99 },
  { id: uuidv4(), name: "Splatoon 3", us: 51.88 },
  { id: uuidv4(), name: "Pokémon Legends", us: 49.88 },
  { id: uuidv4(), name: "Kirby", us: 53.10 },
  { id: uuidv4(), name: "Luigi's Mansion", us: 49.00 },
  { id: uuidv4(), name: "The LEGO Movie", us: 39.10 },
  { id: uuidv4(), name: "Minecraft", us: 29.75 },
]

const RouteSwitch = () =>
{
  const [cartItem, setCartItem] = useState([]);
  const [total, setTotal] = useState(0);

  const cartHandrler = (newItem) =>
  {
    let addItem = true;
    cartItem.forEach((item) => 
    {
      if (item.id === newItem.id)
        addItem = false;
    });
    if (addItem)
    {
      setCartItem([...cartItem, newItem]);
      setTotal(total + (newItem.us * newItem.amount))
    }
  }
  
  const updateTotal = () =>
  {
    let newTotal = 0;
    let taskUpdated = [];
    
    cartItem.forEach((item) => 
    {
      if (item.amount <= 0)
      {
        taskUpdated = cartItem.filter(task => task.id !== item.id);
        setCartItem(taskUpdated);
      }
    });
    cartItem.forEach((item) => newTotal = (newTotal + (item.us * item.amount)))
    setTotal(newTotal);
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" 
          element=
          {
            <App  
              cartItem={cartItem} 
              total={total}
              updateTotal={updateTotal}
            />
          } 
        />
        <Route path="/products" 
          element=
          {
            <ProductsList 
              productsList={productsList} 
              cartHandrler={cartHandrler}
              cartItem={cartItem}
              total={total}
              updateTotal={updateTotal}
            />
          } 
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
