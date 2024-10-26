import React from "react";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Products from "./Products";
import StoreCard from "./StoreCard";
import SingleProduct from "./SingleProduct";

const App = ()=>{
  return(
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Products/>}/>
          <Route path="/Storecard" element={<StoreCard/>} />
          <Route path="product/:id" element={<SingleProduct/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

