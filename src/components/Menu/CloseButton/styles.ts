import styled from 'styled-components/native';

export const CloseButtonContainer = styled.View`
  width: ${({ theme }) => theme.spacing.multiple(5)};
  height: ${({ theme }) => theme.spacing.multiple(5)};
  border-radius:${({ theme }) => theme.spacing.multiple(12)};
  margin-bottom: ${({ theme }) => theme.spacing.multiple(2)};
  display: flex;
  flex-direction: row;
  border-width: 1px;
  background-color: #fff;
  border-color: transparent;
  border-bottom-width: 0;
  shadow-color: #000;
  shadow-offset: {width: 0, height: 2};
  shadow-opacity: 0.8;
  shadow-radius: 2px;
  elevation: 6;
  justify-content: space-between;

`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin-right: ${({ theme }) => theme.spacing.single};
`;



