import React, { useCallback, useRef, useState } from 'react';
import Modal from 'react-native-modal';

import Swiper from 'react-native-swiper';

import filterTransaltions from '../../../translations/filter';
import Text from '../../shared/Text';

import FilterModalTabs from './FilterModalTabs';
import FilterModalSwiper from './FilterModalSwiper';

import {
  FilterModalContainer,
  FilterPopUpContainer,
  TitleWrapper,
  DivLine,
  FilterModalBottomBar,
  BottomButtonContainer,
  BottomButtonWrapperLeft,
  BottomButtonWrapperRight,
  FilterModalBottomBarWrapper,
  AllergyInfoWrapper,
  FilterModalTbasContainer,
} from './styles';

const FILTERS_DATA: any = {
  Spirits: [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Rum',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Tequila',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Gin',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Vodka',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Gin',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Rum',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: "Liquore all'arancia",
    },
  ],

  Flavours: [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Rum',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Tequila',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Gin',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Vodka',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Gin',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Rum',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: "Liquore all'arancia",
    },
  ],

  Size: [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Ruuuuuuuuum',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Tequila',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Gin',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Vodka',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Gin',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Rum',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: "Liquore all'arancia",
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Rum',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Gin',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Rum',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: "Liquore all'arancia",
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Rum',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Rum',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Gin',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Rum',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: "Liquore all'arancia",
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Rum',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Rum',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Gin',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Rum',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: "Liquore all'arancia",
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Rum',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Rum',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Gin',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Rum',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: "Liquore all'arancia",
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Rum',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Rum',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Gin',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Rum',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: "Liquore all'arancia",
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Rummmmmmm',
    },
  ],
};

interface FilterModalProps {
  isModalVisible: boolean;
  onClose: () => void;
  onClick: () => void;
}

const FilterModal: React.FunctionComponent<FilterModalProps> = ({ isModalVisible, onClick, onClose }) => {
  const ref = useRef<Swiper | null>(null);
  const [filterIndex, setFilterIndex] = useState(0);

  const onSwipe = (index: number) => {
    if (ref.current && index !== filterIndex) {
      ref.current.scrollBy(index - filterIndex, true);
    }

    setFilterIndex(index);
  };

  const filterTabsContent = useCallback(
    () => Object.keys(FILTERS_DATA).map((item) => <FilterModalSwiper filterItems={FILTERS_DATA[item]} key={item} />),
    []
  );

  return (
    <Modal
      animationInTiming={500}
      animationOutTiming={450}
      avoidKeyboard
      isVisible={isModalVisible}
      onBackdropPress={onClose}
      style={{
        margin: 0,
      }}
    >
      <FilterModalContainer>
        <FilterPopUpContainer>
          <TitleWrapper>
            <Text bold color="primary" fontSize={18}>
              {filterTransaltions.titleField.placeholder}
            </Text>
          </TitleWrapper>
          <FilterModalTbasContainer>
            <FilterModalTabs filterTabs={Object.keys(FILTERS_DATA)} onChange={onSwipe} tabActive={filterIndex} />
          </FilterModalTbasContainer>
          <DivLine />
          <Swiper loop={false} onIndexChanged={onSwipe} ref={ref} showsPagination={false}>
            {filterTabsContent()}
          </Swiper>
          <AllergyInfoWrapper>
            <Text color="primary" fontSize={18}>
              {filterTransaltions.allergyField.placeholder}
            </Text>
          </AllergyInfoWrapper>
          <FilterModalBottomBar>
            <DivLine />
            <FilterModalBottomBarWrapper>
              <BottomButtonContainer>
                <BottomButtonWrapperLeft>
                  <Text bold color="secondary" fontSize={18}>
                    {filterTransaltions.clearAllField.placeholder}
                  </Text>
                </BottomButtonWrapperLeft>
              </BottomButtonContainer>
              <BottomButtonContainer onPress={onClick}>
                <BottomButtonWrapperRight>
                  <Text bold color="secondary" fontSize={18}>
                    {filterTransaltions.doneField.placeholder}
                  </Text>
                </BottomButtonWrapperRight>
              </BottomButtonContainer>
            </FilterModalBottomBarWrapper>
          </FilterModalBottomBar>
        </FilterPopUpContainer>
      </FilterModalContainer>
    </Modal>
  );
};

export default FilterModal;
