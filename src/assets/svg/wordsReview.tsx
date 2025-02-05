import React from 'react';
import Svg, {Rect, Path, Mask, SvgProps} from 'react-native-svg';

const wordsReview: React.FC<SvgProps> = props => (
  <Svg width="18" height="61" viewBox="0 0 18 61" fill="none" {...props}>
    <Rect x="1" y="1" width="16" height="46.3862" fill="#FFE400" />
    <Path
      d="M8.99923 56.3378C8.03923 56.3378 7.39922 56.7631 7.19922 57.1515L8.99923 59.9998C9.39922 59.3895 10.1992 58.0208 10.7992 57.1515C10.5992 56.8186 10.1992 56.3378 8.99923 56.3378Z"
      fill="#FFE400"
      stroke="#424242"
      stroke-width="0.983258"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M17 47.4127L9 60L1 47.4127V1.63436C1 1.28401 1.28401 1 1.63436 1H16.3656C16.716 1 17 1.28401 17 1.63436V47.4127Z"
      stroke="#424242"
      stroke-width="0.983258"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M1 47.3859H17"
      stroke="#424242"
      stroke-width="0.983258"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M6.19922 1L6.19922 47.3862M11.5992 1L11.5992 47.3862"
      stroke="#424242"
      stroke-width="0.983258"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);
export default wordsReview;
