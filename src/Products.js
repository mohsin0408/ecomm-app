import React, { useEffect, useState } from "react";
import StoreCard from "./StoreCard";
import { IoToggleSharp } from "react-icons/io5";

const Products = ()=>{

    const [pageData,setPageData] = useState([]);
    const [sortingOption,setSortingOption] = useState("Normal")
    const [changeTheme,setChangeTheme] = useState(false)

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then((data)=>data.json())
        .then((response)=>setPageData(response))
    },[])

    const handleSortingChange = (event) => {
        setSortingOption(event.target.value);
    };

    const sortProducts = () => {
        if (sortingOption === "high-to-low") {
            return [...pageData].sort((a, b) => b.price - a.price);
        } else if (sortingOption === "low-to-high") {
            return [...pageData].sort((a, b) => a.price - b.price);
        }
        return pageData; 
    };
    
    const toggleTheme = ()=>{
        setChangeTheme((darkMode)=>!darkMode)
    }

    return(
        <div className={`${changeTheme ? "dark-mode" : "light-mode"}`} >
            <div>
                <h1>welcome</h1>
                <select onChange={handleSortingChange} >
                    <option value="normal" >Normal</option>
                    <option value="high-to-low" >High To Low</option>
                    <option value="low-to-high" >Low To High</option>
                </select>
                <IoToggleSharp className="ToggleIcon" onClick={toggleTheme} />
            </div>
            <div className="store">
                {sortProducts().map((item) => (
                    <StoreCard key={item.id} product={item} />
                ))}
            </div>
        </div>
    )
}

export default Products



