import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import addData from './addProductFile'

import MainRoute from './navigation/MainRoute';

import Product from './store/reducer/product'
import Cart from './store/reducer/cart';

const rootReducer = combineReducers({
  products: Product,
  Cart: Cart
});

const store = createStore(rootReducer,applyMiddleware(ReduxThunk));

export default function App() {

  // addData({
  //   productTitle: "Nike T-shitr",
  //   productImage:
  //     "http://www.colorjetgroup.com/upload/blog/tshirt-printing-sample.jpg",
  //   productPrize: 300,
  //   productDetails:
  //     "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  // });
  
  // addData({
  //   productTitle: "Puma T-shitr",
  //   productImage:
  //     "http://www.colorjetgroup.com/upload/blog/tshirt-printing-sample.jpg",
  //   productPrize: 330,
  //   productDetails:
  //     "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  // });
  
  // addData({
  //   productTitle: "Zara T-shitr",
  //   productImage:
  //     "http://www.colorjetgroup.com/upload/blog/tshirt-printing-sample.jpg",
  //   productPrize: 400,
  //   productDetails:
  //     "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  // });

  return (
    <Provider store={store}>
      <MainRoute/>
    </Provider>
  )
}
