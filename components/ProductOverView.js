import React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, Button, Image, TouchableWithoutFeedback } from 'react-native';

import DefineColors from '../constant/color'


export default function ProductOverViewComponent(props) {

    const [isVisible, setIsVisible] = useState(false)

    return (
        <View style={{ marginVertical: 40, width: '100%', alignItems: 'center' }}>
            <TouchableWithoutFeedback onPress={props.navigate}>
                <View style={styles.rootElement}>
                    <View>
                        <View style={{ position: 'relative' }}>
                            <Image style={styles.productOverViewImage} resizeMode='stretch' source={{ uri: props.image}} />
                            <Text style={styles.productTitle}>{props.title}</Text>
                        </View>
                        <View style={styles.productOverViewFooter}>
                            <Text style={styles.productOverViewFooterPrize}>{props.prize}$</Text>
                            <Button title='View Details' style={styles.productOverViewFooterButton} color={DefineColors.cartColor.buttonColor} onPress={() => setIsVisible(!isVisible)} />
                        </View>
                        <View style={{ ...styles.productOverViewDetails, display: isVisible ? 'flex' : 'none' }}>
                            <Text numberOfLines={4} style={styles.productOverViewDetailsText}>{props.details}</Text>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}


ProductOverViewComponent.navigationOptions = navOption => {

}




const styles = StyleSheet.create({
    root: {
        width: '90%',
        maxWidth: 600,
        borderRadius: 10,
        overflow: 'hidden',
    },
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
    productOverViewImage: {
        width: '100%',
        height: 200,
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
    productOverViewFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
        backgroundColor: DefineColors.cartColor.primaryColor
    },
    productOverViewFooterPrize: {
        color: DefineColors.secoundaryColor,
        fontSize: 24
    },
    productOverViewDetails: {
        padding: 10,
        backgroundColor: DefineColors.cartColor.primaryColor,
    },
    productOverViewDetailsText: {
        fontSize: 16,
        textAlign: 'justify',
        color: DefineColors.secoundaryColor
    }
})