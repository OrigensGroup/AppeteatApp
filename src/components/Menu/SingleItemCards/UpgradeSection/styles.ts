import styled from 'styled-components/native';

export const UpgradeSectionContainer = styled.View`
  flex: 1;
`;

export const UpgradeItemList = styled.SectionList`
  flex: 1;
`;

export const ItemRow = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin: 0 ${({ theme }) => theme.spacing.triple};
  padding: ${({ theme }) => theme.spacing.double} 0;
  border-bottom-width: 1px;
  border-color: black;
`;

export const TitleItem = styled.View`
  margin-right: auto;
`;

export const PriceItem = styled.View`
  margin-right: ${({ theme }) => theme.spacing.single};
`;
