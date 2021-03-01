import styled from 'styled-components/native';

export const MenuWrapper = styled.View`
  background-color: #fff;
  height: 100%;
  width: 100%;
`;

export const TopContainer = styled.View`
  margin: 0 ${({ theme }) => theme.spacing.multiple(3)};
  margin-top: ${({ theme }) => theme.spacing.single};
`;

export const TopBarWrapper = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin: ${({ theme }) => theme.spacing.multiple(2)} 0;
  `;

export const BasketButtonWrapper = styled.View`
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  justify-content: flex-end;
  padding-bottom: ${({ theme }) => theme.spacing.multiple(2)};
  padding-left: ${({ theme }) => theme.spacing.multiple(3)};
  padding-right: ${({ theme }) => theme.spacing.multiple(3)};
`;
