import React from 'react';
import Svg, { Rect, Path, Mask, SvgProps, Circle } from 'react-native-svg';

const QuizInactive: React.FC<SvgProps> = (props) => (
  <Svg width="21" height="22" viewBox="0 0 21 22" fill="none" {...props}>
    <Rect width="21" height="22" fill="white" />
    <Circle cx="10.5" cy="11.5" r="9.75" stroke="#5B5B5B" stroke-width="1.5" />
    <Rect x="12.2053" y="13.6634" width="0.63" height="10.29" rx="0.315" transform="rotate(-46.6605 12.2053 13.6634)" fill="#5B5B5B" stroke="#5B5B5B" stroke-width="0.63" />
  </Svg>
);
export default QuizInactive;
