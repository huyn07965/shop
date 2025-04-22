
// /**
//  * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
//  * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
//  */

// const tintColorLight = '#0a7ea4';
// const tintColorDark = '#fff';

// export const Colors = {
//   light: {
//     text: '#11181C',
//     background: '#fff',
//     tint: tintColorLight,
//     icon: '#687076',
//     tabIconDefault: '#687076',
//     tabIconSelected: tintColorLight,
//   },
//   dark: {
//     text: '#ECEDEE',
//     background: '#151718',
//     tint: tintColorDark,
//     icon: '#9BA1A6',
//     tabIconDefault: '#9BA1A6',
//     tabIconSelected: tintColorDark,
//   },
// };

type ColorStyle = {
  second: string,
  title: string,
  text: string,
  black: string,
  tabBar: string,
  icon: string,
  main: string,
  background: string,
  inputSearch: string,
  primary: string,
  gray: string,
  darkGray: string,
  red: string,
  white: string,
  orange: string,
  pink: string,
  button: string
}

const Color: ColorStyle = {
  second: '#FFFFFF',
  title: '#0288D1',
  text: '#000000',
  black: '#000000',
  tabBar: '#F5F9FA',
  icon: '#949494',
  main: '#0ca89e',
  background: '#edf2ef',
  inputSearch: '#E1E1E1',
  primary: '#CB6D80',
  gray: '#b2b8b4',
  darkGray: '#7e8580',
  red: 'red',
  white: '#FFFFFF',
  orange: '#f25235',
  pink: '#CB6D80',
  button: '#48B6DB'
}
export default  Color;