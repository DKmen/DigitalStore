import Product from "../../data/product";

export const LOAD_PRODUCT = "load_product";

export const loadData = () => {
  return async (dispatch) => {
    try {
      const responce = await fetch(
        "https://e-mart-717ba-default-rtdb.firebaseio.com/productArray.json"
      );
      const data = await responce.json();
      
      let newArray = [];
      for (const key in data) {
        newArray.push(
          new Product(
            key,
            data[key].productTitle.productTitle,
            data[key].productTitle.productImage,
            data[key].productTitle.productPrize,
            data[key].productTitle.productDetails
          )
        );
      }

      dispatch({ type: LOAD_PRODUCT, payload: newArray });
    } catch (err) {
      console.log(err + "sdddcdsdsc");
    }
  };
};
