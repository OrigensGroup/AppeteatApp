import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  height: ${({ theme }) => theme.spacing.multiple(28)};
  border-width: 1px;
  background-color: ${({ theme }) => theme.colors.textSecondary};
  border-radius: ${({ theme }) => theme.spacing.multiple(3)};
  border-color: ${({ theme }) => theme.colors.border};
`;
export const FavouriteCoctailsCard = styled.View`
  padding: ${({ theme }) => theme.spacing.single};
`;

export const DrinkImage = styled.Image`
  height: 100%;
  width: 100%;
  border-top-left-radius:${({ theme }) => theme.spacing.multiple(3)};
  border-top-right-radius:${({ theme }) => theme.spacing.multiple(3)};
  border-bottom-left-radius:${({ theme }) => theme.spacing.multiple(3)};
  border-bottom-right-radius:${({ theme }) => theme.spacing.multiple(3)};

`;
export const ImageContainer = styled.View`
  height: 60%;
  padding: ${({ theme }) => theme.spacing.single};

`;

export const DrinkDesc = styled.View`
  flex: 1;
  padding: 0 ${({ theme }) => theme.spacing.double} ;
`;
export const IconWrap = styled.View`
display: flex;
align-items: flex-end;
padding: ${({ theme }) => theme.spacing.double} ${({ theme }) => theme.spacing.double};

`;
