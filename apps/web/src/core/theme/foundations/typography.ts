import { type ChakraTheme } from '@chakra-ui/react';

export type TextStyle = keyof typeof textStyles;

export const fonts = {
  rubik: 'Rubik',
} satisfies ChakraTheme['fonts'];

export const fontSizes = {} satisfies ChakraTheme['fontSizes'];

export const lineHeights = {} satisfies ChakraTheme['lineHeights'];

export const fontWeights = {
  regular: 400,
  medium: 500,
} satisfies ChakraTheme['fontWeights'];

export const letterSpacings = {} satisfies ChakraTheme['letterSpacings'];

export const textStyles = {} satisfies ChakraTheme['textStyles'];
