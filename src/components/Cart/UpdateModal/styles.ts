import styled from 'styled-components/native';

export const ModalCounterContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: ${({ theme }) => theme.spacing.double} 0;
`;

export const ModalCounterWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.spacing.multiple(10)};
`;

export const PopUpContainer = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  width: 100%;
  background-color: ${({ theme }) => theme.colors.textSecondary};

  align-items: center;
  border-top-left-radius: ${({ theme }) => theme.spacing.triple};
  border-top-right-radius: ${({ theme }) => theme.spacing.triple};
  padding: ${({ theme }) => theme.spacing.triple};
`;

export const ModalTitle = styled.View`
  margin-top: ${({ theme }) => theme.spacing.double};
`;

export const DivLine = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.textPrimary};
  margin: ${({ theme }) => theme.spacing.double};
`;
