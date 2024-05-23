import { type ChakraTheme } from '@chakra-ui/react';

export const radii = {
  'radius-0': '0',
  'radius-4': '4px',
  'radius-8': '8px',
  'radius-16': '16px',
  'radius-full': '9999px',

  /**
   * Kept for compatibility with a few chakra-ui hardcoded values. Cf
   * `chakra-ui/packages/button/src/avatar.tsx`
   */
  full: '9999px',
} satisfies ChakraTheme['radii'];
