import styled from 'styled-components/native';

export const PersonalInformationContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  height: 100%;
  padding: 0 ${({ theme }) => theme.spacing.multiple(2)} 0 ${({ theme }) => theme.spacing.multiple(2)};
  display: flex;
  align-items: center;
`;
export const ButtonContainer = styled.TouchableOpacity`
  padding: ${({ theme }) => theme.spacing.single};
`;
