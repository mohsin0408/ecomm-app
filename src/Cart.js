import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from './store/actions/singleAction';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
    };

    return (
        <div>
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>No items in the cart.</p>
            ) : (
                <ul>
                    {cartItems.map(item => (
                        <li key={item.id}>
                            {item.title} - ${item.price}
                            <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
