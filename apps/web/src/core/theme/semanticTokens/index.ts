import { type ChakraTheme } from '@chakra-ui/react';

import { textTokens } from 'core/atom';

export const semanticTokens = {
  colors: {
    // Components
    ...textTokens.colors,
  },
  fonts: {
    ...textTokens.fonts,
  },
} satisfies ChakraTheme['semanticTokens'];
