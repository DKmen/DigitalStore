import React from "react";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../components/CustomHeaderButton";
import ProductDetails from "../screen/defaultScreen/productDetails";
import ProductOverView from "../screen/defaultScreen/productOverView";
import Cart from "../screen/defaultScreen/cart";
import Order from "../screen/defaultScreen/order";

import DefineColors from "../constant/color";

const productStackNavigation = createStackNavigator(
  {
    ProductOverView: {
      screen: ProductOverView,
      navigationOptions: (props) => ({
        headerLeft: () => (
          <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item
              iconName="menu"
              onPress={() => {
                props.navigation.toggleDrawer();
              }}
            />
          </HeaderButtons>
        ),
      }),
    },
    ProductDetails: {
      screen: ProductDetails,
    },
    Cart: {
      screen: Cart,
    },
  },
  {
    defaultNavigationOptions: (props) => {
      return {
        headerTitle: "E Mart",
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontSize: 26,
        },
        headerStyle: {
          backgroundColor: DefineColors.primaryColor,
        },
        headerTintColor: DefineColors.secoundaryColor,
        headerRight: (navigation) => {
          console.log(navigation);
          return (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                iconName="cart"
                onPress={() => {
                  props.navigation.navigate("Cart");
                }}
              />
            </HeaderButtons>
          );
        },
      };
    },
  }
);

const orderNavigateStack = createStackNavigator({
    order: {
        screen: Order,
        navigationOptions: (props) => ({
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                iconName="menu"
                onPress={() => {
                  props.navigation.toggleDrawer();
                }}
              />
            </HeaderButtons>
          ),
        }),
      },
},{
    defaultNavigationOptions: (props) => {
      return {
        headerTitle: "E Mart",
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontSize: 26,
        },
        headerStyle: {
          backgroundColor: DefineColors.primaryColor,
        },
        headerTintColor: DefineColors.secoundaryColor,
      };
    },
  })

const productAndOrderDrawer = createDrawerNavigator(
  {
    Product: productStackNavigation,
    Order: orderNavigateStack
  }
);

const MainRoute = createAppContainer(productAndOrderDrawer);

export default MainRoute;
