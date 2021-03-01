import styled from 'styled-components/native';


export const InfoContainer = styled.View`
  display: flex;
  justify-content: flex-start;
  width: 30%;
`;
export const RowContainer = styled.View`
  display: flex;
  flex-direction: row;
  padding: ${({ theme }) => theme.spacing.multiple(3)} 0;
  width: 100%;
`;
export const InnerContainer = styled.TouchableOpacity`
  border-bottom-color: #000;
  border-color: transparent;
  border-width: 1px;
  flex: 1;
`;
