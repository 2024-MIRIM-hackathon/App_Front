import React from 'react';
import Svg, { Rect, Path, Mask, SvgProps, Circle } from 'react-native-svg';

const MyPageInactive: React.FC<SvgProps> = (props) => (
  <Svg width="21" height="22" viewBox="0 0 21 22" fill="none" {...props}>
    <Path d="M0 0H21V22H0V0Z" fill="white" />
    <Circle cx="10.5001" cy="6.10247" r="4.0191" stroke="#5B5B5B" stroke-width="1.5" />
    <Path d="M19.2407 21.0792C19.2448 21.1185 19.2337 21.1525 19.2022 21.1851C19.1675 21.221 19.1101 21.25 19.0383 21.25H10.5001H1.96191C1.89008 21.25 1.83276 21.221 1.79801 21.1851C1.76647 21.1525 1.75542 21.1185 1.75952 21.0792C2.21932 16.6587 5.95766 13.2118 10.5001 13.2118C15.0426 13.2118 18.7809 16.6587 19.2407 21.0792Z" stroke="#5B5B5B" stroke-width="1.5" />
  </Svg>
);
export default MyPageInactive;
