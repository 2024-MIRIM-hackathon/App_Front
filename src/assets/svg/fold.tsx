import React from 'react';
import Svg, { Rect, Path, Mask, SvgProps, Circle } from 'react-native-svg';

const fold: React.FC<SvgProps> = (props) => (
  <Svg width="12" height="10" viewBox="0 0 12 10" fill="none" {...props}>
    <Path d="M5.18484 1.14716C5.58349 0.586149 6.41651 0.586149 6.81516 1.14716L11.806 8.17076C12.2765 8.83287 11.8031 9.75 10.9909 9.75L1.00914 9.75C0.196887 9.75 -0.276506 8.83287 0.19398 8.17076L5.18484 1.14716Z" fill="#424242" />
  </Svg>
);
export default fold;


