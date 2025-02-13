import React from 'react';
import Svg, {Rect, Path, Mask, SvgProps} from 'react-native-svg';

const Left: React.FC<SvgProps> = props => (
  <Svg width="9" height="16" viewBox="0 0 9 16" fill="none" {...props}>
    <Path d="M8 1L1 8L8 15" stroke="black" />
  </Svg>
);
export default Left;
