import styled from 'styled-components/native';

export const LocationContainer = styled.TouchableOpacity`
  width: 100%;
  height: ${({ theme }) => theme.spacing.multiple(16)};

  background-color: ${({ theme }) => theme.colors.textSecondary};
  border-radius: ${({ theme }) => theme.spacing.double};
  justify-content: center;
  align-items: center;
`;

export const CardTitle = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: ${({ theme }) => theme.spacing.half};
`;

export const LocationWrap = styled.View``;
