import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Product from './Product';

const ProductCard = ({ product }) => {
   const [products, setProducts] = useState([]);
   useEffect(()=>{
    fetch('../../public/productData.json')
    .then(res => res.json())
    .then(data => setProducts(data))
   },[]);
  return (
    <div>
        <h2 className="text-4xl font-bold  mb-4">Explore Cutting-Edge Gadget</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {
            products.map(product => <Product product={product} key={product.product_id} ></Product>   )
        }
        </div>
    </div>
  );
};
export default ProductCard;
