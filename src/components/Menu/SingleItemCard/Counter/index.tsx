import React from "react";
import { Text } from "../../MenuComponents/MenuTabs/MenuTab/styles";
import Icon from 'react-native-vector-icons/Ionicons';


import {
    CounterWrapper,
    QuantityWrapper,
    ButtonWrapper,
    InfoWrapper
} from "./styles";

interface QuantityCounterProps { }

const QuantityCounter: React.FunctionComponent<QuantityCounterProps> = () => {
    return (
        <CounterWrapper>
            <InfoWrapper>
                <ButtonWrapper>
                    <Icon color="#0008" name="remove" size={30} />
                </ButtonWrapper>
                <QuantityWrapper>
                    <Text>3</Text>
                </QuantityWrapper>
                <ButtonWrapper>
                    <Icon color="#0008" name="add" size={30} />
                </ButtonWrapper>
            </InfoWrapper>
        </CounterWrapper>
    );
};

export default QuantityCounter;
