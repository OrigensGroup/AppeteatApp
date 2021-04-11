import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import { Platform, Alert } from 'react-native';

// eslint-disable-next-line
import { EXPERIENCE } from '@env';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export const schedulePushNotification = async (request: Notifications.NotificationRequestInput) => {
  await Notifications.scheduleNotificationAsync(request);
};

export const registerForPushNotificationsAsync = async () => {
  let token = '';
  const experienceId = EXPERIENCE;

  if (Constants.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== 'granted') {
      Alert.alert('Failed to get push token for push notification!');
      return;
    }

    token = (
      await Notifications.getExpoPushTokenAsync({
        experienceId,
      })
    ).data;
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
};
