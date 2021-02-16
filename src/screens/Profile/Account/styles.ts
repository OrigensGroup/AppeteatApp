import styled from "styled-components/native";

export const ProfileContainer = styled.View``;
export const NavigationContainer = styled.View`
  width: 100%;
`;
export const ImageContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #f0eff3;
  padding: ${({ theme }) => theme.spacing.multiple(3)};
`;
