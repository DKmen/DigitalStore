import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { HeaderButton } from 'react-navigation-header-buttons';

import DefineColors from '../constant/color'


export default function CustomHeaderButton(props) {
    return (
        <HeaderButton IconComponent={Ionicons} color={DefineColors.secoundaryColor} iconSize={24} {...props} />
    )
}