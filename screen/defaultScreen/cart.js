import React from "react";
import {
  View,
  ScrollView,
  Text,
  Dimensions,
  StyleSheet,
  FlatList,
} from "react-native";
import { useSelector } from "react-redux";

import CartProduct from "../../components/CartProduct";
import CustomButton from "../../components/CustomButton";

export default function Cart(props) {
  const products = useSelector((state) => state.Cart.cartProduct);
  const totalPrize=useSelector((state) => state.Cart.totalPrize);

  return (
    <View
      style={{
        position: "relative",
        height: Dimensions.get("window").height - 30,
      }}
    >
      <FlatList
        data={products}
        keyExtractor={(item, index) => index.toString()}
        renderItem={(item) => (
          <CartProduct
            title={item.item.productTitle}
            image={item.item.productImage}
            prize={item.item.productPrize}
            Quentaty={item.item.productQuentaty}
            totalPrize={item.item.totalPrize}
          />
        )}
      />
      <View style={{ marginBottom: 30 }}></View>
      <View style={styles.footer}>
        <Text style={styles.footerPrize}>{totalPrize}$</Text>
        <CustomButton buttonTitle="Buy" style={styles.footerButton} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
  footerButton: {
    width: "40%",
    padding: 10,
    alignItems: "center",
    margin: 10,
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "#FF1744",
  },
  footerPrize: {
    color: "#FF1744",
    fontSize: 24,
  },
});
