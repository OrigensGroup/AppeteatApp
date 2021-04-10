import styled from 'styled-components/native';

export const PickerContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.modalbackground};
  border-radius: ${({ theme }) => theme.spacing.single};
  padding: ${({ theme }) => theme.spacing.single};
`;

export const IconContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const PickerTextContainer = styled.View`
  margin-left: ${({ theme }) => theme.spacing.single};
`;

export const TextContainer = styled.View`
  padding: ${({ theme }) => theme.spacing.single} 0;
`;

export const Container = styled.View`
  width: 100%;
`;
