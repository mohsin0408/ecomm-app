import React from "react";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store/Store';
import Products from "./Products";
import StoreCard from "./StoreCard";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Routes>
                        <Route path="/" element={<Products />} />
                        <Route path="/storecard" element={<StoreCard />} />
                        <Route path="product/:id" element={<SingleProduct />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </div>
            </Router>
        </Provider>
    );
};

export default App

