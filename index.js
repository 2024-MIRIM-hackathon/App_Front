/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import Navigation from "./src/Navigation";
import {name as appName} from './app.json';

import 'react-native-gesture-handler';

import axios from 'axios';
axios.defaults.withCredentials = true;

AppRegistry.registerComponent(appName, () => Navigation);
// AppRegistry.registerComponent(appName, () => App);
