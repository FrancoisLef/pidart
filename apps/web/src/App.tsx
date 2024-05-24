import { type FC } from 'react';

import { ThemeProvider } from 'core/providers';
import { Text } from '@chakra-ui/react';

export const App: FC = () => {
  return (
    <ThemeProvider>
      <Text>Hello world</Text>
    </ThemeProvider>
  );
};
