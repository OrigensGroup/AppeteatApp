import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: ${({ theme }) => theme.spacing.single};
`;

export const IconWrapper = styled.View`
  width: 100%;
  height: 100%;
`;
