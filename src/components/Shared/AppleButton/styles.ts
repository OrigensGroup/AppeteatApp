import styled from 'styled-components/native';
import CartProvider from '../../../contexts/Cart';

interface ButtonProps {

}
export const ButtonContainer = styled.TouchableOpacity`
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.single};
`;