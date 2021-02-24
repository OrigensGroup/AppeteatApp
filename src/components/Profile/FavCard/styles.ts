import styled from 'styled-components/native';


export const CardContainer = styled.TouchableOpacity`
  height: ${({ theme }) => theme.spacing.multiple(25)};
  border-width: 1px;
  background-color: ${({ theme }) => theme.colors.textSecondary};
  border-radius:${({ theme }) => theme.spacing.multiple(3)};
  border-color: #c2c2c2;
 
`;
export const CardWrap = styled.View`
  padding: ${({ theme }) => theme.spacing.single};
`;

export const DrinkImage = styled.Image`
  height: 100%;
  width: 100%;
  border-radius:${({ theme }) => theme.spacing.multiple(3)};
`;
export const ImageContainer = styled.View`
  flex:1;
  padding: ${({ theme }) => theme.spacing.single} ${({ theme }) => theme.spacing.single} 0 ${({ theme }) => theme.spacing.single};

`;

export const DrinkDesc = styled.View`
  flex:1;
  padding: ${({ theme }) => theme.spacing.single} 0 0 ${({ theme }) => theme.spacing.double};
`;
export const IconWrap = styled.View`
 position: absolute;
 bottom: 16px;
 right: 16px;
`;
export const TextTitle = styled.Text`
  font-size: 20px;
  color: black;
`;
