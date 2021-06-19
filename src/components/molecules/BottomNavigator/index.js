import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TabItem } from '../../atoms';
// import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native';
// import { ICHomeActive, ICHomeInActive, ICOrderActive, ICOrderInActive, ICProfileActive, ICProfileInActive } from '../../../assets';

// const Icon = ({label, focus}) => {
//     switch (label) {
//         case 'Home':
//             return focus ? <ICHomeActive/> : <ICHomeInActive/>
//         case 'Order':
//             return focus ? <ICOrderActive/> : <ICOrderInActive/>
//         case 'Profile':
//             return focus ? <ICProfileActive/> : <ICProfileInActive/>
//         default:
//             return (
//                 <ICOrderActive />
//             )
//     }    
// }

const BottomNavigator = ({ state, descriptors, navigation }) => {
    const focusedOptions = descriptors[state.routes[state.index].key].options;

    if (focusedOptions.tabBarVisible === false) {
      return null;
    }
  
    return (
      <View style={styles.page}>
        {state.routes.map((route, index) => {
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
  
        //   return (
        //     <TouchableOpacity
        //       key={index}
        //       accessibilityRole="button"
        //       accessibilityState={isFocused ? { selected: true } : {}}
        //       accessibilityLabel={options.tabBarAccessibilityLabel}
        //       testID={options.tabBarTestID}
        //       onPress={onPress}
        //       onLongPress={onLongPress}>
        //           <Icon label={label} focus={isFocused}/>
        //           {/* isFocused untuk menentukan state aktif/tidak aktif */}
        //           <Text>{label}</Text>
        //           {/* <Text style={{ color: isFocused ? '#673ab7' : '#222' }}> {label} </Text> */}
        //     </TouchableOpacity>
        //   );

          return (
                <TabItem 
                    key = { index }
                    title = { label }
                    active = { isFocused } 
                    onPress = { onPress }
                    onLongPress = { onLongPress } />
            );
        })}
      </View>
    );
};

export default BottomNavigator;

const styles = StyleSheet.create({
    page: { 
        flexDirection: 'row', 
        backgroundColor: '#FDFAF6',
        paddingTop: 15,
        paddingBottom: 13,
        paddingHorizontal: 50,
        justifyContent: 'space-between'
    }
});
