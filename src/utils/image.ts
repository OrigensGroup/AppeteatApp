import FastImage, { Source } from 'react-native-fast-image';

export const normalisedSource = (uri: string): Source => {
  const normalisedSource = !uri.split('http')[1] ? { uri: undefined } : { uri, priority: FastImage.priority.high };
  return normalisedSource;
};
