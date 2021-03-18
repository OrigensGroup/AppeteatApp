import styled from 'styled-components/native';

export const SearchBarWrapper = styled.View`
  width: 100%;
  height: ${({ theme }) => theme.spacing.multiple(5)};
  border-radius: ${({ theme }) => theme.spacing.single};
  margin-bottom: ${({ theme }) => theme.spacing.double};
  display: flex;
  flex-direction: row;
  border-width: 1px;
  background-color: ${({ theme }) => theme.colors.fixedWhite};
  border-color: ${({ theme }) => theme.colors.border};
  border-width: 1px;
  justify-content: flex-start;
  align-items: center;
`;

export const SearchButton = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchButtonWrapper = styled.View`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchFieldInput = styled.TextInput`
  flex: 5;
  height: 100%;
  margin-left: ${({ theme }) => theme.spacing.single};
`;
