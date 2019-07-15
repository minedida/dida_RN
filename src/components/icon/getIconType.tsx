const customIcons = {};

export const registerCustomIconType = (id, customIcon) => {
  customIcons[id] = customIcon;
};
export const IconTypeArrays = [
  'Zocial', 'Octicons', 'MaterialIcons', 'MaterialCommunityIcons', 'Ionicons', 'AntDesign',
  'Foundation', 'EvilIcons', 'Entypo', 'FontAwesome', 'SimpleLineIcons' , 'Feather',
]

export type ValuesOf<T extends string[]>= T[number];
// export type IconTypes = ValuesOf<typeof IconTypeArrays>;
export type IconTypes = typeof IconTypeArrays;

export default type => {
  switch (type) {
    case 'Zocial':
      return require('react-native-vector-icons/Zocial').default;
    case 'Octicons':
      return require('react-native-vector-icons/Octicons').default;
    case 'MaterialIcons':
      return require('react-native-vector-icons/MaterialIcons').default;
    case 'MaterialCommunityIcons':
      return require('react-native-vector-icons/MaterialCommunityIcons').default;
    case 'Ionicons':
      return require('react-native-vector-icons/Ionicons').default;
    case 'Foundation':
      return require('react-native-vector-icons/Foundation').default;
    case 'EvilIcons':
      return require('react-native-vector-icons/EvilIcons').default;
    case 'Entypo':
      return require('react-native-vector-icons/Entypo').default;
    case 'FontAwesome':
      return require('react-native-vector-icons/FontAwesome').default;
    case 'SimpleLineIcons':
      return require('react-native-vector-icons/SimpleLineIcons').default;
    case 'Feather':
      return require('react-native-vector-icons/Feather').default;
    case 'AntDesign':
      return require('react-native-vector-icons/AntDesign').default;
    case 'FontAwesome5':
      return require('react-native-vector-icons/FontAwesome5').default;
    default:
      if (Object.prototype.hasOwnProperty.call(customIcons, type)) {
        return customIcons[type];
      }
      return require('react-native-vector-icons/MaterialIcons').default;
  }
};
