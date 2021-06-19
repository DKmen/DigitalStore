import React from 'react';
import {TouchableNativeFeedback,Text,View} from 'react-native'

export default function CustomHeaderButton(props){

    console.log(props)

    return(
        <TouchableNativeFeedback onPress={props.onPressButton}>
            <View style={props.style}>
                <Text style={{color:'white',fontSize:16}}>{props.buttonTitle}</Text>
            </View>
        </TouchableNativeFeedback>
    )
}
