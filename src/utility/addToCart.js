import { toast } from "react-toastify";

const getStoredCartList = () =>{
    const storedListStr = localStorage.getItem('cart-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return  storedList;
    }
    else {
        return [];
    }
};
const addToStoredCartList =(id)=>{
    const storedList = getStoredCartList();
    if (storedList.includes(id)) {
        console.log(id,'already exists in the cart list');
    }
    else{
        storedList.push(id);
        const storedListString = JSON.stringify(storedList);
        localStorage.setItem('cart-list',storedListString);
        toast ('Product added to the cart');
    }
};
const getStoredWishList = () =>{
    const storedListWish = localStorage.getItem('wish-list');
    if (storedListWish) {
        const storedWish = JSON.parse(storedListWish);
        return  storedWish;
    }
    else {
        return [];
    }
    };
    const addToStoredWishList =(id)=>{
    const storedWish = getStoredWishList();
    if (storedWish.includes(id)) {
         console.log(id,'already exists in the wish list');

    }
    else{
        storedWish.push(id);
        const storedWishString = JSON.stringify(storedWish);
        localStorage.setItem('wish-list',storedWishString);
        toast ('Product added to the wishlist');
    }
    };

    const removeFromStoredCartList = (id) => {
        const storedList = getStoredCartList();
        const updatedList = storedList.filter(item => item !== id.toString());
        localStorage.setItem('cart-list', JSON.stringify(updatedList));
        toast('Product removed from the cart');
    };
    const removeFromStoredWishList = (id) => {
        const storedWish = getStoredWishList();
        const updatedWish = storedWish.filter(item => item !== id.toString());
        localStorage.setItem('wish-list', JSON.stringify(updatedWish));
        toast('Product removed from the wishlist');
    };









export {addToStoredCartList,addToStoredWishList,getStoredCartList,getStoredWishList, removeFromStoredCartList, removeFromStoredWishList};


 