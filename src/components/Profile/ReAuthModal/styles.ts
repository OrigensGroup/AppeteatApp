import styled from 'styled-components/native';

export const ModalContainer = styled.View`
  padding: ${({ theme }) => theme.spacing.double} 0;
  background-color: ${({ theme }) => theme.colors.fixedWhite};
  border-radius: ${({ theme }) => theme.spacing.single};
`;

export const ModalTopRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 ${({ theme }) => theme.spacing.triple};
  margin-bottom: ${({ theme }) => theme.spacing.double};
`;

export const CloseIconWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalTitle = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border-bottom-width: 3px;
  border-color: ${({ theme }) => theme.colors.active};
`;

export const ModalDescription = styled.View`
  display: flex;
  padding: 0 ${({ theme }) => theme.spacing.double};
`;

export const SumbmitButtonWrapper = styled.TouchableOpacity`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.active};
  border-radius: ${({ theme }) => theme.spacing.single};
  padding: ${({ theme }) => theme.spacing.half};
  margin: ${({ theme }) => theme.spacing.single};
`;

export const InfoUpdatedContainer = styled.View``;
