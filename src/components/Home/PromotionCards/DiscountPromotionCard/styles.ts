import styled from 'styled-components/native';

export const DiscountPromotionContainer = styled.TouchableOpacity`
  width: 100%;
  height: ${({ theme }) => theme.spacing.multiple(25)};
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.spacing.multiple(3)};
`;

export const DiscountPromotionImage = styled.Image`
  height: 100%;
  width: 100%;
  border-radius: ${({ theme }) => theme.spacing.multiple(3)};
`;

export const ImageContainer = styled.View`
  height: 100%;
  width: 40%;
  padding: ${({ theme }) => theme.spacing.oneAndHalf};
`;

export const DiscountPromotionDescription = styled.View`
  flex: 1;
  flex-wrap: wrap;
  padding: ${({ theme }) => theme.spacing.triple} ${({ theme }) => theme.spacing.oneAndHalf} 0 0;
`;

export const DiscountPromotionButton = styled.View`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.oneAndHalf};
  right: ${({ theme }) => theme.spacing.oneAndHalf};
`;

export const DiscountPromotionOrderButton = styled.TouchableOpacity`
  padding: ${({ theme }) => theme.spacing.half} ${({ theme }) => theme.spacing.oneAndHalf};
  align-items: center;
  border-radius: ${({ theme }) => theme.spacing.multiple(3)};
  background-color: ${({ theme }) => theme.colors.active};
`;
