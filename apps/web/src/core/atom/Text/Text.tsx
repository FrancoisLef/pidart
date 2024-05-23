import {
  forwardRef,
  Text as ChakraText,
  type TextProps as ChakraTextProps,
} from '@chakra-ui/react';

import { formatText } from './helpers';

export type TextProps = ChakraTextProps;

export const Text = forwardRef<TextProps, 'p'>(
  ({ children, size = '14', ...props }, ref) => (
    <ChakraText size={size} {...props} ref={ref}>
      {typeof children === 'string' ? formatText(children) : children}
    </ChakraText>
  ),
);
