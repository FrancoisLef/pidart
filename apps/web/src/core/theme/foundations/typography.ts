import { type ChakraTheme } from '@chakra-ui/react';

export type TextStyle = keyof typeof textStyles;

export const fonts = {
  mabry: '"Mabry Pro", serif',
  menlo: 'Menlo',
  rubik: 'Rubik',
} satisfies ChakraTheme['fonts'];

export const fontSizes = {
  'font-10': '10px',
  'font-12': '12px',
  'font-14': '14px',
  'font-16': '16px',
  'font-20': '20px',
  'font-24': '24px',
  'font-28': '28px',
  'font-32': '32px',
  'font-40': '40px',
} satisfies ChakraTheme['fontSizes'];

export const lineHeights = {
  'height-16': '16px',
  'height-18': '18px',
  'height-20': '20px',
  'height-24': '24px',
  'height-28': '28px',
  'height-32': '32px',
  'height-38': '38px',
  'height-40': '40px',
  'height-48': '48px',
} satisfies ChakraTheme['lineHeights'];

export const fontWeights = {
  'weight-400': 400,
  'weight-500': 500,
} satisfies ChakraTheme['fontWeights'];

export const letterSpacings = {
  'spacing-0': '0',
} satisfies ChakraTheme['letterSpacings'];

export const textStyles = {
  'text-10': {
    fontSize: 'font-10',
    letterSpacing: 'spacing-0',
    lineHeight: 'height-16',
  },
  'text-12': {
    fontSize: 'font-12',
    letterSpacing: 'spacing-0',
    lineHeight: 'height-18',
  },
  'text-14': {
    fontSize: 'font-14',
    letterSpacing: 'spacing-0',
    lineHeight: 'height-20',
  },
  'text-16': {
    fontSize: 'font-16',
    letterSpacing: 'spacing-0',
    lineHeight: 'height-24',
  },
  'text-20': {
    fontSize: 'font-20',
    letterSpacing: 'spacing-0',
    lineHeight: 'height-28',
  },
  'text-24': {
    fontSize: 'font-24',
    letterSpacing: 'spacing-0',
    lineHeight: 'height-32',
  },
  'text-28': {
    fontSize: 'font-28',
    letterSpacing: 'spacing-0',
    lineHeight: 'height-38',
  },
  'text-32': {
    fontSize: 'font-32',
    letterSpacing: 'spacing-0',
    lineHeight: 'height-40',
  },
  'text-40': {
    fontSize: 'font-40',
    letterSpacing: 'spacing-0',
    lineHeight: 'height-48',
  },
} satisfies ChakraTheme['textStyles'];

export const textStyleKeys = Object.keys(textStyles) as TextStyle[];
