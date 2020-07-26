import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { animated, useSpring } from 'react-spring';

const AnimSvg = animated(Svg);
const AnimPath = animated(Path);

interface Props extends React.SVGProps<SVGSVGElement> {
  active?: boolean;
}

const UserIcon: React.FC<Props> = ({ active, ...props }) => {
  const { fill, stroke } = useSpring(
    active
      ? { fill: '#00094D', stroke: '#00094D' }
      : { fill: '#ffffff', stroke: '#666666' },
  );

  return (
    <AnimSvg
      style={{ marginHorizontal: 30 }}
      width={32}
      height={36}
      viewBox="0 0 32 36"
      fill="none"
      {...props}>
      <AnimPath
        d="M21.362 3.727l.014.014.015.014C22.908 5.209 23.643 6.929 23.643 9c0 2.073-.736 3.823-2.267 5.33C19.901 15.78 18.14 16.5 16 16.5c-2.133 0-3.923-.715-5.448-2.17-1.477-1.5-2.195-3.25-2.195-5.33 0-2.085.721-3.808 2.195-5.26C12.083 2.235 13.872 1.5 16 1.5c2.127 0 3.884.733 5.362 2.227zm6.715 20.391l.013.014.014.013c1.618 1.553 2.396 3.368 2.396 5.527v2.953c0 .537-.173.948-.552 1.322-.38.374-.81.553-1.377.553H3.43c-.567 0-.996-.179-1.377-.553a1.733 1.733 0 01-.552-1.322v-2.953c0-2.172.764-3.99 2.338-5.54 1.63-1.606 3.517-2.382 5.733-2.382h.902A14.046 14.046 0 0016 22.875c1.914 0 3.76-.377 5.527-1.125h.902c2.215 0 4.07.775 5.648 2.368z"
        stroke={stroke}
        fill={fill}
        strokeWidth={3}
      />
    </AnimSvg>
  );
};

export default UserIcon;
