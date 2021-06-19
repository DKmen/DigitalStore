import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView,Dimensions,Button } from 'react-native';
import { useSelector ,useDispatch} from "react-redux";


import CustomButton from '../../components/CustomButton'
import {addCartActionCreator} from "../../store/actionCreator/cart"

export default function ProductDetails(props) {

    const productId=props.navigation.state.params.productId;

    const product=useSelector((state) => state.products.avableProduct.find((item)=>item.id===productId));
    const dispatch=useDispatch();
    return (
        <View style={{ position: 'relative',height:Dimensions.get('window').height-30 }}>
            <ScrollView>
                <View style={styles.rootElement}>
                    <Text style={styles.headerTitle}>{product.productTitle}</Text>
                    <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginVertical: 50 }}>
                        <Image resizeMode='stretch' style={styles.ProductDetailsImage} source={{ uri:product.productImage}} />
                    </View>
                    <Text style={styles.ProductDetailsTitle}>Details</Text>
                    <Text numberOfLines={6} style={styles.ProductDetailsInformation}>{product.productDetails}</Text>
                    <View style={styles.ProductDetailsPrize}>
                        <Text style={styles.ProductDetailsPrizeKey}>Prize</Text>
                        <Text style={styles.ProductDetailsPrizeValue}>{product.productPrize}$</Text>
                    </View>
                </View>
            </ScrollView>
            <View style={{ position: 'absolute', bottom: 0, flexDirection: 'row', justifyContent: 'space-between' }}>
                <CustomButton buttonTitle="Buy" style={styles.footerButton} />
                <View style={{ height: '100%', width: '0%', borderWidth: 1, borderColor: 'white' }}></View>
                <CustomButton buttonTitle="Add To Cart" style={styles.footerButton} onPressButton={()=>dispatch(addCartActionCreator(product))}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    rootElement: {
        width: '100%',
        padding: 40,
    },
    headerTitle: {
        fontSize: 50,
        color: '#3F51B5'
    },
    ProductDetailsImage: {
        width: '100%',
        borderRadius: 10,
        height: 200,
        shadowColor: 'black',
        shadowOffset: { width: 10, height: 10 },
        shadowRadius: 10,
        elevation: 5
    },
    ProductDetailsTitle: {
        color: '#3F51B5',
        fontSize: 36,
        marginBottom: 20
    },
    ProductDetailsInformation: {
        fontSize: 22,
        lineHeight: 32,
        textAlign: 'justify',
        marginBottom: 20
    },
    ProductDetailsPrize:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:10,
        marginBottom:40
    },
    ProductDetailsPrizeKey:{
        color:'#3F51B5',
        fontSize:36,
    },
    ProductDetailsPrizeValue:{
        fontSize:36
    },
    footerButton: {
        width: '50%',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF1744'
    }
})