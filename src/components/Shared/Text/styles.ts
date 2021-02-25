import styled from 'styled-components/native';

interface TitleProps {
  fontSize: number;
  color: string;
  fontWeight?: string;
  align: string;
}
export const TitleContainer = styled.View`
  justify-content: center;
`;

export const TitleText = styled.Text<TitleProps>`
  font-size: ${({ fontSize }) => fontSize}px;
  color: ${({ color }) => color};
  ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight} `};
  text-align: ${({ align }) => align};
`;
