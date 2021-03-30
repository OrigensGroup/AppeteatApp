import styled from 'styled-components/native';

export const NativePayContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 48px;
  position: relative;
`;

export const NativePayImage = styled.Image`
  position: absolute;
  width: 48px;
  height: 48px;
`;

export const NativePayText = styled.View`
  margin: auto;
`;
