import styled from 'styled-components/native';

interface MenuTabContainerProps {
  active: boolean;
}

export const MenuTabContainer = styled.TouchableOpacity<MenuTabContainerProps>`
  ${({ active }) => active && `border-color: #FC7930; border-width: 1px; border-radius: 8px;`}
  margin-left: ${({ theme }) => theme.spacing.triple};
  margin-bottom: ${({ theme }) => theme.spacing.multiple(2)};
  padding: 8px;
`;

export const Text = styled.Text`
  font-size: 18px;
  display: flex;
  color: black;
  font-weight: bold;
`;
