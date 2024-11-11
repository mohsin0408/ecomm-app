import React, { useEffect } from "react";
import StoreCard from "./StoreCard";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from './store/Store.js';
import { setSortOption } from './store/Store.js';

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
        <div className={darkMode ? "dark-mode" : "light-mode"} >
            <div className="second-header" >
                <select onChange={handleSortChange} value={sortOption} className="sortingOptions" >
                    <option value="normal">Normal</option>
                    <option value="low-to-high">Price: Low to High</option>
                    <option value="high-to-low">Price: High to Low</option>
                </select>  
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



