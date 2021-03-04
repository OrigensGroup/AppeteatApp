import styled from 'styled-components/native';


export const ButtonContainer = styled.View`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0 ${({ theme }) => theme.spacing.multiple(5)};
margin-top: ${({ theme }) => theme.spacing.multiple(5)};
`;

export const IconWrapper = styled.TouchableOpacity`
display: flex;
justify-content: center;
align-items: center;
`;


