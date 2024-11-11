import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addToCart } from './store/Store';
import { useDispatch,useSelector } from "react-redux";

const SingleProduct = ()=>{ 
 const dispatch = useDispatch();   
 const {id} = useParams()
 const [product,setProduct] = useState(null)
 const darkMode = useSelector((state) => state.theme.darkMode);

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((data)=>data.json())
        .then((response)=>setProduct(response))
    },[]);

    const handleAddToCart = () => {
        dispatch(addToCart(product));
        alert("Item added");
    };


    return(
        
        <div className={`singleProductCard ${darkMode ? "dark-mode" : "light-mode"}`}>
            <div className= {`singleProductInnerCard ${darkMode ? "dark-mode" : "light-mode"}`} >
                <div>
                    <img src={product?.image} className="singleProductImage"/>
                </div>
                <div className="singleProductDetails">
                    <p><span>Title:</span> {product?.title}</p>
                    <p><span>Category:</span> {product?.category}</p>
                    <p><span>Description:</span> {product?.description}</p>
                    <p><span>Rating:</span> {product?.rating?.rate} 
                    ({product?.rating?.count} reviews)</p>
                    <p><span>Price:</span> {product?.price}</p>
                <button onClick={handleAddToCart} className="cardButton" >Add to Cart</button>
                </div>
            </div>
        </div> 
    
        )
}

export default SingleProduct