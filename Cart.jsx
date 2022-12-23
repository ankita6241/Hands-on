import React from 'react';
import './App.css';
function Cart(props) {
  const listItems = props.item.map((item) =>

    <tr>
      <td>{item.itemname}</td>
      <td>{item.price}</td>
    </tr>
  );
  return (
    <div >  
      <tr className="header" >
      <td >Name</td>
      <td>Price</td>
    </tr>{listItems}</div>
  );
}

export default Cart;