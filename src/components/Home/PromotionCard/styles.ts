import styled from 'styled-components/native';

export const PromotionCardContainer = styled.TouchableOpacity`
  width: ${({ theme }) => theme.spacing.multiple(30)};
  height: ${({ theme }) => theme.spacing.multiple(20)};
  display: flex;
  flex-direction: row;

  width: ${({ theme }) => theme.spacing.multiple(35)};
  height: ${({ theme }) => theme.spacing.multiple(20)};

  border-width: 1px;
  border-color: #C2C2C2;
  background-color: ${({ theme }) => theme.colors.textSecondary};
  border-radius: ${({ theme }) => theme.spacing.multiple(3)};
  margin: ${({ theme }) => theme.spacing.single} ${({ theme }) => theme.spacing.double} ${({ theme }) =>
  theme.spacing.half} 0};
`;

export const PromotionCardImage = styled.Image`
  height: 100%;
  width: ${({ theme }) => theme.spacing.multiple(14)};
  border-radius: ${({ theme }) => theme.spacing.multiple(3)};
`;

export const PromotionCardDescription = styled.View`
  padding-top: ${({ theme }) => theme.spacing.single};
`;

export const PromotionCardLike = styled.View`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.single};
  right: ${({ theme }) => theme.spacing.single};
`;
