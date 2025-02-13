import React from 'react';
import Svg, { Rect, Path, Mask, SvgProps, Circle } from 'react-native-svg';

const TodayQuiz: React.FC<SvgProps> = (props) => (
    <Svg width="36" height="52" viewBox="0 0 36 52" fill="none" {...props}>
    <Path d="M0.480477 2.25C0.480477 1.27272 1.27272 0.480477 2.25 0.480477H33.75C34.7273 0.480477 35.5195 1.27272 35.5195 2.25V49.75C35.5195 50.7273 34.7273 51.5195 33.75 51.5195H2.25C1.27272 51.5195 0.480477 50.7273 0.480477 49.75V2.25Z" fill="white" stroke="#424242" stroke-width="0.960954"/>
    <Path d="M5.3999 36H30.5999" stroke="#E0E0E0" stroke-linecap="round"/>
    <Path d="M5.3999 40.9312H30.5999" stroke="#E0E0E0" stroke-linecap="round"/>
    <Path d="M5.3999 45.8621H30.5999" stroke="#E0E0E0" stroke-linecap="round"/>
    <Path d="M23.6205 18.7801C23.6205 21.9088 21.1012 24.4401 17.9998 24.4401C14.8985 24.4401 12.3792 21.9088 12.3792 18.7801C12.3792 15.6513 14.8985 13.12 17.9998 13.12C21.1012 13.12 23.6205 15.6513 23.6205 18.7801Z" fill="#FFE400" stroke="#424242" stroke-width="0.916666"/>
    <Rect x="0.306963" y="-0.00889821" width="0.435702" height="5.90575" rx="0.217851" transform="matrix(0.68397 -0.72951 0.72508 0.688665 18.833 20.2693)" fill="#424242" stroke="#424242" stroke-width="0.435702"/>
    <Path d="M18.2896 8L18.2896 11.4962" stroke="#424242" stroke-width="0.916666" stroke-linecap="round"/>
    <Path d="M18.2896 26.0637L18.2896 29.5599" stroke="#424242" stroke-width="0.916666" stroke-linecap="round"/>
    <Path d="M9.89502 10.9136L12.7898 13.5358" stroke="#424242" stroke-width="0.916666" stroke-linecap="round"/>
    <Path d="M10.1841 26.9378L13.0788 24.3156" stroke="#424242" stroke-width="0.916666" stroke-linecap="round"/>
    <Path d="M26.395 11.2048L23.5003 13.8269" stroke="#424242" stroke-width="0.916666" stroke-linecap="round"/>
    <Path d="M10.7632 19.0714L7.00003 19.0714" stroke="#424242" stroke-width="0.916666" stroke-linecap="round"/>
    <Path d="M29 19.0714L25.2368 19.0714" stroke="#424242" stroke-width="0.916666" stroke-linecap="round"/>
    </Svg>
);
export default TodayQuiz;