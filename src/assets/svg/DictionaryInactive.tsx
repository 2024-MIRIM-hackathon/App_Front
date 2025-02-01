import React from 'react';
import Svg, { Rect, Path, Mask, SvgProps } from 'react-native-svg';

const DictionaryInactive: React.FC<SvgProps> = (props) => (
    <Svg width="21" height="22" viewBox="0 0 21 22" fill="none" {...props}>
        <Rect width="21" height="22" fill="white" />
        <Rect x="2.44995" y="0.75" width="16.1" height="20.5" rx="0.859616" stroke="#5B5B5B" stroke-width="1.5" />
        <Path d="M12.5098 0.25H15.5298V8.28411L14.424 7.41116C14.187 7.22403 13.8525 7.22403 13.6155 7.41116L12.5098 8.28411V0.25ZM15.6088 8.34651L15.6087 8.34643L15.6088 8.34651ZM12.4307 8.34651C12.4308 8.34649 12.4308 8.34647 12.4308 8.34645L12.4307 8.34651Z" fill="#5B5B5B" stroke="#5B5B5B" stroke-width="0.5" />
    </Svg>
);
export default DictionaryInactive;

