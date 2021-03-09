import styled from 'styled-components/native';

export const LogoContainer = styled.View`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoImage = styled.Image`
  width: 100%;
  height: ${({ theme }) => theme.spacing.multiple(25)};
  display: flex;
  resize-mode: contain;
`;