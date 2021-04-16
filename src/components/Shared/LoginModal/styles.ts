import styled from 'styled-components/native';

export const LogInContainer = styled.ScrollView`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
`;

export const SafeAreaViewTop = styled.SafeAreaView`
  flex: 0;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
`;

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
`;

export const EnclosingView = styled.View`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: space-between;
  bottom: 0;
`;

export const PopUpContainer = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  align-items: center;
`;

export const CloseModal = styled.View`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: ${({ theme }) => theme.spacing.double};
  margin-right: ${({ theme }) => theme.spacing.double};
`;

export const CloseIcon = styled.TouchableOpacity``;
