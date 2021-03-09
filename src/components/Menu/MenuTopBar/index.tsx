import React from "react";
import { useNavigation } from "@react-navigation/native";
import IconButton from '../../Shared/IconButton'
import { useTheme } from 'styled-components';

import {
    TopContainer,
    TopBarWrapper
} from './styles'

interface MenuTopBarProps {
    onClick: () => void;
}

const MenuTopBar: React.FunctionComponent<MenuTopBarProps> = ({ onClick }) => {
    const theme = useTheme();
    const navigation = useNavigation();

    const navigateBack = () => {
        navigation.navigate('HomePage');
    };

    return (
        <TopContainer>
            <TopBarWrapper>
                <IconButton onClick={navigateBack} iconName='ios-close' size={28} color={theme.colors.textPrimary} />
                <IconButton onClick={onClick} iconName='sliders' size={24} color={theme.colors.textPrimary} />
            </TopBarWrapper>
        </TopContainer>
    );
};

export default MenuTopBar;



