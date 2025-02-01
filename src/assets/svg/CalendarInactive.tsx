import React from 'react';
import Svg, { Rect, Path, Mask, SvgProps } from 'react-native-svg';

const CalendarInactive: React.FC<SvgProps> = (props) => (
    <Svg width="21" height="22" viewBox="0 0 21 22" fill="none" {...props}>
        <Rect width="21" height="22" fill="white" />
        <Rect x="1.34499" y="5.15267" width="18.31" height="16.0023" rx="1.42187" stroke="#5B5B5B" stroke-width="1.68999" />
        <Rect x="1.26929" y="5.0769" width="18.4615" height="4.61538" fill="#5B5B5B" />
        <Rect x="5.11548" y="2" width="1.66667" height="3.88889" rx="0.833334" fill="#5B5B5B" />
        <Rect x="9.85889" y="2" width="1.66667" height="3.88889" rx="0.833334" fill="#5B5B5B" />
        <Rect x="14.6025" y="2" width="1.66667" height="3.88889" rx="0.833334" fill="#5B5B5B" />
    </Svg>
);
export default CalendarInactive;
