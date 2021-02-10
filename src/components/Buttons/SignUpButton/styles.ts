import styled from 'styled-components/native';

export const HomepageContainer = styled.View`
  display: flex;
`;

export const MainWrapper = styled.View`
  margin: 0 ${({ theme }) => theme.spacing.multiple(3)}
    ${({ theme }) => theme.spacing.double}
    ${({ theme }) => theme.spacing.multiple(3)};
  width: 100%;
  height: 127px;
  align-items: flex-start;
  justify-content: flex-end;
`;

export const TextWrapper = styled.View`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.double};
  align-items: flex-start;
  justify-content: flex-end;
`;

export const ButtonContainer = styled.TouchableOpacity`
  margin-bottom: ${({ theme }) => theme.spacing.single};
`;

export const TextBold = styled.Text`
  font-weight: bold;
`;
