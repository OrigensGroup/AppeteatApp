import { AppRegistry } from 'react-native';
import 'react-native-gesture-handler';

import App from './src/AppClip';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
AppRegistry.registerComponent('main', () => App);
