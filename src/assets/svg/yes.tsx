import React from 'react';
import Svg, {Rect, Path, Mask, SvgProps, Circle} from 'react-native-svg';

const no: React.FC<SvgProps> = props => (
  <Svg width="18" height="18" viewBox="0 0 18 18" fill="none" {...props}>
    <Rect width="18" height="18" rx="1" fill="#FFE400" />
    <Path
      d="M6 9L9.11111 12L13 6"
      stroke="black"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);
export default no;
