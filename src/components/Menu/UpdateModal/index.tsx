import React from 'react';
import InputSpinner from 'react-native-input-spinner';
import Modal from 'react-native-modal';

import useCart from '../../../hooks/useCart';
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
import Title from '../../Shared/Text';

interface UpdateModalProps {
    item: any;
    isModalVisible: boolean;
    onClose: () => void;
}

const UpdateModal: React.FunctionComponent<UpdateModalProps> = ({ isModalVisible, item, onClose }) => {
    const { updateItemQuantity } = useCart();

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
                        <Title color="black" fontSize={18} fontWeight="bold">
                            {item.title}
                        </Title>
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
                        <Title color="#c2c2c2" fontSize={18} fontWeight="normal">
                            Price £{item.price}
                        </Title>
                    </ModalTitle>
                    <DivLineContainer>
                        <DivLine />
                    </DivLineContainer>
                    <UpdateWrapper onPress={onClose}>
                        <Title color="#F69019" fontSize={18} fontWeight="bold">
                            Update
            </Title>
                    </UpdateWrapper>
                </PopUpContainer>
            </ModalContainer>
        </Modal>
    );
};

export default UpdateModal;
