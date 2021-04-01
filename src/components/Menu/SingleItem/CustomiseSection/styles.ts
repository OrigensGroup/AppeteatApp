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

export const IngredientsTitle = styled.View`
  margin-top: ${({ theme }) => theme.spacing.multiple(5)};
  margin-bottom: ${({ theme }) => theme.spacing.oneAndHalf};
`;

export const CustomiseTitle = styled.TouchableOpacity`
  margin-bottom: ${({ theme }) => theme.spacing.oneAndHalf};
  margin-top: ${({ theme }) => theme.spacing.multiple(5)};
`;

export const Ingredient = styled.View``;
