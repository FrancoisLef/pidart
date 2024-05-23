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
  fontWeights: {
    ...textTokens.fontWeights,
  },
} satisfies ChakraTheme['semanticTokens'];
