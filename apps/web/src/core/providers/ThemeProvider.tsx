import { type FC, type PropsWithChildren } from 'react';
import { ChakraBaseProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';

import RubikMediumTtf from 'assets/fonts/Rubik-Medium.ttf';
import RubikRegularTtf from 'assets/fonts/Rubik-Regular.ttf';

import { theme } from 'core/theme';

export type ThemeProviderProps = {};

/**
 * Theme provider
 *
 * It loads the fonts and provide the theme to the application components.
 */
export const ThemeProvider: FC<PropsWithChildren<ThemeProviderProps>> = ({
  children,
}) => {
  return (
    <ChakraBaseProvider theme={theme}>
      <Global
        styles={`
        @font-face {
          font-family: 'Rubik';
          src: url('${RubikRegularTtf}') format('truetype');
          font-weight: 400;
          font-style: normal;
          font-stretch: normal;
        }

        @font-face {
          font-family: 'Rubik';
          src: url('${RubikMediumTtf}') format('truetype');
          font-weight: 500;
          font-style: normal;
          font-stretch: normal;
        }
      `}
      />

      {children}
    </ChakraBaseProvider>
  );
};
