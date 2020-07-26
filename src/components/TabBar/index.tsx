import React from 'react';
import { Text, TouchableOpacity, Dimensions } from 'react-native';
import { Container } from './styles';
import CardIcon from './icons/CardIcon';
import useToggle from 'react-use/lib/useToggle';
import UserIcon from './icons/UserIcon';
import CalendarIcon from './icons/CalendarIcon';

function TabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  // const [t, toggle] = useToggle(false);

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
  const handlePress = (s) => {
    navigation.navigate(s);
  };
  return (
    <Container>
      <TouchableOpacity onPress={() => handlePress('Calendar')}>
        <CalendarIcon active={state.index === 2} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          transform: [{ translateY: -38 }],
        }}
        onPress={() => handlePress('Home')}>
        <CardIcon active={state.index === 0} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress('Profile')}>
        <UserIcon active={state.index === 1} />
      </TouchableOpacity>
      {/* {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity onPress={onPress}>
            <CardIcon active={isFocused} />
          </TouchableOpacity>

          // <TouchableOpacity
          //   accessibilityRole="button"
          //   accessibilityStates={isFocused ? ['selected'] : []}
          //   accessibilityLabel={options.tabBarAccessibilityLabel}
          //   testID={options.tabBarTestID}
          //   onPress={onPress}
          //   onLongPress={onLongPress}
          //   style={{ flex: 1 }}>
          //   <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
          //     {label} 1
          //   </Text>
          // </TouchableOpacity>
        );
      })} */}
    </Container>
  );
}

export default TabBar;
