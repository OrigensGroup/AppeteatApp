import React from 'react';
import InputSpinner from 'react-native-input-spinner';
import Modal from 'react-native-modal';
import useCart from '../../../hooks/useCart';
import { useTheme } from 'styled-components';
import cartTranslations from '../../../translations/cart';
import Text from '../../Shared/Text';

import {
    ModalCounterContainer,
    DivLine,
    DivLineContainer,
    ModalContainer,
    ModalTitle,
    PopUpContainer,
    ModalCounterWrapper,
    UpdateWrapper,
} from './styles';



interface UpdateModalProps {
    item: any;
    isModalVisible: boolean;
    onClose: () => void;
}

const UpdateModal: React.FunctionComponent<UpdateModalProps> = ({ isModalVisible, item, onClose }) => {
    const { updateItemQuantity } = useCart();
    const theme = useTheme();

    const updateQuantity = (number: number) => {
        updateItemQuantity(item, number);
    };

    return (
        <Modal
            animationInTiming={600}
            animationOutTiming={450}
            isVisible={isModalVisible}
            onBackdropPress={onClose}
            avoidKeyboard={true}
            style={{
                margin: 0,
            }}
        >
            <ModalContainer>
                <PopUpContainer>
                    <ModalTitle>
                        <Text color='primary' fontSize={18} bold>
                            {item.title}
                        </Text>
                    </ModalTitle>
                    <ModalCounterContainer>
                        <ModalCounterWrapper>
                            <InputSpinner
                                buttonStyle={{
                                    borderColor: '#AFAFAF',
                                    borderWidth: 1.5,
                                    backgroundColor: 'white',
                                    width: 20,
                                    height: 20,
                                }}
                                buttonTextColor="#AFAFAF"
                                color="white"
                                fontSize={20}
                                initialValue={1}
                                max="30"
                                min="0.00"
                                onChange={updateQuantity}
                                precision={2}
                                step="1"
                                textColor="#000000"
                                width={130}
                            />
                        </ModalCounterWrapper>
                    </ModalCounterContainer>
                    <ModalTitle>
                        <Text color='tertiary' fontSize={18}>
                            {cartTranslations.priceModalField.placeholder}{item.price}
                        </Text>
                    </ModalTitle>
                    <DivLineContainer>
                        <DivLine />
                    </DivLineContainer>
                    <UpdateWrapper onPress={onClose}>
                        <Text color='quartiary' fontSize={18} bold>
                            {cartTranslations.updateModalField.placeholder}
                        </Text>
                    </UpdateWrapper>
                </PopUpContainer>
            </ModalContainer>
        </Modal>
    );
};

export default UpdateModal;
