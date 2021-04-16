import styled from 'styled-components/native';

export const PopUpContainer = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  width: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundColor};

  align-items: center;
  border-top-left-radius: ${({ theme }) => theme.spacing.triple};
  border-top-right-radius: ${({ theme }) => theme.spacing.triple};
  padding: ${({ theme }) => theme.spacing.double};
  padding-bottom: ${({ theme }) => theme.spacing.multiple(4)};
`;

export const CardModalHeader = styled.View`
  display: flex;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.triple};
`;

type CardModalChoiceProps = {
  active?: boolean;
};

export const CardModalChoice = styled.TouchableOpacity<CardModalChoiceProps>`
  display: flex;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.oneAndHalf} ${({ theme }) => theme.spacing.triple};

  border-width: 1px;
  border-color: ${({ active, theme }) => (active ? theme.colors.active : theme.colors.border)};
  border-radius: ${({ theme }) => theme.spacing.single};

  margin-bottom: ${({ theme }) => theme.spacing.oneAndHalf};
`;

export const CashPayFeatureFlag = styled.View``;
