import React, { useEffect } from "react";
import StoreCard from "./StoreCard";
import { IoToggleSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from './store/Store.js';
import { toggleTheme } from './store/Store.js';
import { setSortOption } from './store/Store.js';
import { Link } from "react-router-dom";


const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.items);
    const darkMode = useSelector((state) => state.theme.darkMode);
    const sortOption = useSelector((state) => state.sortOption); 

    
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((data) => data.json())
            .then((response) => dispatch(setProducts(response)));
    }, [dispatch]);

    const handleSortChange = (event) => {
        dispatch(setSortOption(event.target.value)); 
    };

    const sortedProducts = () => {
        switch (sortOption) {
            case "high-to-low":
                return [...products].sort((a, b) => b.price - a.price);
            case "low-to-high":
                return [...products].sort((a, b) => a.price - b.price);
            default:
                return products;
        }
    };

    return (
        <div className={darkMode ? "dark-mode" : "light-mode"}>
            <div className="header" >
            <IoToggleSharp className="ToggleIcon" onClick={() => dispatch(toggleTheme())} />
                <h1>WELCOME BACK</h1>
                <span>
                <select onChange={handleSortChange} value={sortOption} className="sortingOptions" >
                    <option value="normal">Normal</option>
                    <option value="low-to-high">Price: Low to High</option>
                    <option value="high-to-low">Price: High to Low</option>
                </select>
                <Link to="/cart" className="cart light-mode" > Go to Cart</Link>
                </span>
            </div>
            <div className="store">
            {sortedProducts().map((item) => (
                    <StoreCard key={item.id} product={item} />
                ))}
            </div>
        </div>
    );
};

export default Products



