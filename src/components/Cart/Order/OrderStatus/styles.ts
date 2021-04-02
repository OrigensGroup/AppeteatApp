import styled from 'styled-components/native';

export const OrderStatusContainer = styled.View`
  display: flex;
  flex-direction: column;

  margin-top: ${({ theme }) => theme.spacing.multiple(5)};
`;

export const OrderStatusGraphic = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin: 0 ${({ theme }) => theme.spacing.multiple(8)};
`;

type DisabledStatus = {
  disabled?: boolean;
};

export const OrderStatusBall = styled.View<DisabledStatus>`
  background-color: ${({ disabled, theme }) => (disabled ? theme.colors.border : theme.colors.active)};
  width: ${({ theme }) => theme.spacing.double};
  height: ${({ theme }) => theme.spacing.double};
  border-radius: ${({ theme }) => theme.spacing.double};
`;

export const OrderStatusLine = styled.View<DisabledStatus>`
  flex: 1;
  height: ${({ theme }) => theme.spacing.half};
  background-color: ${({ disabled, theme }) => (disabled ? theme.colors.border : theme.colors.active)};
`;

export const OrderStatusExplaination = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: ${({ theme }) => theme.spacing.triple};
`;

export const OrderStatusText = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
