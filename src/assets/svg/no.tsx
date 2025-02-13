import React from 'react';
import Svg, { Rect, Path, Mask, SvgProps, Circle } from 'react-native-svg';

const no: React.FC<SvgProps> = (props) => (
    <Svg width="18" height="18" viewBox="0 0 18 18" fill="none" {...props}>
        <Rect width="18" height="18" rx="1" fill="#F8F8F8"/>
    </Svg>
);
export default no;
