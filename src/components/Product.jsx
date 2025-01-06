import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    const { product_image,product_title,price,product_id} = product;
    return (
        <Link to = {`products/${product_id}`} >
        <div className=" flex flex-col justify-between items-center p-2 w-full h-full bg-base-100 shadow-lg rounded-lg ">
        <figure className=" rounded-2xl ">   
          <img
            src= {product_image}
            alt= {product_title}
            className=" w-[200px] h-[250px]" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-2xl"> {product_title} </h2>
          <p>Price: ${price}</p>

          <div className="card-actions justify-start  ">
            <button className="btn btn-primary ">View Details</button>
          </div>
        </div>
      </div>
        </Link>
    );
};

export default Product;