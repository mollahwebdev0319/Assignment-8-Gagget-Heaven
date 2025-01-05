  import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { HiHeart } from "react-icons/hi";
import { addToStoredCartList, addToStoredWishList } from '../utility/addToCart';
  const ProductDetails = () => {
    const  {product_id} = useParams();
    const data = useLoaderData();
    const id = parseInt(product_id);
    const product = data.find(product => product.product_id ===  id);

    const {product_id:current,product_title, price, description, product_image,rating,Specification} = product;
    
    const handleAddToCart = (id) => {
         addToStoredCartList(id);

    };
    const handleAddToWish=(id)=>{
        addToStoredWishList(id);
    }
    return (
        <div>
            <h2>Products Details: {product_id} </h2> 
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
        <img
      src= {product.product_image}
      className="w-36 rounded-lg shadow-xl" />
    <div>
      <h1 className="text-5xl font-bold"> { product_title} </h1>
      <p className="py-6 font-bold text-xl"> Price: $ {price} </p>
      <div className="badge badge-accent">In Stock</div>
      <p className="py-6"> {description} </p>
     
      <p className="py-6 text-2xl font-bold">
         Specification : 
         <div className="py-6 text-sm">
         {
               Specification.map((spec, index) =>  
                   <li key={index} spec={spec}>{Specification}</li>
               )
         }
         </div>
      </p>
      <div className="rating gap-2"> 
        <div>
        <h2 className='text-xl font-bold'>Rating: </h2>
        </div>      
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-100" />
  <button className="btn btn-xs text-semibold"> {rating}</button>
</div>
<div className="flex gap-5 py-5">
        <button onClick={()=>handleAddToCart(product_id) } className="btn btn-active btn-secondary">Add To Cart</button>
        <HiHeart onClick={()=>handleAddToWish(product_id)} className='text-3xl ' />
          
        </div>
    </div>
  </div>
</div>
</div>
        
    );
  };
  
  export default ProductDetails; 
