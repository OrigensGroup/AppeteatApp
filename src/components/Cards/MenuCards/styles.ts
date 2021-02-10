import styled from "styled-components/native";

export const HomepageContainer = styled.View`
  display: flex;
`;

export const MenuWrapper = styled.View`
  height: ${({ theme }) => theme.spacing.multiple(11)};
  margin: 10px ${({ theme }) => theme.spacing.multiple(3)}
  ${({ theme }) => theme.spacing.double}
  ${({ theme }) => theme.spacing.multiple(3)};
  background-color: #50494991;
  align-content: center;
  justify-content: flex-start;
  border-top-right-radius: ${({ theme }) => theme.spacing.single};
  border-top-left-radius: ${({ theme }) => theme.spacing.single};
  border-bottom-right-radius: ${({ theme }) => theme.spacing.single};
  border-bottom-left-radius: ${({ theme }) => theme.spacing.single};
`;


export const Img = styled.Image`
  height: ${({ theme }) => theme.spacing.multiple(11)};
  width: ${({ theme }) => theme.spacing.multiple(7)};
  border-top-right-radius: ${({ theme }) => theme.spacing.single};
  border-top-left-radius: ${({ theme }) => theme.spacing.single};
  border-bottom-right-radius: ${({ theme }) => theme.spacing.single};
  border-bottom-left-radius: ${({ theme }) => theme.spacing.single};
`;
