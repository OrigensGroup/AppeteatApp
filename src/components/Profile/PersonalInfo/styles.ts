import styled from 'styled-components/native';

export const FieldContainer = styled.View`
  display: flex;
  justify-content: flex-start;
  width: 30%;
`;
export const InfoContainer = styled.View`
  display: flex;
  flex-direction: row;
  padding: ${({ theme }) => theme.spacing.multiple(3)} 0;
  width: 100%;
`;
export const ValueContainer = styled.TouchableOpacity`
  border-color: transparent;
  border-width: 1px;
  flex: 1;
`;
