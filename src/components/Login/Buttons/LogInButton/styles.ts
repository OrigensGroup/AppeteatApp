import styled from 'styled-components/native';

export const ButtonContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.multiple(3)};
  margin-bottom: ${({ theme }) => theme.spacing.multiple(1)};
`;

export const IconWrapper = styled.TouchableOpacity`
  height: ${({ theme }) => theme.spacing.multiple(8)};
  width: ${({ theme }) => theme.spacing.multiple(8)};
  background-color: ${({ theme }) => theme.colors.borderFaded};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.spacing.multiple(10)};
`;