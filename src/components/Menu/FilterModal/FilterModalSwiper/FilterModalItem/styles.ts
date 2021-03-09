import styled from 'styled-components/native';

// interface FilterTabContainerProps {
//   active: boolean;
// }

// export const ModalItemContainer = styled.TouchableOpacity<FilterTabContainerProps>`
//   ${({ active }) => active && `border-color: #F69019;
//   border-width: 1px;
//   border-radius: 16px;`}
//   height: ${({ theme }) => theme.spacing.multiple(6)};
//   align-items: center;
//   justify-content: center;
//   border-width: 1px;
//   border-color: ${({ theme }) => theme.colors.border};
//   border-radius: ${({ theme }) => theme.spacing.multiple(2)};
//   margin-top: ${({ theme }) => theme.spacing.multiple(2)};
//   margin-right: ${({ theme }) => theme.spacing.multiple(3)};
// `;

export const ModalItemContainer = styled.TouchableOpacity`
  height: ${({ theme }) => theme.spacing.multiple(6)};
  display: flex;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.spacing.multiple(2)};
  margin-top: ${({ theme }) => theme.spacing.multiple(2)};
  margin-right: ${({ theme }) => theme.spacing.multiple(3)};
`;

export const ModalItemTextWrapper = styled.View`
  height: ${({ theme }) => theme.spacing.multiple(7)};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${({ theme }) => theme.spacing.multiple(2)};
`;
