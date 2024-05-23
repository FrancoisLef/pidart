import { type FC } from 'react';

import { ThemeProvider } from 'core/providers';
import { Text } from 'core/atom';

export const App: FC = () => {
  return (
    <ThemeProvider>
      <Text size="16" fontWeight="medium">
        PiDart
      </Text>
    </ThemeProvider>
  );
};
