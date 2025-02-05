import React from 'react';
import Svg, { Rect, Path, Mask, SvgProps } from 'react-native-svg';

const book: React.FC<SvgProps> = (props) => (
  <Svg width="59" height="46" viewBox="0 0 59 46" fill="none" {...props}>
    <Path d="M1 1.8302L3.09559 1.8302L29.5 11.5646L55.9044 1.8302L58 1.8302V38.2282C52.9706 37.805 39.9779 38.6514 29.5 44.9999C18.7706 38.5668 5.75 37.805 1 38.2282L1 1.8302Z" fill="#FFE400" stroke="#424242" stroke-width="0.811555" stroke-linejoin="round"/>
    <Path d="M3.51465 1C21.9558 1 26.147 6.81134 29.4999 10.9623C32.8529 6.81134 38.3014 1.00004 55.4852 1.00003V35.937C47.522 35.937 42.0735 35.5912 29.4999 42.5094C16.9264 35.5912 10.7794 35.937 3.51465 35.937L3.51465 1Z" fill="white" stroke="#616161" stroke-width="0.811555" stroke-linejoin="round"/>
    <Path d="M29.5 13.4528V38.7735" stroke="#E0E0E0" stroke-width="0.811555" stroke-linecap="round"/>
  </Svg>

);
export default book;
