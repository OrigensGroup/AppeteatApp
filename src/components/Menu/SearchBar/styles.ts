import styled from 'styled-components/native';

export const SearchBarContainer = styled.View`
  width: ${({ theme }) => theme.spacing.multiple(42)};
  height: ${({ theme }) => theme.spacing.multiple(5)};
  border-radius:${({ theme }) => theme.spacing.double};
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

export const SearchTextWrapper = styled.View`
  margin-left: ${({ theme }) => theme.spacing.double};
  height: 100%;
  justify-content: center;
`;

export const SearchButton = styled.TouchableOpacity`
  width: ${({ theme }) => theme.spacing.multiple(5)};
  height: 100%;
  justify-content: center;
  align-items: center;
  margin-right: ${({ theme }) => theme.spacing.single};
`;





