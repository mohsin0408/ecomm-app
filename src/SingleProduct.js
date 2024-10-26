import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = ()=>{
 const {id} = useParams()
 const [product,setProduct] = useState(null)
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((data)=>data.json())
        .then((response)=>setProduct(response))
    },[]);

    

    return(
        <div className="singleProductCard">
            <div className="singleProductInnerCard">
                <div>
                    <img src={product?.image} className="singleProductImage"/>
                </div>
                <div>
                    <p className="singleProductDetails">Price: {product?.price}</p>
                    <p className="singleProductDetails">Title: {product?.title}</p>
                    <p className="singleProductDetails">Category: {product?.category}</p>
                    <p className="singleProductDetails">Description: {product?.description}</p>
                    <p className="singleProductDetails">Rating: {product?.rating?.rate} 
                    ({product?.rating?.count} reviews)</p>
                </div>
            </div>
        </div>    
        )
}

export default SingleProduct