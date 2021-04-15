import styled from 'styled-components/native';

export const SafeAreaViewBottom = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.backgroundColor};
`;

export const MainButtonWrapper = styled.View`
  padding: 0 ${({ theme }) => theme.spacing.triple};
  padding-top: ${({ theme }) => theme.spacing.oneAndHalf};
  padding-bottom: ${({ theme }) => theme.spacing.half};
  border-top-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
`;
