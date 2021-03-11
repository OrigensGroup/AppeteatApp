import styled from 'styled-components/native';

export const PromotionItemCardContainer = styled.TouchableOpacity`
  min-width: ${({ theme }) => theme.spacing.multiple(30)};
  width: ${({ theme }) => theme.spacing.multiple(30)};
  min-height: ${({ theme }) => theme.spacing.multiple(20)};
  display: flex;
  flex-direction: row;

  width: ${({ theme }) => theme.spacing.multiple(35)};
  height: ${({ theme }) => theme.spacing.multiple(20)};

  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  border-radius: ${({ theme }) => theme.spacing.multiple(3)};
  margin: ${({ theme }) => theme.spacing.single} 0 0 ${({ theme }) => theme.spacing.double};
`;

export const PromotionItemCardImageContainer = styled.View`
  padding: ${({ theme }) => theme.spacing.oneAndHalf};
`;

export const PromotionItemCardImage = styled.Image`
  height: 100%;
  width: ${({ theme }) => theme.spacing.multiple(14)};
  border-radius: ${({ theme }) => theme.spacing.multiple(3)};
`;

export const PromotionItemCardDescription = styled.View`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.double} ${({ theme }) => theme.spacing.double} 0 0;
`;
