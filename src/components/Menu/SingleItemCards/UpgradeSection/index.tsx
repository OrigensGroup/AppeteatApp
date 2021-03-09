import React, { useState } from 'react';
import { SectionList } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useTheme } from 'styled-components';

import Text from '../../../shared/Text';

import { MenuItem, UpgradeItem } from '../../../../types/MenuItem';
import { ItemRow, TitleItem, UpgradeSectionContainer, PriceItem } from './styles';
import currencyTranslations from '../../../../translations/currency';

interface UpgradeSectionProps {
  item: MenuItem;
  updateExtras: any;
}

const UpgradeSection: React.FunctionComponent<UpgradeSectionProps> = ({ item, updateExtras }) => {
  const theme = useTheme();
  const [selectedItem, setSelectedItem] = useState(0);

  const upgradeItemRow = ({
    item,
    index,
    section,
  }: {
    item: UpgradeItem['data'];
    index: number;
    section: UpgradeItem;
  }) => {
    return (
      <ItemRow>
        <TitleItem>
          <Text fontSize={16} bold color="primary">
            {item.title}
          </Text>
        </TitleItem>
        {item.price > -1 && (
          <PriceItem>
            <Text fontSize={14} bold color="primary">
              ( + {currencyTranslations.currencyField.placeholder}
              {item.price})
            </Text>
          </PriceItem>
        )}

        <CheckBox
          boxType="square"
          disabled={false}
          value={item.selected}
          onTintColor={theme.colors.active}
          onCheckColor={theme.colors.active}
          tintColors={{
            false: theme.colors.active,
            true: theme.colors.active,
          }}
        />
      </ItemRow>
    );
  };

  const sectionHeader = ({ section: { title } }: { section: { title: string } }) => (
    <ItemRow>
      <Text fontSize={20} bold color="primary">
        {title}
      </Text>
    </ItemRow>
  );

  return (
    <UpgradeSectionContainer>
      {item.upgradableItems && (
        <SectionList
          stickySectionHeadersEnabled
          //@ts-ignore
          sections={item.upgradableItems}
          renderItem={upgradeItemRow}
          keyExtractor={(item) => item.title}
          renderSectionHeader={sectionHeader}
        />
      )}
    </UpgradeSectionContainer>
  );
};

export default UpgradeSection;
