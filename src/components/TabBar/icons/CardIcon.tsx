import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import { useSpring, animated } from 'react-spring';
import { TouchableOpacity } from 'react-native';

interface Props extends React.SVGProps<SVGSVGElement> {
  active?: boolean;
  onPress?: any;
}

const AnimSVG = animated(Svg);
const AnimCircle = animated(Circle);
const AnimPath = animated(Path);

const CardIcon: React.FC<Props> = ({ active, ...p }) => {
  const { primary } = useSpring({ primary: active ? '#A1EC1D' : '#E5E5E5' });
  const { secondary } = useSpring({
    secondary: active ? '#00094D' : '#333333',
  });
  // React.useEffect(() => {
  //   console.log(onPress);
  //   if (onPress) {
  //     onPress();
  //   }
  // }, [onPress]);
  // const {
  //   colors: { primary, secondary },
  // } = useSpring({
  //   colors: active
  //     ? { primary: '#A1EC1D', secondary: '#00094D' }
  //     : { primary: '#E5E5E5', secondary: '#333333' },
  // });
  return (
    <AnimSVG width={64} height={64} viewBox="0 0 64 64" fill="none" {...p}>
      <AnimCircle cx={32} cy={32} r={32} fill={secondary} />
      <AnimPath
        fillRule="evenodd"
        clipRule="evenodd"
        d="M45.449 18H18.552C14.92 18 11.98 20.94 12 24.552v14.622a6.548 6.548 0 006.552 6.552h26.897A6.548 6.548 0 0052 39.174V24.552A6.548 6.548 0 0045.449 18zm-4.302 24.331h7.459v-6.59l-7.46 6.59z"
        fill={primary}
      />
    </AnimSVG>
  );
};

export default CardIcon;
