import styled from 'styled-components/native';

export const ModalContainer = styled.View`
  padding: ${({ theme }) => theme.spacing.multiple(4)} 0;

  background-color: ${({ theme }) => theme.colors.fixedWhite};
  border-radius: ${({ theme }) => theme.spacing.single};
`;

export const ModalTopRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 ${({ theme }) => theme.spacing.triple};
  margin-bottom: ${({ theme }) => theme.spacing.multiple(5)};
`;

export const CloseIconWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EmptyDiv = styled.View`
  height: ${({ theme }) => theme.spacing.half};
  width: ${({ theme }) => theme.spacing.triple};
`;

export const ModalTitle = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-width: 3px;
  border-color: ${({ theme }) => theme.colors.active};
`;

export const ModalDescription = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing.double};
`;

export const ModalInput = styled.View`
  flex: 1;
  margin-right: ${({ theme }) => theme.spacing.double};
`;

export const SumbmitButtonWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.spacing.single};
  margin-right: ${({ theme }) => theme.spacing.single};
`;
