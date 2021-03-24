import styled from 'styled-components/native';

export const ModalContainer = styled.View`
  height: 100%;
  align-items: center;
  justify-content: flex-end;
`;

export const PopUpContainer = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  width: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundColor};

  align-items: center;
  border-top-left-radius: ${({ theme }) => theme.spacing.triple};
  border-top-right-radius: ${({ theme }) => theme.spacing.triple};
  padding: ${({ theme }) => theme.spacing.triple};
`;

export const SpinnerContainer = styled.View`
  width: 50%;
  padding: ${({ theme }) => theme.spacing.single} ${({ theme }) => theme.spacing.double}
    ${({ theme }) => theme.spacing.multiple(3)} ${({ theme }) => theme.spacing.double};
`;

export const TimePickers = styled.View`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const TimePickersRow = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
`;

export const PickerContainer = styled.View`
  flex: 1;
`;

export const ConfirmButton = styled.View`
  margin: 0 ${({ theme }) => theme.spacing.double};
`;
