import { type ChakraTheme } from '@chakra-ui/react';

import { textTheme } from 'core/atom';

export const components = {
  Text: textTheme,
} satisfies ChakraTheme['components'];
