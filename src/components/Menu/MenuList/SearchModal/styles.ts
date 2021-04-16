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

// bottom bar components
export const SearchModalBottomBar = styled.View`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;

  padding: 0 ${({ theme }) => theme.spacing.triple};
`;

export const SearchModalBottomBarWrapper = styled.View`
  padding: 0 ${({ theme }) => theme.spacing.triple};
  padding-top: ${({ theme }) => theme.spacing.oneAndHalf};
  padding-bottom: ${({ theme }) => theme.spacing.half};
  border-top-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
`;

export const SafeAreaViewBottom = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.backgroundColor};
`;

export const SearchHeader = styled.View`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: ${({ theme }) => theme.spacing.triple};
  padding-bottom: 0;
`;

export const NoResultContainer = styled.View`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.triple};
`;
