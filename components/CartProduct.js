import React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, Button, Image, TouchableWithoutFeedback } from 'react-native';

import DefineColors from '../constant/color'


export default function CartProduct(props) {

    return (
        <View style={{ marginVertical: 40, width: '100%', alignItems: 'center' }}>
            <View style={styles.rootElement}>
                <View>
                    <View style={{ position: 'relative' }}>
                        <Image style={styles.productImage} resizeMode='stretch' source={{ uri: props.image }} />
                        <Text style={styles.productTitle}>{props.title}</Text>
                    </View>
                    <View style={styles.productDetails}>
                        <View style={styles.productDetailContent}>
                            <Text style={styles.productDetailContentText}>Que</Text>
                            <Text style={styles.productDetailContentText}>{props.Quentaty}</Text>
                        </View>
                        <View style={styles.productDetailContent}>
                            <Text style={styles.productDetailContentText}>Prize</Text>
                            <Text style={styles.productDetailContentText}>{props.prize}$</Text>
                        </View>
                        <View style={styles.productDetailContent}>
                            <Text style={styles.productDetailContentText}>Total Prize</Text>
                            <Text style={styles.productDetailContentText}>{props.totalPrize}$</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    rootElement: {
        width: '90%',
        maxWidth: 600,
        borderRadius: 10,
        overflow: 'hidden',
        shadowOffset: { width: 2, height: 10 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 5
    },
    productImage: {
        width: '100%',
        height: 240,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    productTitle: {
        width: '100%',
        backgroundColor: '#000000b5',
        fontSize: 28,
        color: DefineColors.secoundaryColor,
        textAlign: 'right',
        padding: 10,
        position: 'absolute',
        bottom: 0
    },
    productDetails:{
        flexDirection:'column',
        backgroundColor:DefineColors.cartColor.primaryColor,
        padding:20,
        alignItems:'center',
        justifyContent:'center'
    },
    productDetailContent:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'94%',
        marginVertical:10,
    },
    productDetailContentText:{
        width:'40%',
        color:DefineColors.secoundaryColor,
        fontSize:24,
    }
})