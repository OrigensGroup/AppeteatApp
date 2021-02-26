import styled from 'styled-components/native';

interface MenuTabContainerProps {
  active: boolean;
}

export const MenuTabContainer = styled.TouchableOpacity<MenuTabContainerProps>`
  ${({ active }) => active && `border-bottom-color: #FC7930; border-bottom-width: 3px;`}
  margin-right: ${({ theme }) => theme.spacing.multiple(3)};
  margin-bottom: ${({ theme }) => theme.spacing.multiple(2)};
`;

export const Text = styled.Text`
  font-size: 18px;
  color: black;
  font-weight: bold;
`;
