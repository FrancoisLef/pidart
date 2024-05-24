import { type ChakraTheme, extendTheme } from '@chakra-ui/react';

import * as foundations from './foundations';

/**
 * Configure Chakra UI theme
 */
export const theme = extendTheme({
  ...foundations,
  config: {
    // Force light mode by default
    initialColorMode: 'light',
    // Do not subscribe to the OS color mode preference
    useSystemColorMode: false,
  },
}) satisfies Partial<ChakraTheme>;

export type Theme = typeof theme;
