import styled from 'styled-components/native';

export const SearchBarWrapper = styled.View`
  width: 85%;
  height: ${({ theme }) => theme.spacing.multiple(5)};
  border-radius: ${({ theme }) => theme.spacing.single};
  margin-bottom: ${({ theme }) => theme.spacing.multiple(2)};
  display: flex;
  flex-direction: row;
  border-width: 1px;
  background-color: #fff;
  border-color: #c2c2c2;
  border-width: 1px;
  justify-content: flex-start;
  align-items: center;
`;

export const SearchTextWrapper = styled.View`
  margin-left: ${({ theme }) => theme.spacing.single};
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const SearchButton = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const SearchButtonWrapper = styled.View`
  width: ${({ theme }) => theme.spacing.multiple(5)};
  height: 100%;
  justify-content: center;
  align-items: center;
`;
