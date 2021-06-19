import React,{useEffect} from "react";
import { StyleSheet, FlatList } from "react-native";
import { useSelector , useDispatch} from "react-redux";

import ProductOverViewComponent from "../../components/ProductOverView";
import { loadData } from "../../store/actionCreator/product";


export default function ProductOverView(props) {
  const navigateToDetailsScreen = (id) => {
    props.navigation.navigate("ProductDetails", { productId: id });
  };

  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(loadData());
  },[dispatch])

  const productData = useSelector((state) => state.products.avableProduct);

  if(productData.length==0){
    return
  }
  return (
    <FlatList
      data={productData}
      keyExtractor={(item, index) => index.toString()}
      renderItem={(item) => (
        <ProductOverViewComponent
          image={item.item.productImage}
          title={item.item.productTitle}
          prize={item.item.productPrize}
          details={item.item.productDetails}
          navigate={()=>navigateToDetailsScreen(item.item.id)}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  root: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
