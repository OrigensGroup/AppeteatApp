import styled from 'styled-components/native';


export const ModalCounterContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.multiple(2)} 0;
`;

export const ModalCounterWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.spacing.multiple(10)};
`;

export const ModalContainer = styled.View`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
`;

export const PopUpContainer = styled.View`
  display: flex;
  background-color: ${({ theme }) => theme.colors.textSecondary};
  align-items: center;
  height: 40%;
  width: 100%;
  border-top-left-radius: ${({ theme }) => theme.spacing.multiple(3)};
  border-top-right-radius: ${({ theme }) => theme.spacing.multiple(3)};
`;

export const ModalTitle = styled.View`
  padding-top: ${({ theme }) => theme.spacing.multiple(2)};
`;

export const UpdateWrapper = styled.TouchableOpacity`
  padding-top: ${({ theme }) => theme.spacing.multiple(3)};
`;

export const DivLineContainer = styled.View`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-left: ${({ theme }) => theme.spacing.multiple(3)};
  padding-right: ${({ theme }) => theme.spacing.multiple(3)};
  padding-top: ${({ theme }) => theme.spacing.multiple(2)};
`;

export const DivLine = styled.View`
  display: flex;
  width: 100%;
  border-bottom-color: ${({ theme }) => theme.colors.textPrimary};
  border-bottom-width: 1px;
  margin-top: ${({ theme }) => theme.spacing.multiple(2)};
  margin-bottom: ${({ theme }) => theme.spacing.multiple(2)};
`;
