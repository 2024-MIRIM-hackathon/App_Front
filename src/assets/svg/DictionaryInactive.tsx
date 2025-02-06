import React from 'react';
import Svg, { Rect, Path, Mask, SvgProps } from 'react-native-svg';

const DictionaryInactive: React.FC<SvgProps> = (props) => (
    <Svg width="21" height="22" viewBox="0 0 21 22" fill="none" {...props}>
        <Rect width="21" height="22" fill="white" />
        <Rect x="2.4502" y="0.75" width="16.1" height="20.5" rx="0.859616" stroke="black" stroke-width="1.5" />
        <Path d="M12.2603 0H15.7803V8.38481C15.7803 8.55291 15.5863 8.64689 15.4544 8.54273L14.2696 7.60738C14.1234 7.49196 13.9171 7.49196 13.7709 7.60738L12.5861 8.54273C12.4542 8.64689 12.2603 8.55291 12.2603 8.38481V0Z" fill="#5B5B5B" />
    </Svg>
);
export default DictionaryInactive;

