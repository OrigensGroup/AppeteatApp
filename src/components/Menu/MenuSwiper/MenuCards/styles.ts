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
  width: ${({ theme }) => theme.spacing.multiple(15)};
  height: ${({ theme }) => theme.spacing.multiple(15)};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PropsWrapper = styled.View`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const DrinkImage = styled.Image`
  height: ${({ theme }) => theme.spacing.multiple(12)};
  width: ${({ theme }) => theme.spacing.multiple(12)};
  border-radius: ${({ theme }) => theme.spacing.triple};
`;

export const DrinkDesc = styled.View`
  flex: 1;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: ${({ theme }) => theme.spacing.double} ${({ theme }) => theme.spacing.double};
  justify-content: space-between;
`;

export const LikeButton = styled.TouchableOpacity`
  width: ${({ theme }) => theme.spacing.multiple(4)};
  height: ${({ theme }) => theme.spacing.multiple(4)};
  display: flex;
  border-radius: ${({ theme }) => theme.spacing.multiple(4)};
  justify-content: center;
  align-items: center;
  bottom: ${({ theme }) => theme.spacing.single};
  right: ${({ theme }) => theme.spacing.double};
  position: absolute;
`;
