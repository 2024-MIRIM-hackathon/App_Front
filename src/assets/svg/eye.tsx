import React from 'react';
import Svg, { Rect, Path, Mask, SvgProps, Ellipse } from 'react-native-svg';

const DictionaryInactive: React.FC<SvgProps> = (props) => (
    <Svg width="16" height="10" viewBox="0 0 16 10" fill="none" {...props}>
        <Path fill-rule="evenodd" clip-rule="evenodd" d="M0 4.99976C0 4.99976 2.26133 0 7.89333 0C13.5253 0 16 4.99976 16 4.99976H0ZM0 5.00026C0 5.00026 2.26133 10 7.89333 10C13.5253 10 16 5.00026 16 5.00026H0Z" fill="#ACACAC"/>
        <Ellipse cx="8.14735" cy="4.90222" rx="2.14161" ry="2.10095" fill="#F8F8F8"/>
    </Svg>
);
export default DictionaryInactive;