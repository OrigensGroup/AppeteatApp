import styled from 'styled-components/native';

export const SearchModalContainer = styled.View`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
`;

export const SearchModalTbasContainer = styled.View`
  display: flex;
  margin-top: ${({ theme }) => theme.spacing.triple};
  align-items: center;
  justify-content: center;
`;

export const SearchPopUpContainer = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;

  width: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundColor};

  align-items: center;
  padding: ${({ theme }) => theme.spacing.triple};
`;

export const TitleWrapper = styled.View`
  margin: ${({ theme }) => (theme.os === 'ios' ? theme.spacing.triple : theme.spacing.double)};

  border-bottom-color: ${({ theme }) => theme.colors.active};
  border-bottom-width: 3px;
`;

export const DivLine = styled.View`
  width: 100%;
  border-color: ${({ theme }) => theme.colors.border};
  border-bottom-width: 1px;
  margin-top: ${({ theme }) => theme.spacing.double};
`;

export const FlatListWrapper = styled.View`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%;
`;

//bottom bar components
export const SearchModalBottomBar = styled.View`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
`;

export const SearchModalBottomBarWrapper = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const BottomButtonContainer = styled.TouchableOpacity`
  width: 100%;
  height: ${({ theme }) => theme.spacing.multiple(5)};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.spacing.single};
  margin-top: ${({ theme }) => theme.spacing.double};
  margin-bottom: ${({ theme }) => theme.spacing.double};
  background-color: ${({ theme }) => theme.colors.active};
`;

export const BottomButtonWrapperLeft = styled.View`
  height: ${({ theme }) => theme.spacing.multiple(5)};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${({ theme }) => theme.spacing.single};
`;

export const BottomButtonWrapperRight = styled.View`
  height: ${({ theme }) => theme.spacing.multiple(5)};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${({ theme }) => theme.spacing.single};
`;

export const AllergyInfoWrapper = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.triple};
`;
