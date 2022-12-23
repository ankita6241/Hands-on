import React from 'react';
import Cart from './Cart.jsx';
import './App.css';
function OnlineShopping()
{
    const CartInfo=[{itemname:"Laptop",price:80000},
        {itemname:"TV",price:120000},
        {itemname:"Washing Machine",price:50000},
        {itemname:"Mobile",price:30000},
        {itemname:"Fridge",price:70000}];
        return (
            <div className="mydiv">
                <h1>Items Ordered :</h1>
                <table className="table" rules="all">
                <Cart className="table" item={CartInfo} />
                </table>
            </div>
        );
}

export default OnlineShopping;