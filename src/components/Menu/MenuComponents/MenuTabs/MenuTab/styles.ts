import styled from 'styled-components/native';

interface MenuTabContainerProps {
  active: boolean;
}

export const MenuTabContainer = styled.TouchableOpacity<MenuTabContainerProps>`
    ${({ active }) => active && `border-color: #F69019; 
    border-width: 1px; 
    border-radius: 8px;
    background-color: #F69019;`}
    margin-right: ${({ theme }) => theme.spacing.multiple(3)};
    margin-bottom: ${({ theme }) => theme.spacing.multiple(2)};
    padding: ${({ theme }) => theme.spacing.multiple(1)};
`;

export const Text = styled.Text`
  font-size: 18px;
  color: black;
  font-weight: bold;
`;
