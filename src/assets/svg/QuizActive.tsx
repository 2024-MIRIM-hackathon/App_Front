import React from 'react';
import Svg, { Rect, Path, Mask, SvgProps, Circle } from 'react-native-svg';

const MypageInactive: React.FC<SvgProps> = (props) => (
  <Svg width="21" height="22" viewBox="0 0 21 22" fill="none" {...props}>
    <Rect width="21" height="22" fill="white" />
    <Circle cx="10.5" cy="11.5" r="9.75" fill="#FFE400" stroke="black" stroke-width="1.5" />
    <Rect x="12.2901" y="13.6609" width="0.75" height="10.17" rx="0.375" transform="rotate(-46.6605 12.2901 13.6609)" fill="black" stroke="black" stroke-width="0.75" />
  </Svg>
);
export default MypageInactive;
