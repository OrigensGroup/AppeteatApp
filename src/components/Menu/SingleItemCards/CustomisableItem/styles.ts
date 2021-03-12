import styled from 'styled-components/native';

export const CustomisableItemContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.textSecondary};
`;
export const ItemContainer = styled.ScrollView`
margin-bottom: ${({ theme }) => theme.spacing.multiple(12)};
`;
