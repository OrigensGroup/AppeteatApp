import styled from 'styled-components/native';

export const FilterModalContainer = styled.View`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
`;

export const FilterModalTbasContainer = styled.View`
  display: flex;
  margin-top: ${({ theme }) => theme.spacing.multiple(3)};
  align-items: center;
  justify-content: center;
`;

export const FilterPopUpContainer = styled.View`
  height: 90%;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.textSecondary};
  border-top-left-radius: ${({ theme }) => theme.spacing.multiple(3)};
  border-top-right-radius: ${({ theme }) => theme.spacing.multiple(3)};
`;

export const TitleWrapper = styled.View`
  padding-top: ${({ theme }) => theme.spacing.multiple(2)};
`;

export const DivLine = styled.View`
  width: 100%;
  padding-top: ${({ theme }) => theme.spacing.multiple(2)};
  border-color: ${({ theme }) => theme.colors.border};
  border-bottom-width: 1px;
  margin-bottom: ${({ theme }) => theme.spacing.multiple(1)};
`;

export const FlatListWrapper = styled.View`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%;
`;

//bottom bar components
export const FilterModalBottomBar = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const FilterModalBottomBarWrapper = styled.View`
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.multiple(3)};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const BottomButtonContainer = styled.TouchableOpacity`
  width: 45%;
  height: ${({ theme }) => theme.spacing.multiple(5)};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.spacing.multiple(1)};
  margin-top: ${({ theme }) => theme.spacing.multiple(2)};
  margin-bottom: ${({ theme }) => theme.spacing.multiple(2)};
  background-color: ${({ theme }) => theme.colors.active};
`;

export const BottomButtonWrapperLeft = styled.View`
  height: ${({ theme }) => theme.spacing.multiple(5)};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${({ theme }) => theme.spacing.multiple(1)};
`;

export const BottomButtonWrapperRight = styled.View`
  height: ${({ theme }) => theme.spacing.multiple(5)};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${({ theme }) => theme.spacing.multiple(1)};
`;

export const AllergyInfoWrapper = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.multiple(3)};
`;
