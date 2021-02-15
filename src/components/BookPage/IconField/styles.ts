import styled from "styled-components/native";

interface IconFieldProps {
  backgroundColor: string;
  justifyContent?: string;
}

export const IconFieldContainer = styled.View<IconFieldProps>`
  display: flex;
  flex-direction: row;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${({ theme }) => theme.spacing.double};
  padding: ${({ theme }) => theme.spacing.single};
  ${({ theme }) => theme.spacing.double};

  ${({ justifyContent }) =>
    justifyContent && `justifyContent: ${justifyContent} `};
`;
