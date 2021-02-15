import styled from "styled-components/native";

interface TitleProps {
  fontSize: number;
  color: string;
  fontWeight?: string;
}

export const TitleText = styled.Text<TitleProps>`
  font-size: ${({ fontSize }) => fontSize}px;
  color: ${({ color }) => color};
  ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight} `};
`;
