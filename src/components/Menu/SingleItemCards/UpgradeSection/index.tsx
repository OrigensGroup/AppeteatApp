import React, { useEffect, useState } from 'react';
import { SectionList } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useTheme } from 'styled-components';

import Text from '../../../shared/Text';

import { MenuItem, UpgradeItem, DataItem } from '../../../../types/MenuItem';

import currencyTranslations from '../../../../translations/currency';

import { HeaderRow, ItemRow, CheckBoxItemSection, TitleItem, UpgradeSectionContainer, PriceItem } from './styles';

type SelectionExtras = {
  [key: string]: {
    [key: string]: DataItem;
  };
};

interface UpgradeSectionProps {
  item: MenuItem;
  updateExtras: (extras: DataItem[]) => void;
}

const UpgradeSection: React.FunctionComponent<UpgradeSectionProps> = ({ item, updateExtras }) => {
  const theme = useTheme();
  const [selectionExtras, setSelectedExtras] = useState<SelectionExtras>({});

  const addNewSelection = (sections: UpgradeItem[]) => {
    const selectionStructure: any = {};

    sections.forEach((section) => {
      const selectionCheckbox: any = {};

      section.data.forEach((item) => {
        selectionCheckbox[item.id] = item;
      });

      selectionStructure[section.id] = selectionCheckbox;
    });

    setSelectedExtras(selectionStructure);
  };

  useEffect(() => {
    item.upgradableItems && addNewSelection(item.upgradableItems);
  }, [item.upgradableItems]);

  useEffect(() => {
    let allTruthyCustomisation: DataItem[] = [];

    Object.values(selectionExtras).forEach(
      (extras) => {
        (allTruthyCustomisation = [...allTruthyCustomisation, ...Object.values(extras).filter((v) => v.selected)])
      }
    );

    updateExtras(allTruthyCustomisation);
  }, [selectionExtras, updateExtras]);

  const updateItemSelection = (type: 'single' | 'multiple', sectionId: string, itemId: string) => (value: boolean) => {
    if (type === 'single') {
      setSelectedExtras((oldSelection) => {
        const invertedValues = JSON.parse(JSON.stringify(oldSelection[sectionId]));

        Object.keys(invertedValues).forEach((key) => {
          invertedValues[key] = {
            ...invertedValues[key],
            selected: false,
          };
        });

        return {
          ...oldSelection,
          [sectionId]: {
            ...invertedValues,
            [itemId]: {
              ...oldSelection[sectionId][itemId],
              selected: value,
            },
          },
        };
      });
    } else {
      setSelectedExtras((oldSelection) => ({
        ...oldSelection,
        [sectionId]: {
          ...oldSelection[sectionId],
          [itemId]: {
            ...oldSelection[sectionId][itemId],
            selected: value,
          },
        },
      }));
    }
  };

  const upgradeItemRow = ({ item, section }: { item: DataItem; index: number; section: UpgradeItem }) => {
    const selectionType = section.selection === 'single' ? 'circle' : 'square';

    const selectionValue =
      (selectionExtras && selectionExtras[section.id] && selectionExtras[section.id][item.id].selected) || false;

    return (
      <ItemRow>
        <TitleItem>
          <Text bold color="primary" fontSize={16}>
            {item.title}
          </Text>
        </TitleItem>
        {item.price > 0 && (
          <PriceItem>
            <Text bold color="primary" fontSize={14}>
              ( + {currencyTranslations.currencyField.placeholder}
              {item.price})
            </Text>
          </PriceItem>
        )}

        <CheckBoxItemSection>
          <CheckBox
            animationDuration={0.2}
            boxType={selectionType}
            onCheckColor={theme.colors.active}
            onTintColor={theme.colors.active}
            onValueChange={updateItemSelection(section.selection, section.id, item.id)}
            tintColors={{
              false: theme.colors.active,
              true: theme.colors.active,
            }}
            value={selectionValue}
          />
        </CheckBoxItemSection>
      </ItemRow>
    );
  };

  const sectionHeader = ({ section: { title } }: { section: { title: string } }) => {
    return (
      <HeaderRow>
        <Text bold color="primary" fontSize={20}>
          {title}
        </Text>
      </HeaderRow>
    );
  };

  return (
    <UpgradeSectionContainer>
      {item.upgradableItems && (
        <SectionList
          extraData={selectionExtras}
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
