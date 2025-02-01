import React from 'react';
import Svg, { Rect, Path, Mask, SvgProps, Circle } from 'react-native-svg';

const spread: React.FC<SvgProps> = (props) => (
  <Svg width="13" height="10" viewBox="0 0 13 10" fill="none" {...props}>
    <Path d="M7.31516 8.85284C6.91651 9.41385 6.08349 9.41385 5.68484 8.85284L0.693979 1.82924C0.223492 1.16713 0.696887 0.25 1.50914 0.25L11.4909 0.250001C12.3031 0.250001 12.7765 1.16713 12.306 1.82924L7.31516 8.85284Z" fill="#424242" />
  </Svg>
);
export default spread;

