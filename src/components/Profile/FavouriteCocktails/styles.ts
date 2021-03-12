import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';


export const FavouriteCocktailsContainer = styled.View`
  margin: ${({ theme }) => theme.spacing.single} 0 ${({ theme }) => theme.spacing.double}
    0;
`;
export const TitleContainer = styled.View`
  margin: 0 ${({ theme }) => theme.spacing.double};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const ShowButton = styled.TouchableOpacity`
  display: flex;
  justify-content: flex-end;
  margin-right: ${({ theme }) => theme.spacing.single};
`;

