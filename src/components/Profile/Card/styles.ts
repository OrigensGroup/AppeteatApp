import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: ${({ theme }) => theme.spacing.multiple(30)};
  height: ${({ theme }) => theme.spacing.multiple(15)};
  display: flex;
  flex-direction: row;
  border-width: 1px;
  background-color: ${({ theme }) => theme.colors.backgroundColor};

  border-radius:${({ theme }) => theme.spacing.double};
  border-color: #c2c2c2;

  margin: ${({ theme }) => theme.spacing.single} ${({ theme }) => theme.spacing.double} ${({ theme }) =>
  theme.spacing.half} ${({ theme }) => theme.spacing.double}};
`;

export const CardContainer = styled.View`
  padding: ${({ theme }) => theme.spacing.single};
`;

export const ImageContainer = styled.View`
  padding: ${({ theme }) => theme.spacing.single};
`;

export const DrinkImage = styled.Image`
  height: 100%;
  width: ${({ theme }) => theme.spacing.multiple(11)};
  border-radius: 16px;
`;

export const DrinkDesc = styled.View`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.oneAndHalf} ${({ theme }) => theme.spacing.single};
`;

export const DescriptionWrapper = styled.View`
  padding-top: ${({ theme }) => theme.spacing.single};
`;
