import styled from 'styled-components/native';

export const CustomisableItemContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
`;

export const CustomisableItemSafeAreaTop = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.backgroundColor};
`;

export const CustomisableItemSafeAreaBottom = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.backgroundColor};
`;

export const ItemContainer = styled.ScrollView`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
