import styled from 'styled-components/native';

export const FilterButtonContainer = styled.View`
  width: ${({ theme }) => theme.spacing.multiple(5)};
  height: ${({ theme }) => theme.spacing.multiple(5)};
  border-radius: ${({ theme }) => theme.spacing.single};
  margin-bottom: ${({ theme }) => theme.spacing.multiple(2)};
  display: flex;
  flex-direction: row;
  border-width: 1px;
  background-color: #fff;
  border-color: #c2c2c2;
  border-width: 1px;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin-right: ${({ theme }) => theme.spacing.single};
`;

export const IconWrapper = styled.View``;
