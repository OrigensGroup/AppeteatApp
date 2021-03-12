import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const SafeAreaBottom = styled.SafeAreaView`
  flex: 1;
`;

export const ProfileContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.active};
  height: 100%;
`;

export const NavigationContainer = styled.View`
  width: 100%;
  border-top-right-radius: ${({ theme }) => theme.spacing.multiple(5)};
  border-top-left-radius: ${({ theme }) => theme.spacing.multiple(5)};
`;

export const FavouriteCocktailsContainer = styled.View`
  margin: ${({ theme }) => theme.spacing.single} 0 ${({ theme }) => theme.spacing.double} 0;
`;

export const FavouriteCocktailsTextContainer = styled.View`
  margin-left: ${({ theme }) => theme.spacing.double};
  margin-right: ${({ theme }) => theme.spacing.double};
`;

export const Content = styled.ScrollView`
  border-top-right-radius: ${({ theme }) => theme.spacing.multiple(5)};
  border-top-left-radius: ${({ theme }) => theme.spacing.multiple(5)};
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  height: 100%;
`;

export const ImageContainer = styled.View`
  width: 100%;
  display: flex;
  padding: ${({ theme }) => theme.spacing.multiple(3)};
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

export const CocktailContainer = styled.ScrollView``;

export const TitleContainer = styled.View`
  margin: 0 ${({ theme }) => theme.spacing.single};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const NameContainer = styled.View`
  margin-top: ${({ theme }) => theme.spacing.single};
`;

export const ShowButton = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
`;

export const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});
