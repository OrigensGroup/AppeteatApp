import styled from 'styled-components/native';

interface MenuTabContainerProps {
  active: boolean;
}

export const MenuTabContainer = styled.TouchableOpacity<MenuTabContainerProps>`
  ${({ active }) => active && `border-bottom-color: #FC7930; border-bottom-width: 3px;`}
`;
