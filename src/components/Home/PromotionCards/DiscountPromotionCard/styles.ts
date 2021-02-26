import styled from 'styled-components/native';

export const DiscountPromotionContainer = styled.TouchableOpacity`
  width: 100%;
  height: ${({ theme }) => theme.spacing.multiple(30)};
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.spacing.double};
`;

export const DiscountPromotionImage = styled.Image`
  height: 100%;
  width: ${({ theme }) => theme.spacing.multiple(14)};
  border-radius: ${({ theme }) => theme.spacing.multiple(3)};
`;

export const ImageContainer = styled.View`
  padding: ${({ theme }) => theme.spacing.oneAndHalf};
`;

export const DiscountPromotionDescription = styled.View`
  padding-top: ${({ theme }) => theme.spacing.oneAndHalf};
`;

export const DiscountPromotionButton = styled.View`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.oneAndHalf};
  right: ${({ theme }) => theme.spacing.oneAndHalf};
`;

export const DiscountPromotionOrderButton = styled.TouchableOpacity`
  padding: ${({ theme }) => theme.spacing.single};
  align-items: center;
  border-radius: ${({ theme }) => theme.spacing.multiple(3)};
  background-color: ${({ theme }) => theme.colors.active};
`;
