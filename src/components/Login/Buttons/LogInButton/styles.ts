import styled from 'styled-components/native';

interface LoginProps {
  opaqueActive?: boolean;
}

export const ButtonContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const IconWrapper = styled.TouchableOpacity<LoginProps>`
  height: ${({ theme }) => theme.spacing.multiple(5)};
  border-radius: ${({ theme }) => theme.spacing.single};
  ${({ opaqueActive, theme }) =>
    opaqueActive ? `background-color: ${theme.colors.opaqueActive}` : `background-color: ${theme.colors.active}`};
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  align-items: center;

  width: 100%;
`;
