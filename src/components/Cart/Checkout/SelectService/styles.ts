import styled from 'styled-components/native';

export const SelectServiceWrapper = styled.View`
  flex-direction: column;
  width: 100%;
  height: ${({ theme }) => theme.spacing.multiple(14)};
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spacing.double};
  padding-top: ${({ theme }) => theme.spacing.double};
  margin-bottom: ${({ theme }) => theme.spacing.double};
`;

export const TitleWrapper = styled.View`
  width: 100%;
  justify-content: flex-start;
  margin-bottom: ${({ theme }) => theme.spacing.double};
`;

export const ButtonsWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const EmptyDiv = styled.View`
  width: ${({ theme }) => theme.spacing.double};
`;
