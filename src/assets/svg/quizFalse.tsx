import React from 'react';
import Svg, { Rect, Path, Mask, SvgProps, Circle } from 'react-native-svg';

const quizFalse: React.FC<SvgProps> = (props) => (
  <Svg width="36" height="52" viewBox="0 0 36 52" fill="none" {...props}>
      <Path d="M0.480477 2.25C0.480477 1.27272 1.27272 0.480477 2.25 0.480477H33.75C34.7273 0.480477 35.5195 1.27272 35.5195 2.25V49.75C35.5195 50.7273 34.7273 51.5195 33.75 51.5195H2.25C1.27272 51.5195 0.480477 50.7273 0.480477 49.75V2.25Z" fill="white" stroke="#424242" stroke-width="0.960954" />
      <Path d="M5.3999 7.62061H30.5999" stroke="#E0E0E0" stroke-linecap="round" />
      <Path d="M5.3999 12.5518H30.5999" stroke="#E0E0E0" stroke-linecap="round" />
      <Path d="M5.3999 17.4827H30.5999" stroke="#E0E0E0" stroke-linecap="round" />
      <Path d="M5.3999 22.4138H30.5999" stroke="#E0E0E0" stroke-linecap="round" />
      <Path d="M5.3999 27.3448H30.5999" stroke="#E0E0E0" stroke-linecap="round" />
      <Path d="M5.3999 32.2758H30.5999" stroke="#E0E0E0" stroke-linecap="round" />
      <Path d="M5.3999 37.2068H30.5999" stroke="#E0E0E0" stroke-linecap="round" />
      <Path d="M5.3999 42.1379H30.5999" stroke="#E0E0E0" stroke-linecap="round" />
      <Path d="M5.3999 47.069H30.5999" stroke="#E0E0E0" stroke-linecap="round" />
      <Path d="M24.2891 19.1669L11.0002 32.4558" stroke="#FFE400" stroke-width="2" stroke-linecap="round" />
      <Path d="M11 19L24.2889 32.2889" stroke="#FFE400" stroke-width="2" stroke-linecap="round" />
    </Svg>
);
export default quizFalse;