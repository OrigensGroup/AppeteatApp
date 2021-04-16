import styled from 'styled-components/native';

export const UpgradeSectionContainer = styled.View`
  flex: 1;
  height: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.multiple(7)};
`;

export const UpgradeItemList = styled.SectionList`
  flex: 1;
`;

export const HeaderRow = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin: 0 ${({ theme }) => theme.spacing.triple};
  padding: ${({ theme }) => theme.spacing.double} 0;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.textPrimary};
  background-color: ${({ theme }) => theme.colors.backgroundColor};
`;

export const ItemRow = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 ${({ theme }) => theme.spacing.triple};
  padding: ${({ theme }) => theme.spacing.multiple(1.5)} ${({ theme }) => theme.spacing.double};
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
`;

export const CheckBoxItemSection = styled.View`
  flex: 1;
  margin: 0 ${({ theme }) => theme.spacing.single};
`;

export const TitleItem = styled.View`
  flex: 6;
  margin-right: auto;
`;

export const PriceItem = styled.View`
  flex: 2;
  margin-right: ${({ theme }) => theme.spacing.single};
`;

export const ItemInfo = styled.TouchableOpacity`
  flex: 1;
  margin-right: ${({ theme }) => theme.spacing.half};
`;

export const UpgradableItems = styled.View`
  margin-top: ${({ theme }) => theme.spacing.double};
`;
