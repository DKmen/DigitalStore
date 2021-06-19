import { ADD_CART } from "../actionCreator/cart";
import CartProduct from "../../data/cartProduct";

const inisialStata = {
    cartProduct: [],
    totalPrize:0
};

export default (state = inisialStata, action) => {
    switch (action.type) {
        case ADD_CART:
            let index = state.cartProduct.findIndex(
                (item) => item.id === action.payload.id
            );
            if (index === -1) {
                return {
                    cartProduct: [
                        ...state.cartProduct,
                        { ...action.payload, productQuentaty: 1, totalPrize: action.payload.productPrize }
                    ],
                    totalPrize:state.totalPrize+action.payload.productPrize
                };
            } else {
                const newState = { ...state };
                newState.cartProduct[index].productQuentaty += 1;
                newState.cartProduct[index].totalPrize += newState.cartProduct[index].productPrize;
                newState.totalPrize+=newState.cartProduct[index].productPrize;
                return newState;
            }
        default:
            return state
    }
};
