import styled from "styled-components/native";

export const ProfileLinkContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: ${({ theme }) => theme.spacing.single} 0;
`;
export const ArrowContainer = styled.View``;
export const IconContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const LinkWrapper = styled.View`
  margin: ${({ theme }) => theme.spacing.multiple(2)};
`;

export const IconTextWrap = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
