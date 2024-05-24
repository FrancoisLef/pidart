import { type ChakraTheme } from '@chakra-ui/react';

/**
 * Chakra UI global styles
 *
 * These styles are applied by `ChakraProvider` component.
 *
 * @see https://chakra-ui.com/docs/styled-system/global-styles
 */
export const styles = {
  global: {
    /**
     * `<b>` elements have a `font-weight: bold;` by default and because our
     * theme does not have a `bold` font weight, we need to override it.
     */
    'b, strong': {
      fontWeight: 'medium',
    },
  },
} satisfies ChakraTheme['styles'];
