/* eslint-disable sort-keys-fix/sort-keys-fix */
import { type ChakraTheme } from '@chakra-ui/react';

export const transition = {
  property: {
    common:
      'background-color, border-color, outline-color, color, fill, stroke, opacity, box-shadow, transform',
  },
  duration: {
    normal: '200ms',
    fast: '150ms',
    'duration-50': '50ms',
    'duration-100': '100ms',
    'duration-150': '150ms',
    'duration-200': '200ms',
    'duration-300': '300ms',
    'duration-400': '400ms',
    'duration-500': '500ms',
  },
  easing: {
    'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
    'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
    'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
  },
} satisfies ChakraTheme['transition'];
