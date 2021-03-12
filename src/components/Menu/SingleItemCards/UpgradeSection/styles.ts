import styled from 'styled-components/native';

export const UpgradeSectionContainer = styled.View`
  flex: 1;
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

export const ItemRow = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin: 0 ${({ theme }) => theme.spacing.triple};
  padding: ${({ theme }) => theme.spacing.double} 0;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.textPrimary};
`;

export const CheckBoxItemSection = styled.View`
  margin: 0 ${({ theme }) => theme.spacing.single};
`;

export const TitleItem = styled.View`
  margin-right: auto;
`;

export const PriceItem = styled.View`
  margin-right: ${({ theme }) => theme.spacing.single};
`;

export const ItemInfo = styled.TouchableOpacity`
  margin-right: ${({ theme }) => theme.spacing.half};
`;
