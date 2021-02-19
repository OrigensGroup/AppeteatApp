import styled from "styled-components/native";

export const PersonalInformationContainer = styled.View`
  background-color: #fff;
  height: 100%;
`;
export const PersonalInformationWrap = styled.View`
  margin: 0 ${({ theme }) => theme.spacing.multiple(2)} 0
    ${({ theme }) => theme.spacing.multiple(2)};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InfoContainer = styled.View`
  display: flex;
  justify-content: flex-start;
  width: 30%;
`;
export const RowContainer = styled.View`
  display: flex;
  flex-direction: row;
  padding: ${({ theme }) => theme.spacing.multiple(3)} 0;
  width: 100%;
`;
export const InnerContainer = styled.View`
  border-bottom-color: #000;
  border-color: transparent;
  border-width: 1px;
  flex: 1;
`;
