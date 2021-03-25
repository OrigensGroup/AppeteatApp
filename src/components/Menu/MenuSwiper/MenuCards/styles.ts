import styled from 'styled-components/native';

export const CardContainer = styled.TouchableOpacity`
  width: 100%;
  height: ${({ theme }) => theme.spacing.multiple(15)};
  display: flex;
  flex-direction: row;
  border-width: 1px;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  border-radius: ${({ theme }) => theme.spacing.triple};
  border-color: ${({ theme }) => theme.colors.border};
  margin-bottom: ${({ theme }) => theme.spacing.double};
  margin-right: ${({ theme }) => theme.spacing.triple};
  justify-content: space-between;
  position: relative;
`;

export const ImageWrapper = styled.View`
  flex: 1;
  max-width: ${({ theme }) => theme.spacing.multiple(15)};
  max-height: ${({ theme }) => theme.spacing.multiple(15)};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardDescription = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: ${({ theme }) => theme.spacing.double} ${({ theme }) => theme.spacing.double};
`;

export const DiscountTag = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${({ theme }) => theme.spacing.single};
  height: 24px;
  border-radius: ${({ theme }) => theme.spacing.single};
  background-color: ${({ theme }) => theme.colors.active};
  margin-right: ${({ theme }) => theme.spacing.double};
`;

export const CardTitle = styled.View`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const CardMainItem = styled.View`
  flex: 1;
  margin-top: ${({ theme }) => theme.spacing.single};
`;

export const LikeIcon = styled.View`
  margin-right: ${({ theme }) => theme.spacing.single};
`;

export const CardPrice = styled.View`
  height: 100%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  flex-wrap: wrap;
  padding: ${({ theme }) => theme.spacing.double} 0;
  justify-content: space-between;
`;

export const DiscountPrice = styled.View`
  margin-top: auto;
  margin-bottom: ${({ theme }) => theme.spacing.single};
  margin-right: ${({ theme }) => theme.spacing.double};
`;

export const Price = styled.View<{ move: boolean }>`
  ${({ move }) => move && `margin-top: auto`};
  margin-right: ${({ theme }) => theme.spacing.double};
`;
