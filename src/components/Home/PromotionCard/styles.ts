import styled from 'styled-components/native';

export const PromotionCardContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;

  width: ${({ theme }) => theme.spacing.multiple(35)};
  height: ${({ theme }) => theme.spacing.multiple(20)};

  border-width: 1px;
  background-color: ${({ theme }) => theme.colors.textSecondary};
  border-radius: ${({ theme }) => theme.spacing.double};

  margin: ${({ theme }) => theme.spacing.single} ${({ theme }) => theme.spacing.double} ${({ theme }) =>
  theme.spacing.half} 0};
`;

export const PromotionCardImage = styled.Image`
  height: 100%;
  width: ${({ theme }) => theme.spacing.multiple(14)};

  border-bottom-left-radius: ${({ theme }) => theme.spacing.double};
  border-top-left-radius: ${({ theme }) => theme.spacing.double}; ;
`;

export const PromotionCardDescription = styled.View`
  padding: ${({ theme }) => theme.spacing.double} 0 0 ${({ theme }) => theme.spacing.double};
`;

export const PromotionCardLike = styled.View`
  padding: ${({ theme }) => theme.spacing.double} 0 0 ${({ theme }) => theme.spacing.multiple(5)};
`;
