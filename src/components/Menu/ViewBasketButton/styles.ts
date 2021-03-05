import styled from 'styled-components/native';

export const MainButtonWrapper = styled.View`
  width: 100%;
  display: flex;
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.double};
  padding: 0 ${({ theme }) => theme.spacing.multiple(3)};
`;

export const MainButton = styled.TouchableOpacity`
  width: 100%;
  height: ${({ theme }) => theme.spacing.multiple(7)};
  border-radius: ${({ theme }) => theme.spacing.single};
  display: flex;
  flex-direction: row;
  background-color: #f69019;
  justify-content: center;
`;

export const TextWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spacing.multiple(3)};
`;

