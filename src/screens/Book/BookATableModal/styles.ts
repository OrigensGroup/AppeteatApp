import styled from 'styled-components/native';


export const ModalContainer = styled.View`
  height: 100%;
  align-items: center;
  justify-content: flex-end;
`;

export const PopUpContainer = styled.View`
  background-color: #ffffff;
  align-items: center;
  height: 70%;
  width: 100%;
  border-top-left-radius: ${({ theme }) => theme.spacing.multiple(3)};
  border-top-right-radius: ${({ theme }) => theme.spacing.multiple(3)};
`;

export const UpdateWrapper = styled.TouchableOpacity`
  padding-top: ${({ theme }) => theme.spacing.multiple(3)};
`;

export const Container = styled.View`
  padding: ${({ theme }) => theme.spacing.multiple(3)} ${({ theme }) => theme.spacing.multiple(5)};
  width: 60%;
`;
export const DateContainer = styled.View`
  width: 50%;
  padding-right: ${({ theme }) => theme.spacing.single};
`;
export const VenueContainer = styled.View`
  width: 100%;
  padding-right: ${({ theme }) => theme.spacing.single};
`;
export const TimeContainer = styled.View`
  width: 50%;
  padding-left: ${({ theme }) => theme.spacing.single};
`;
export const DateWrap = styled.View`
  display: flex;
  flex-direction: row;
  padding: ${({ theme }) => theme.spacing.multiple(3)} ${({ theme }) => theme.spacing.multiple(5)};
`;
export const VenueWrap = styled.View`
  display: flex;
  flex-direction: row;
  padding: ${({ theme }) => theme.spacing.multiple(3)} ${({ theme }) => theme.spacing.multiple(5)};
`;
export const ConfirmContainer = styled.View`
  padding: ${({ theme }) => theme.spacing.multiple(3)} ${({ theme }) => theme.spacing.multiple(12)};
`;
export const IconContainer = styled.View`
  justify-content: center;
  align-items: center;
`;
export const TextContainer = styled.View`
  padding: ${({ theme }) => theme.spacing.single} 0;
`;


