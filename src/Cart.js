import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from './store/Store.js';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const darkMode = useSelector((state) => state.theme.darkMode);


    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
    };

    return (
        <div className={`AddedItems ${darkMode ? "dark-mode" : "light-mode"}`}>
            <h2 className="cart-heading" >Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>No items in the cart.</p>
            ) : (
                <ul>  
                    {cartItems.map(item => (
                    <li key={item.id} className="cart-item">
                        <img src={item.image} className="cart-item-img" />
                        <div className="cartDetails" >
                       <p> {item.title} </p> 
                       <p> ${item.price} x {item.quantity} </p>
                        <button onClick={() => handleRemoveFromCart(item.id)}        className="cart-item-remove">Remove</button>
                        </div>
                    </li>
                    ))}
                </ul>
            )}
        </div>
        
    );
};

export default Cart;


