import { type ChakraTheme } from '@chakra-ui/react';

import { components } from './components';
import * as foundations from './foundations';
import { semanticTokens } from './semanticTokens';

export type Theme = typeof theme;

/**
 * Configure Chakra UI theme
 *
 * We do not use the default Chakra UI theme because it includes a lot of design
 * tokens (e.g. colors, shadows, borders, etc.) that we do not need.
 *
 * Instead, we export a partial theme that only includes the design tokens that
 * we need.
 *
 * For a complete list of Chakra UI default design tokens, see:
 *
 * @see https://github.com/chakra-ui/chakra-ui/tree/main/packages/components/theme/src/foundations
 */
export const theme = {
  ...foundations,
  components,
  config: {
    // Force light mode by default
    initialColorMode: 'light',
    // Do not subscribe to the OS color mode preference
    useSystemColorMode: false,
  },
  semanticTokens,
} satisfies Partial<ChakraTheme>;
