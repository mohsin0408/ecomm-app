import React from "react";
import { Link } from "react-router-dom";

const StoreCard = ({product})=>{
    return(
    <Link to={`/product/${product.id}`} >
        <div className="cards">
            <img src={product.image} className="card-img" />
            <p>{product.title}</p>
            <p>Price-{product.price}</p>
        </div>
    </Link>
    )
}

export default StoreCard


