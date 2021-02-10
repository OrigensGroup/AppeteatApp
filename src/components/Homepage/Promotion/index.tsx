import React, { useState } from "react";
import { Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import CountDown from "react-native-countdown-component";
import {
  PromotionContainer,
  PromotionTitle,
  styles,
  PromotionDesc,
  TimerWrap,
} from "./styles";
import { TouchableHighlight } from "react-native-gesture-handler";

interface PromotionProps {}

const Promotion: React.FunctionComponent<PromotionProps> = ({}) => {
  const endDate = new Date("Wed Feb 10 2021 20:36:55 GMT+0000").getTime();
  const dateDifference = endDate - new Date().getTime();
  const secUntilDate = dateDifference / 1000;
  return (
    <PromotionContainer>
      <LinearGradient
        colors={["#DEB98E", "#FFB803"]}
        style={styles.linearGradient}
      >
        <PromotionTitle>Happy Hour</PromotionTitle>
        {/* <PromotionDesc>Pay 1, Get 2</PromotionDesc> */}
        <TimerWrap>
          <CountDown
            until={secUntilDate}
            onFinish={() => alert("finished")}
            onPress={() => alert("hello")}
            digitStyle={{ backgroundColor: "#FFF", width: 104, height: 72 }}
            digitTxtStyle={{ color: "#000000", fontSize: 40 }}
            timeLabelStyle={{ color: "#000000", fontSize: 15 }}
            timeToShow={["H", "M"]}
            size={20}
          />
        </TimerWrap>
      </LinearGradient>
    </PromotionContainer>
  );
};

export default Promotion;
