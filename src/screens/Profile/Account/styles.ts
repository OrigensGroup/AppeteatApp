import styled from 'styled-components/native';

export const ProfileContainer = styled.View`
  background-color: #2da59a;
  height: 100%;
`;

export const NavigationContainer = styled.View`
  width: 100%;
  border-top-right-radius: ${({ theme }) => theme.spacing.multiple(5)};
  border-top-left-radius: ${({ theme }) => theme.spacing.multiple(5)};
`;

export const CardWrap = styled.View`
  margin: ${({ theme }) => theme.spacing.multiple(3)} 0 ${({ theme }) => theme.spacing.double}
    ${({ theme }) => theme.spacing.double};
`;

export const Content = styled.ScrollView`
  border-top-right-radius: ${({ theme }) => theme.spacing.multiple(5)};
  border-top-left-radius: ${({ theme }) => theme.spacing.multiple(5)};
  background-color: ${({ theme }) => theme.colors.textSecondary};
  height: 100%;
`;

export const ImageContainer = styled.View`
  width: 100%;
  display: flex;
  padding: ${({ theme }) => theme.spacing.multiple(3)};
  justify-content: center;
  align-items: center;
  background-color: #2da59a;
`;

export const CocktailContainer = styled.ScrollView``;

export const TitleWrap = styled.View`
  margin: 0 ${({ theme }) => theme.spacing.single};
`;

export const TitleWrap2 = styled.View`
  margin-top: ${({ theme }) => theme.spacing.single};
`;
