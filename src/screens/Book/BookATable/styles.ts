import styled from 'styled-components/native';

export const BookTableContainer = styled.View`
  background-color: #fff;
  height: 100%;
`;

export const VenueImage = styled.Image`
  width: 100%;
  height: 100%;
`;
export const ImageContainer = styled.View`
  width: 100%;
  height: 40%;
  z-index: 1;
`;
export const FieldsContainer = styled.View`
  top: 30%;
  height: 70%;
  width: 100%;
  border-top-right-radius: ${({ theme }) => theme.spacing.multiple(5)};
  border-top-left-radius: ${({ theme }) => theme.spacing.multiple(5)};
  position: absolute;
  z-index: 2;
  background-color: white;
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
