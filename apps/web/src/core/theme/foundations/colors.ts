import { type ChakraTheme } from '@chakra-ui/react';

export type Color = keyof typeof colors;
export type ColorShade =
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900;

export const colorShades = [
  50, 100, 200, 300, 400, 500, 600, 700, 800, 900,
] satisfies ColorShade[];

/**
 * Theme color palette
 */
export const colors = {
  dartRed: {
    50: '#ffe5e5',
    100: '#ffb3b3',
    200: '#ff8080',
    300: '#ff4d4d',
    400: '#ff1a1a',
    500: '#e60000',
    600: '#b40000',
    700: '#800000',
    800: '#4d0000',
    900: '#1a0000',
  },
  dartGreen: {
    50: '#e5f7e5',
    100: '#b3e6b3',
    200: '#80d580',
    300: '#4dc44d',
    400: '#1ab31a',
    500: '#009900',
    600: '#007300',
    700: '#004d00',
    800: '#002600',
    900: '#000e00',
  },
  dartBlack: {
    50: '#e5e5e5',
    100: '#b3b3b3',
    200: '#808080',
    300: '#4d4d4d',
    400: '#1a1a1a',
    500: '#000000',
    600: '#000000',
    700: '#000000',
    800: '#000000',
    900: '#000000',
  },
  dartWhite: {
    50: '#ffffff',
    100: '#f2f2f2',
    200: '#e6e6e6',
    300: '#d9d9d9',
    400: '#cccccc',
    500: '#bfbfbf',
    600: '#a3a3a3',
    700: '#878787',
    800: '#6b6b6b',
    900: '#4f4f4f',
  },
  dartYellow: {
    50: '#fff9e5',
    100: '#ffecb3',
    200: '#ffdf80',
    300: '#ffd34d',
    400: '#ffc61a',
    500: '#e6ac00',
    600: '#b38600',
    700: '#805f00',
    800: '#4d3900',
    900: '#1a1300',
  },
  dartBlue: {
    50: '#e5f2ff',
    100: '#b3d9ff',
    200: '#80bfff',
    300: '#4da6ff',
    400: '#1a8cff',
    500: '#006fe6',
    600: '#0054b3',
    700: '#003980',
    800: '#001e4d',
    900: '#00041a',
  },
} satisfies ChakraTheme['colors'];
