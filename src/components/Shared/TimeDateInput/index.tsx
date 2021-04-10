// import React from 'react';

// interface TimeDateInputProps {}

// const TimeDateInput: React.FunctionComponent<TimeDateInputProps> = () => {
//   return (
//     <PickerContainer>
//       <Picker
//         icon={<Icon color={theme.colors.fixedBlack} name="ios-time-outline" size={28} />}
//         onPress={showTimepicker}
//         textValue={
//           date.getHours() > 11
//             ? `${minutes[date.getHours()]}:${date.getMinutes()} PM`
//             : `${minutes[date.getHours()]}:${date.getMinutes()} AM`
//         }
//         title="Delivery Time"
//       />
//         {
//     show && (
//       <DateTimePicker
//         display="spinner"
//         minimumDate={new Date()}
//         minuteInterval={15}
//         mode={mode}
//         onChange={onChange}
//         style={{ flex: 1 }}
//         testID="dateTimePicker"
//         value={date}
//       />
//     );
//   }
//     </PickerContainer>
//   );

// };

// export default TimeDateInput;

import React from 'react';

import Text from '../Text';

import { PickerContainer, IconContainer, TextContainer, Container, PickerTextContainer } from './styles';

interface PickerProps {
  title?: string;
  icon: React.ReactElement;
  textValue?: string;
  onPress?: () => void;
}

const Picker: React.FunctionComponent<PickerProps> = ({ icon, onPress, textValue, title }) => {
  return (
    <Container>
      <TextContainer>
        <Text color="primary" fontSize={15}>
          {title}
        </Text>
      </TextContainer>
      <PickerContainer onPress={onPress}>
        <IconContainer>{icon}</IconContainer>
        <PickerTextContainer>
          <Text color="fixedBlack" fontSize={15}>
            {textValue}
          </Text>
        </PickerTextContainer>
      </PickerContainer>
    </Container>
  );
};

export default Picker;
