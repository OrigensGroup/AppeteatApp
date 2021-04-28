import styled from 'styled-components/native';

export const CardContainer = styled.TouchableOpacity`
  display: flex;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  border-radius: ${({ theme }) => theme.spacing.double};
  margin: ${({ theme }) => theme.spacing.double} ${({ theme }) => theme.spacing.triple};

  width: ${({ theme }) => theme.spacing.multiple(33)};
  max-width: ${({ theme }) => theme.spacing.multiple(33)};
`;

export const ImageContainer = styled.View`
  height: ${({ theme }) => theme.spacing.multiple(16)};
`;

export const Content = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const LocationDescription = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: ${({ theme }) => theme.spacing.single};
`;

export const Circle = styled.View`
  height: ${({ theme }) => theme.spacing.double};
  width: ${({ theme }) => theme.spacing.double};
  border-radius: 7.5px;
  background-color: ${({ theme }) => theme.colors.active};
  margin: ${({ theme }) => theme.spacing.single} 0 0 ${({ theme }) => theme.spacing.double};
`;

export const DrinkDesc = styled.View`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.single} ${({ theme }) => theme.spacing.double} 0
    ${({ theme }) => theme.spacing.single};
`;

export const TextContainer = styled.View`
  padding: ${({ theme }) => theme.spacing.half} ${({ theme }) => theme.spacing.double}
    ${({ theme }) => theme.spacing.half} 0;
`;

export const ButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  padding: ${({ theme }) => theme.spacing.single} 0;
  margin-bottom: ${({ theme }) => theme.spacing.single};
`;

export const ShareButton = styled.TouchableOpacity`
  padding: 0 ${({ theme }) => theme.spacing.double};
  align-items: center;
  display: flex;
`;

export const BookATableButton = styled.TouchableOpacity`
  margin-left: auto;
  margin-right: ${({ theme }) => theme.spacing.double};
`;
