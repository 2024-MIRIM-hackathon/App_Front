/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import Navigation from "./src/Navigation";
import {name as appName} from './app.json';

import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => Navigation);
// AppRegistry.registerComponent(appName, () => App);
