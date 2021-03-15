import styled from 'styled-components/native';

export const ModalContainer = styled.View`
  padding: ${({ theme }) => theme.spacing.double} ${({ theme }) => theme.spacing.single}
    ${({ theme }) => theme.spacing.triple} ${({ theme }) => theme.spacing.triple};

  background-color: ${({ theme }) => theme.colors.fixedWhite};
`;

export const ModalTitle = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.double};
`;

export const ModalDescription = styled.View`
  margin-right: ${({ theme }) => theme.spacing.double};
`;

export const CloseModalSection = styled.View`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const CloseModal = styled.View``;
