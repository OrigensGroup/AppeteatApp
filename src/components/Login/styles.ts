import styled from 'styled-components/native';

export const HomepageContainer = styled.View`
  display: flex;
`;

export const TextFieldWrapper = styled.View`
  margin: 0 ${({ theme }) => theme.spacing.multiple(3)}
    ${({ theme }) => theme.spacing.double}
    ${({ theme }) => theme.spacing.multiple(3)};
`;

export const TextFieldsContainer = styled.View`
  margin-top: 50%;
`;
