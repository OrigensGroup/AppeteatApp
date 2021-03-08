import styled from 'styled-components/native';


export const CardContainer = styled.TouchableOpacity`
  width: 100%;
  height: ${({ theme }) => theme.spacing.multiple(15)};
  display: flex;
  flex-direction: row;
  border-width: 1px;
  background-color: #fff;
  border-radius: ${({ theme }) => theme.spacing.multiple(3)};
  border-color: ${({ theme }) => theme.colors.border};
  border-bottom-width: 1px;
  margin-bottom: ${({ theme }) => theme.spacing.multiple(2)};
  margin-right: ${({ theme }) => theme.spacing.multiple(3)};
  justify-content: space-between;
`;


export const LeftWrapper = styled.View`
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const RightWrapper = styled.View`
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const ImageWrapper = styled.View`
  width: ${({ theme }) => theme.spacing.multiple(15)};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DrinkImage = styled.Image`
  height: ${({ theme }) => theme.spacing.multiple(13)};
  width: ${({ theme }) => theme.spacing.multiple(13)};
  border-bottom-left-radius: ${({ theme }) => theme.spacing.multiple(3)};
  border-bottom-right-radius: ${({ theme }) => theme.spacing.multiple(3)};
  border-top-left-radius: ${({ theme }) => theme.spacing.multiple(3)};
  border-top-right-radius: ${({ theme }) => theme.spacing.multiple(3)};
`;

export const DrinkDesc = styled.View`
  padding-top: ${({ theme }) => theme.spacing.double};
  padding-left: ${({ theme }) => theme.spacing.double};
`;

export const PriceWrapper = styled.View`
`;

export const LikeButton = styled.TouchableOpacity`
  width: ${({ theme }) => theme.spacing.multiple(4)};
  height: ${({ theme }) => theme.spacing.multiple(4)};
  margin-top: ${({ theme }) => theme.spacing.multiple(9)};
  margin-right: ${({ theme }) => theme.spacing.multiple(2)};
  display: flex;
  background-color: ${({ theme }) => theme.colors.inactive};
  border-radius: ${({ theme }) => theme.spacing.multiple(4)};
  justify-content: center;
  align-items: center;
`;
