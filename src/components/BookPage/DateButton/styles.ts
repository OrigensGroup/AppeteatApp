import styled from "styled-components/native";

export const DateButtonContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  background-color: rgba(255, 184, 3, 0.222);
  border-radius: ${({ theme }) => theme.spacing.double};
  padding: ${({ theme }) => theme.spacing.double};
  justify-content: space-around;
`;
