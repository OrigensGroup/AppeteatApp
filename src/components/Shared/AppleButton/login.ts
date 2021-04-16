import { Platform } from 'react-native';
import appleAuth, { appleAuthAndroid } from '@invertase/react-native-apple-authentication';

import auth from '@react-native-firebase/auth';

const getRandomString = (length: number) => {
  const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < length; i++) {
    result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }

  return result;
};

const iosAppleLogin = async () => {
  const appleAuthRequestResponse = await appleAuth.performRequest({
    requestedOperation: appleAuth.Operation.LOGIN,
    requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
  });

  if (!appleAuthRequestResponse.identityToken) {
    throw 'Apple Sign-In failed - no identify token returned';
  }

  const { identityToken, nonce } = appleAuthRequestResponse;
  return auth.AppleAuthProvider.credential(identityToken, nonce);
};

const androidAppleLogin = async () => {
  // Generate secure, random values for state and nonce
  const rawNonce = getRandomString(20);
  const state = getRandomString(20);

  // Configure the request
  appleAuthAndroid.configure({
    clientId: 'uk.co.appeteat.elisir',
    redirectUri: 'https://elisir-37b24.firebaseapp.com/__/auth/handler',
    responseType: appleAuthAndroid.ResponseType.ALL,
    scope: appleAuthAndroid.Scope.ALL,
    nonce: rawNonce,
    state,
  });

  const response = await appleAuthAndroid.signIn();

  if (response.state === state) {
    return auth.AppleAuthProvider.credential(
      // @ts-ignore
      response.id_token,
      rawNonce, // Passing the rawNonce here do the trick.
    );
  }
};

export const appleLogin = async () => {
  return Platform.select({
    ios: iosAppleLogin(),
    android: androidAppleLogin(),
  });
};
