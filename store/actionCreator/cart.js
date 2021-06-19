export const ADD_CART='add_cart';

export const addCartActionCreator=({id,productTitle,productImage,productPrize})=>{
    
    return{
        type:ADD_CART,
        payload:{
            id:id,
            productImage:productImage,
            productTitle:productTitle,
            productPrize:productPrize,
        }
    }
}