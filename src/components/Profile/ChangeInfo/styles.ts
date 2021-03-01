import styled from 'styled-components/native';

export const ChangeInfoContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.textSecondary};
  height: 100%;
  `;
 export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.multiple(3)};
  `;