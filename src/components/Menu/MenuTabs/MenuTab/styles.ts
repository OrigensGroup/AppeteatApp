import styled from 'styled-components/native';

interface MenuTabContainerProps {
  active: boolean;
}

export const MenuTabContainer = styled.TouchableOpacity<MenuTabContainerProps>`
  ${({ active, theme }) => active && `border-color: ${theme.colors.active}; border-width: 1px; border-radius: ${theme.spacing.single};`};
  margin-left: ${({ theme }) => theme.spacing.triple};
  margin-bottom: ${({ theme }) => theme.spacing.multiple(2)};
  padding: ${({ theme }) => theme.spacing.single};
`;
