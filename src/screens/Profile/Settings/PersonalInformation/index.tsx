import React from "react";
import {
  PersonalInformationContainer,
  RowContainer,
  InnerContainer,
  InfoContainer,
  PersonalInformationWrap,
} from "./styles";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import loginTranslations from "../../../../translations/login";
import TextField from "../../../../components/Menu/SearchField";
import { Text } from "../../../../components/Menu/SingleItemCard/styles";
import Title from "../../../../components/Shared/Text";
import { scale } from "../../../../theme/textScaling";
import { useNavigation } from "@react-navigation/native";

interface PersonalInformationProps {
  onClick?: () => void;
}

const PersonalInformation: React.FunctionComponent<PersonalInformationProps> = (
  onClick
) => {
  const navigation = useNavigation();
  const navigate = () => {
    navigation.navigate("ChangeEmail");
  };
  const navigate2 = () => {
    navigation.navigate("ChangeName");
  };
  return (
    <PersonalInformationContainer>
      <PersonalInformationWrap>
        <RowContainer>
          <InfoContainer>
            <Title fontSize={14} color="#000">
              Email address
            </Title>
          </InfoContainer>
          <InnerContainer onPress={navigate}>
            <Title fontSize={16} color="#000">
              hkdj@hotmail.it
            </Title>
          </InnerContainer>
        </RowContainer>
        <RowContainer>
          <InfoContainer>
            <Title fontSize={scale(14)} color="#000">
              Name
            </Title>
          </InfoContainer>
          <InnerContainer onPress={navigate2}>
            <Title fontSize={scale(14)} color="#000">
              Alessandro Carpanzano
            </Title>
          </InnerContainer>
        </RowContainer>
      </PersonalInformationWrap>
    </PersonalInformationContainer>
  );
};

export default PersonalInformation;
