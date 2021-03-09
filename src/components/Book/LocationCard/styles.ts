import styled from 'styled-components/native';

export const CardContainer = styled.TouchableOpacity`
  height: ${({ theme }) => theme.spacing.multiple(32)};
  width: ${({ theme }) => theme.spacing.multiple(30)};
  background-color: ${({ theme }) => theme.colors.textSecondary};
  border-radius: ${({ theme }) => theme.spacing.double};
  margin-bottom: ${({ theme }) => theme.spacing.double};
  margin: ${({ theme }) => theme.spacing.double} ${({ theme }) => theme.spacing.multiple(3)};
`;

export const VenueImage = styled.Image`
  width: 100%;
  height: 100%;
  border-top-right-radius: ${({ theme }) => theme.spacing.double};
  border-top-left-radius: ${({ theme }) => theme.spacing.double};
`;
export const ImageContainer = styled.View`
  height: 50%;
  overflow: hidden;
`;
export const DrinkDesc = styled.View`
  padding:  ${({ theme }) => theme.spacing.single} ${({ theme }) => theme.spacing.double} 0 ${({ theme }) => theme.spacing.single};
`;
export const TextContainer = styled.View`
  padding:   0 ${({ theme }) => theme.spacing.double} 0 0;
`;
export const Content = styled.View`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;
export const Circle = styled.View`
  height: 15px;
  width: 15px;
  border-radius: 7.5px;
  background-color: ${({ theme }) => theme.colors.active};;
  margin:  ${({ theme }) => theme.spacing.single} 0 0 ${({ theme }) => theme.spacing.double};
`;
export const ButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  padding: ${({ theme }) => theme.spacing.single} 0;
`;

export const ShareButton = styled.TouchableOpacity`
  padding: 0 ${({ theme }) => theme.spacing.double};
  align-items: center;
  display: flex;
`;
export const BookATableButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 16px;
  right: 16px;
`;
