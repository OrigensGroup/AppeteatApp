import styled from 'styled-components/native';

export const ProfileLinkContainer = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: ${({ theme }) => theme.spacing.single} 0;
`;
export const ArrowContainer = styled.View`
  margin-left: auto;
`;
export const IconContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing.single};
`;
export const IconTextWrap = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
