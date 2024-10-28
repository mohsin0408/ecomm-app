import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addToCart } from './store/Store';
import { useDispatch } from "react-redux";



const SingleProduct = ()=>{
 const dispatch = useDispatch();   
 const {id} = useParams()
 const [product,setProduct] = useState(null)
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((data)=>data.json())
        .then((response)=>setProduct(response))
    },[]);

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };


    return(
        <div className="singleProductCard">
            <div className="singleProductInnerCard">
                <div>
                    <img src={product?.image} className="singleProductImage"/>
                </div>
                <div className="singleProductDetails">
                    <p>Price: {product?.price}</p>
                    <p>Title: {product?.title}</p>
                    <p>Category: {product?.category}</p>
                    <p>Description: {product?.description}</p>
                    <p>Rating: {product?.rating?.rate} 
                    ({product?.rating?.count} reviews)</p>
                </div>
                <button onClick={handleAddToCart} className="cardButton" >Add to Cart</button>
            </div>
        </div>    
        )
}

export default SingleProduct