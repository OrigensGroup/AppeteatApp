import { FlatList } from 'react-native';
import styled from 'styled-components/native';

export const CustomiseSectionContainer = styled.View`
  flex: 1;
  margin: ${({ theme }) => theme.spacing.double} ${({ theme }) => theme.spacing.triple} 0
    ${({ theme }) => theme.spacing.triple};
`;

export const TitleRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const IngredientsTitle = styled.View``;

export const CustomiseTitle = styled.TouchableOpacity``;

export const IngredientsList = (styled.FlatList`
  margin-top: ${({ theme }) => theme.spacing.double};
` as unknown) as typeof FlatList;

export const Ingredient = styled.View``;
