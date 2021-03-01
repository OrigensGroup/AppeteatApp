import styled from 'styled-components/native';

export const MainWrapper = styled.View`
  background-color: #fff;
  height: 100%;
  width: 100%;
`;

export const BottomContainer = styled.View`
  background-color: transparent;
`;

export const TopContainer = styled.View`
  background-color: #fff;
  margin: 0 ${({ theme }) => theme.spacing.multiple(3)};
  margin-bottom: ${({ theme }) => theme.spacing.multiple(3)};
  margin-top: ${({ theme }) => theme.spacing.multiple(8)};
`;

export const CardsContainer = styled.View`
  height: 100%;
`;

export const ButtonsWrapper = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spacing.single};
  margin-bottom: ${({ theme }) => theme.spacing.multiple(2)};
  margin-top: ${({ theme }) => theme.spacing.multiple(3)};
`;
