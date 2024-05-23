import { type ChakraTheme, type ThemeComponents } from '@chakra-ui/react';

export type TextSize = keyof (typeof textTheme)['sizes'];
export type TextVariant = keyof (typeof textTheme)['variants'];

export const textTheme = {
  sizes: {
    '10': {
      textStyle: 'text-10',
    },
    '12': {
      textStyle: 'text-12',
    },
    '14': {
      textStyle: 'text-14',
    },
    '16': {
      textStyle: 'text-16',
    },
    '20': {
      textStyle: 'text-20',
    },
    '24': {
      textStyle: 'text-24',
    },
    '28': {
      textStyle: 'text-28',
    },
    '32': {
      textStyle: 'text-32',
    },
    '40': {
      textStyle: 'text-40',
    },
  },
  variants: {
    primary: {
      color: 'text-primary',
    },
    secondary: {
      color: 'text-secondary',
    },
    light: {
      color: 'text-light',
    },
    disabled: {
      color: 'text-disabled',
    },
    error: {
      color: 'text-error',
    },
    success: {
      color: 'text-success',
    },
    active: {
      color: 'text-active',
    },
  },
} satisfies ThemeComponents['Text'];

export const textTokens = {
  colors: {
    'text-active': {
      default: 'ctaBlue.-1',
    },
    'text-disabled': {
      default: 'grey.1',
    },
    'text-error': {
      default: 'red.-1',
    },
    'text-light': {
      default: 'grey.0',
    },
    'text-primary': {
      default: 'grey.-2',
    },
    'text-secondary': {
      default: 'grey.-1',
    },
    'text-success': {
      default: 'turquoise.-1',
    },
  },
  fonts: {
    body: {
      default: 'rubik',
    },
  },
} satisfies ChakraTheme['semanticTokens'];

export const textSizes = Object.keys(textTheme.sizes) as TextSize[];
export const textVariants = Object.keys(textTheme.variants) as TextVariant[];
