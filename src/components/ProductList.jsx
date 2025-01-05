import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredCartList } from '../utility/addToCart';
import Product from './Product';
const ProductList = () => {
    const [cartList,setCartList] = useState([]);
    const [sort,setSort]=useState('');
  const allProducts=useLoaderData();
  useEffect(()=>{
    const storedCartList = getStoredCartList();
       const storedCartListInt = storedCartList.map(id => parseInt(id));
       const cartList = allProducts.filter(product => storedCartListInt.includes(product.product_id));
         setCartList(cartList);
  },[])
  const handleSort = sortType =>{
    setSort(sortType);
     if(sortType==='Sort Ratings'){
       setCartList(cartList.sort((a,b)=> b.rating-a.rating));
     }else if(sortType==='Sort Price'){
       setCartList(cartList.sort((a,b)=> b.price-a.price));
     }else{
       setCartList(allProducts);
     }
  }
    return (
        <div>
            <h2 className="text-5xl font-bold bg-red-500 my-8">Products List</h2>
            <div className="dropdown dropdown-hover">
  <div tabIndex={0} role="button" className="btn m-1">
    {
    sort ? `Sort By : ${sort}`: 'SORT BY'
    }
    </div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li onClick ={()=> handleSort('Sort Ratings') } ><a>Product Ratings</a></li>
    <li onClick = {()=> handleSort('Sort Price')}><a>Product's Price</a></li>
  </ul>
</div>
            <Tabs>
    <TabList>
      <Tab>Cart</Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel className="">
      <h2 className='text-2xl  '> Cart This Gadget I will Buy</h2>
      {
        cartList.map(product=> <Product key={product.product_id} product={product}></Product> )
      }
    </TabPanel>
    <TabPanel>
    <h2 className='text-2xl font-bold'>Wish This Gadget I Choice</h2>
      {/* Display wishlist items here */}
         {
        allProducts.map(product=> <Product key={product.product_id} product={product}></Product> )
         }
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ProductList;
