import React from 'react';
import Svg, {Rect, Path, Mask, SvgProps} from 'react-native-svg';

const bookRead: React.FC<SvgProps> = props => (
  <Svg width="63" height="49" viewBox="0 0 63 49" fill="none" {...props}>
    <Path
      d="M1 1.88715L3.24265 1.88715L31.5 12.2851L59.7574 1.88715L62 1.88715V40.7666C56.6176 40.3145 42.7132 41.2187 31.5 48C20.0176 41.1282 6.08333 40.3145 1 40.7666L1 1.88715Z"
      fill="#FFE400"
      stroke="#424242"
      stroke-width="0.866883"
      stroke-linejoin="round"
    />
    <Path
      d="M3.69141 1C23.4267 1 27.912 7.20752 31.5002 11.6414C35.0885 7.20752 40.9193 1.00004 59.3091 1.00003V38.3189C50.787 38.3189 44.9561 37.9494 31.5002 45.3393C18.0443 37.9494 11.4659 38.3188 3.69141 38.3188L3.69141 1Z"
      fill="white"
      stroke="#616161"
      stroke-width="0.866883"
      stroke-linejoin="round"
    />
    <Path
      d="M31.5 14.3022V41.3492"
      stroke="#E0E0E0"
      stroke-width="0.866883"
      stroke-linecap="round"
    />
  </Svg>
);
export default bookRead;
