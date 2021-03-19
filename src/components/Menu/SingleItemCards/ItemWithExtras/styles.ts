import styled from 'styled-components/native';

export const ItemWithExtrasContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
`;

export const ItemContainer = styled.ScrollView`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-bottom: ${({ theme }) => theme.spacing.multiple(12)};
`;
