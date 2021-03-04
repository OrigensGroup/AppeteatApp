import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Filter from './Filter'
import CloseButton from './CloseButton'

import {
    TopContainer,
    TopBarWrapper
} from './styles'

interface MenuTopBarProps {
    onClick: () => void;
}

const MenuTopBar: React.FunctionComponent<MenuTopBarProps> = ({ onClick }) => {
    const navigation = useNavigation();

    const navigateBack = () => {
        navigation.navigate('HomePage');
    };

    return (
        <TopContainer>
            <TopBarWrapper>
                <CloseButton onClick={navigateBack} />
                <Filter onClick={onClick} />
            </TopBarWrapper>
        </TopContainer>
    );
};

export default MenuTopBar;



