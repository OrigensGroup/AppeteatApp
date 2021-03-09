import React from 'react';
import { SectionList } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useTheme } from 'styled-components';

import Text from '../../../shared/Text';

import { MenuItem, UpgradeItem } from '../../../../types/MenuItem';

import currencyTranslations from '../../../../translations/currency';

import { ItemRow, TitleItem, UpgradeSectionContainer, PriceItem } from './styles';

interface UpgradeSectionProps {
  item: MenuItem;
  updateExtras: any;
}

const UpgradeSection: React.FunctionComponent<UpgradeSectionProps> = ({ item }) => {
  const theme = useTheme();
  //const [selectedItem, setSelectedItem] = useState(0);

  const upgradeItemRow = ({ item }: { item: UpgradeItem['data']; index: number; section: UpgradeItem }) => {
    return (
      <ItemRow>
        <TitleItem>
          <Text bold color="primary" fontSize={16}>
            {item.title}
          </Text>
        </TitleItem>
        {item.price > -1 && (
          <PriceItem>
            <Text bold color="primary" fontSize={14}>
              ( + {currencyTranslations.currencyField.placeholder}
              {item.price})
            </Text>
          </PriceItem>
        )}

        <CheckBox
          boxType="square"
          disabled={false}
          onCheckColor={theme.colors.active}
          onTintColor={theme.colors.active}
          tintColors={{
            false: theme.colors.active,
            true: theme.colors.active,
          }}
          value={item.selected}
        />
      </ItemRow>
    );
  };

  const sectionHeader = ({ section: { title } }: { section: { title: string } }) => (
    <ItemRow>
      <Text bold color="primary" fontSize={20}>
        {title}
      </Text>
    </ItemRow>
  );

  return (
    <UpgradeSectionContainer>
      {item.upgradableItems && (
        <SectionList
          keyExtractor={(item) => item.title}
          renderItem={upgradeItemRow}
          renderSectionHeader={sectionHeader}
          //@ts-ignore
          sections={item.upgradableItems}
          stickySectionHeadersEnabled
        />
      )}
    </UpgradeSectionContainer>
  );
};

export default UpgradeSection;
