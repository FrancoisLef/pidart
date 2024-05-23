/* eslint-disable sort-keys-fix/sort-keys-fix */
import { type ChakraTheme } from '@chakra-ui/react';

export type Color = keyof typeof colors;
export type ColorVariant = -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5;
export type ColorShade = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800;

export const colorVariants = [
  -2, -1, 0, 1, 2, 3, 4, 5,
] satisfies ColorVariant[];
export const colorShades = [
  100, 200, 300, 400, 500, 600, 700, 800,
] satisfies ColorShade[];

/**
 * Theme color palette
 *
 * We do not use the default Chakra UI color palette because it includes a lot
 * of colors that we do not need.
 *
 * To be compatible with the old theme, we kept the same colors keys _(`-2`,
 * `-1`, `0`, `1`, `2`, `3`, `4`, `5`)_.
 *
 * But in order to **rebrand** the app, we'll need to change the colors and will
 * use new keys _(`100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`,
 * `900`)_.
 *
 * @see https://github.com/chakra-ui/chakra-ui/blob/main/packages/components/theme/src/foundations/colors.ts
 */
export const colors = {
  transparent: 'transparent',
  white: '#FFFFFF',
  grey: {
    [-2]: '#17294D',
    [-1]: '#455980',
    [0]: '#8090B2',
    [1]: '#B1BACC',
    [2]: '#EDEEF1',
    [3]: '#F3F5F6',
    [4]: '#F9FAFB',
    [5]: '#FCFDFE',

    100: '#FCFBF8',
    200: '#F6F5EF',
    300: '#F0EFE4',
    400: '#DEDCCE',
    500: '#B6B4AA',
    600: '#7F7B71',
    700: '#555249',
    800: '#25241D',
  },
  yellow: {
    [-2]: '#B57C08',
    [-1]: '#E5B301',
    [0]: '#FFD947',
    [1]: '#FFEB9F',
    [2]: '#FFF5CC',
    [3]: '#FFF7DB',
    [4]: '#FFFBEB',
    [5]: '#FFFEF9',

    100: '#FFFDF5',
    200: '#FEFAE2',
    300: '#FFF5D2',
    400: '#FCF0B6',
    500: '#FFEB85',
    600: '#FEE827',
    700: '#8E6A15',
    800: '#47350B',
  },
  orange: {
    [-2]: '#C26604',
    [-1]: '#E38016',
    [0]: '#FFA238',
    [1]: '#FFD39F',
    [2]: '#FFEBD1',
    [3]: '#FFF2E0',
    [4]: '#FFF7F0',
    [5]: '#FFFDFB',

    100: '#FEFAF5',
    200: '#FEF3E6',
    300: '#FFE6C9',
    400: '#FFC9A3',
    500: '#FF9F6B',
    600: '#F4722A',
    700: '#B64617',
    800: '#893815',
  },
  red: {
    [-2]: '#B52430',
    [-1]: '#DB394C',
    [0]: '#F05B60',
    [1]: '#F7ADAF',
    [2]: '#FBD6D7',
    [3]: '#FCE4E6',
    [4]: '#FDF1F2',
    [5]: '#FFFCFC',

    100: '#FFFBFA',
    200: '#FFF2F0',
    300: '#FFE1DD',
    400: '#FBC2B6',
    500: '#F99D8F',
    600: '#DC4C56',
    700: '#9E3D3D',
    800: '#843435',
  },
  green: {
    [-2]: '#3A8D42',
    [-1]: '#48B14E',
    [0]: '#76ED7C',
    [1]: '#BAFCBD',
    [2]: '#DDFDDD',
    [3]: '#E5FFE7',
    [4]: '#F0FFF0',
    [5]: '#FBFFFB',

    100: '#FAFFF5',
    200: '#F0FCE4',
    300: '#E7F9D2',
    400: '#C9EBA3',
    500: '#A4D36E',
    600: '#56AA41',
    700: '#496728',
    800: '#384B23',
  },
  blue: {
    100: '#FBFCFE',
    200: '#EEF5FB',
    300: '#E0F0FF',
    400: '#C7E4FF',
    500: '#8BC7FF',
    600: '#2A93F4',
    700: '#087CBF',
    800: '#2B464D',
  },
  brown: {
    [-2]: '#B83A18',
    [-1]: '#D95027',
    [0]: '#F77036',
    [1]: '#FBB59D',
    [2]: '#FFDACC',
    [3]: '#FFEBE0',
    [4]: '#FFF3F0',
    [5]: '#FFFCFB',
  },
  ctaBlue: {
    [-2]: '#0D5ABF',
    [-1]: '#0C6CF3',
    [0]: '#5CA3FF',
    [1]: '#A8D4FF',
    [2]: '#D1E8FF',
    [3]: '#E2F0FD',
    [4]: '#F1F7FD',
    [5]: '#FAFDFF',
  },
  lightBlue: {
    [-2]: '#1476BD',
    [-1]: '#0E91E1',
    [0]: '#52BCFF',
    [1]: '#A8DEFF',
    [2]: '#D2EEFF',
    [3]: '#E5F5FF',
    [4]: '#F0F9FF',
    [5]: '#FAFDFF',
  },
  magenta: {
    [-2]: '#9E1878',
    [-1]: '#C936A6',
    [0]: '#E85FCC',
    [1]: '#F3A9E4',
    [2]: '#FBD7F4',
    [3]: '#FFE5FF',
    [4]: '#FFF0FD',
    [5]: '#FFFCFF',
  },
  pink: {
    [-2]: '#B31E50',
    [-1]: '#DA2B65',
    [0]: '#F7578C',
    [1]: '#FBABC6',
    [2]: '#FDD7E3',
    [3]: '#FFE5EE',
    [4]: '#FDF1F5',
    [5]: '#FFFCFD',
  },
  premiumPink: {
    [-2]: '#E74E36',
    [-1]: '#EA6F5D',
    [0]: '#F39182',
    [1]: '#FEA99A',
    [2]: '#FFD2C7',
    [3]: '#FFE2D9',
    [4]: '#FFF0EB',
    [5]: '#FFF8F5',
  },
  purple: {
    [-2]: '#7229B3',
    [-1]: '#9343D9',
    [0]: '#B45EFF',
    [1]: '#DAB0FF',
    [2]: '#EDD9FF',
    [3]: '#F3E5FF',
    [4]: '#F7F0FF',
    [5]: '#FEFCFF',
  },
  turquoise: {
    [-2]: '#068E70',
    [-1]: '#07B58E',
    [0]: '#13F0C0',
    [1]: '#99FBE6',
    [2]: '#D3FDF3',
    [3]: '#E3FDF8',
    [4]: '#ECFDF9',
    [5]: '#FAFFFD',
  },
} satisfies ChakraTheme['colors'];
