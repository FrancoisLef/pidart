import { type ChakraTheme } from '@chakra-ui/react';

export type Spacing = keyof typeof space;

export const space = {} satisfies ChakraTheme['space'];

export const sizes = {} satisfies ChakraTheme['sizes'];
