import styled from 'styled-components/native';

export const NativePayContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: ${({ theme }) => theme.spacing.multiple(6)};
  position: relative;
`;

export const NativePayImage = styled.Image`
  position: absolute;
  width: ${({ theme }) => theme.spacing.multiple(6)};
  height: ${({ theme }) => theme.spacing.multiple(6)};
`;

export const NativePayText = styled.View`
  margin: auto;
`;
