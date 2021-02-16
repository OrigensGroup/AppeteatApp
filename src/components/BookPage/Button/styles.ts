import styled from "styled-components/native";

export const ButtonContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  background-color: #ffab004f;
  border-radius: ${({ theme }) => theme.spacing.double};
  padding: ${({ theme }) => theme.spacing.single};
`;
