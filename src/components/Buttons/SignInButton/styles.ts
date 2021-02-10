import styled from 'styled-components/native';

export const HomepageContainer = styled.View`
  display: flex;
`;

export const MainWrapper = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled.TouchableOpacity`
  margin: 0 ${({ theme }) => theme.spacing.multiple(3)};
  ${({ theme }) => theme.spacing.double};
  ${({ theme }) => theme.spacing.multiple(3)};
  background-color: #50494991;
  width: 40%;
  height: ${({ theme }) => theme.spacing.multiple(5)};
  align-items: center;
  justify-content: center;
  border-top-right-radius: ${({ theme }) => theme.spacing.single};
  border-top-left-radius: ${({ theme }) => theme.spacing.single};
  border-bottom-right-radius: ${({ theme }) => theme.spacing.single};
  border-bottom-left-radius: ${({ theme }) => theme.spacing.single};
`;
