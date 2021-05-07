import React, { useEffect, useState } from 'react';
import { SectionList } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from 'styled-components';

import Text from '../../../shared/Text';

import {
  MenuItem,
  UpgradeItem,
  DataItem,
  SelectionExtra,
  SelectionExtras,
  SelectionCheckbox,
} from '../../../../types/MenuItem';

import ExplanationModal from '../../../shared/ExplanationModal';

import {
  HeaderRow,
  ItemRow,
  CheckBoxItemSection,
  TitleItem,
  UpgradeSectionContainer,
  PriceItem,
  ItemInfo,
  UpgradableItems,
} from './styles';
import { findError } from '../../../../utils/findErrorFromSelectionExtras';
import { t } from '../../../../translations';

interface UpgradeSectionProps {
  item: MenuItem;
  updateExtras: (extras: SelectionExtras) => void;
}

const UpgradeSection: React.FunctionComponent<UpgradeSectionProps> = ({ item, updateExtras }) => {
  const theme = useTheme();
  const [selectionExtras, setSelectedExtras] = useState<SelectionExtras>({});

  const [modalData, setModalData] = useState({
    show: false,
    title: '',
    description: '',
  });

  const showDescriptionModal = ({ description, title }: { title: string; description: string }) => () => {
    setModalData({ show: true, title, description });
  };

  const closeModal = () => {
    setModalData({
      show: false,
      title: '',
      description: '',
    });
  };

  // Use effect to init the selection information
  useEffect(() => {
    const addNewSelection = (sections: UpgradeItem[]) => {
      let currentSelectionsValue = 0;
      const selectionStructure: SelectionExtras = {};

      sections.forEach((section) => {
        const selectionCheckbox: SelectionCheckbox = {};

        section.data.forEach((sectionItem) => {
          currentSelectionsValue += sectionItem.selected ? 1 : 0;
          selectionCheckbox[sectionItem.id] = sectionItem;
        });

        selectionStructure[section.id] = { ...section, selectionCheckbox, currentSelectionsValue };
      });

      setSelectedExtras(selectionStructure);
    };

    item.upgradableItems && addNewSelection(item.upgradableItems);
  }, [item.upgradableItems, item.id]);

  useEffect(() => {
    updateExtras(selectionExtras);
  }, [updateExtras, selectionExtras]);

  const updateItemSelection = (type: 'single' | 'multiple', sectionId: string, itemId: string) => (value: boolean) => {
    if (type === 'single') {
      const sectionSelection = selectionExtras[sectionId];
      const sectionRow = sectionSelection.selectionCheckbox[itemId];

      if (sectionRow.selected && sectionSelection.minSelection === 1) {
        // Return here beacuse one item needs to be selected

        return '';
      }

      setSelectedExtras((oldSelection) => {
        const invertedValues: SelectionExtra = JSON.parse(JSON.stringify(oldSelection[sectionId])); // Clone object
        Object.keys(invertedValues.selectionCheckbox).forEach((key) => {
          // Put everything to false or put value if the itemId is same as key
          invertedValues.selectionCheckbox[key] = {
            ...invertedValues.selectionCheckbox[key],
            selected: key === itemId ? value : false,
          };
        });

        const newCurrentSelectionsValue = Object.values(invertedValues.selectionCheckbox).reduce(
          (acc, v) => acc + (v.selected ? 1 : 0),
          0,
        );

        return {
          ...oldSelection,
          [sectionId]: {
            ...invertedValues,
            currentSelectionsValue: newCurrentSelectionsValue,
          },
        };
      });
    }

    if (type === 'multiple') {
      const sectionSelection = selectionExtras[sectionId];
      const selectionsAfterChange = sectionSelection.currentSelectionsValue + (value ? 1 : -1);

      if (sectionSelection.maxSelection) {
        if (selectionsAfterChange > sectionSelection.maxSelection) {
          // Return here beacuse one item needs to be selected

          return '';
        }
      }

      setSelectedExtras((oldSelection) => {
        const invertedValues: SelectionExtra = JSON.parse(JSON.stringify(oldSelection[sectionId])); // Clone object

        invertedValues.selectionCheckbox[itemId] = {
          ...invertedValues.selectionCheckbox[itemId],
          selected: value,
        };

        const newCurrentSelectionsValue = Object.values(invertedValues.selectionCheckbox).reduce(
          (acc, v) => acc + (v.selected ? 1 : 0),
          0,
        );

        return {
          ...oldSelection,
          [sectionId]: {
            ...invertedValues,
            currentSelectionsValue: newCurrentSelectionsValue,
          },
        };
      });
    }
  };

  console.log(selectionExtras);

  const isError = findError(selectionExtras);

  const upgradeItemRow = ({ item, section }: { item: DataItem; index: number; section: UpgradeItem }) => {
    const selectionType = section.selection === 'single' ? 'circle' : 'square';

    const selectionValue =
      (selectionExtras &&
        selectionExtras[section.id] &&
        selectionExtras[section.id].selectionCheckbox[item.id] &&
        selectionExtras[section.id].selectionCheckbox[item.id].selected) ||
      false;

    return (
      <ItemRow onPress={() => updateItemSelection(section.selection, section.id, item.id)(!selectionValue)}>
        <TitleItem>
          <Text bold color="quartiary" fontSize={12}>
            {item.title}
          </Text>
        </TitleItem>

        <PriceItem>
          {item.price > 0 && (
            <Text bold color="quartiary" fontSize={12}>
              + {t('currencyTranslations.currencyField')}
              {item.price}
            </Text>
          )}
        </PriceItem>

        {!!item.explanation && (
          <ItemInfo
            onPress={showDescriptionModal({
              title: item.title,
              description: item.explanation,
            })}
          >
            <Icon color={theme.colors.fixedBlack} name="ios-information-circle-outline" size={24} />
          </ItemInfo>
        )}
        <CheckBoxItemSection fixSpacing={!!item.explanation}>
          <CheckBox
            animationDuration={0.2}
            boxType={selectionType}
            disabled
            onCheckColor={theme.colors.active}
            onTintColor={theme.colors.active}
            style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
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

  const sectionHeader = ({ section }: { section: UpgradeItem }) => {
    return (
      <HeaderRow>
        <Text bold color="primary" fontSize={16}>
          {section.title}
        </Text>
        {section.maxSelection && (
          <Text color={!isError ? 'quartiary' : 'errorColor'} fontSize={10}>
            {t('menuTranslations.singleItemPage.sectionMinMax.min') +
              section.minSelection +
              t('menuTranslations.singleItemPage.sectionMinMax.max') +
              section.maxSelection}
          </Text>
        )}
      </HeaderRow>
    );
  };

  return (
    <UpgradeSectionContainer>
      <ExplanationModal
        description={modalData.description}
        isVisible={modalData.show}
        onClose={closeModal}
        title={modalData.title}
      />
      {item.upgradableItems && (
        <UpgradableItems>
          <SectionList
            extraData={selectionExtras}
            keyExtractor={(item) => item.title}
            renderItem={upgradeItemRow}
            renderSectionHeader={sectionHeader}
            sections={item.upgradableItems}
            stickySectionHeadersEnabled
          />
        </UpgradableItems>
      )}
    </UpgradeSectionContainer>
  );
};

export default UpgradeSection;
