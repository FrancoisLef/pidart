import { type ChakraTheme } from '@chakra-ui/react';

export type Spacing = keyof typeof space;

export const space = {
  'space-0': '0px',
  'space-2': '2px',
  'space-4': '4px',
  'space-6': '6px',
  'space-8': '8px',
  'space-10': '10px',
  'space-12': '12px',
  'space-14': '14px',
  'space-16': '16px',
  'space-18': '18px',
  'space-20': '20px',
  'space-24': '24px',
  'space-26': '26px',
  'space-32': '32px',
  'space-34': '34px',
  'space-36': '36px',
  'space-40': '40px',
  'space-48': '48px',
  'space-56': '56px',
  'space-64': '64px',
  'space-80': '80px',
  'space-96': '96px',
  'space-120': '120px',
  'space-128': '128px',
  'space-240': '240px',
} satisfies ChakraTheme['space'];

export const spaceKeys = Object.keys(space) as Spacing[];

export const sizes = {
  full: '100%',
  half: '50%',
  container: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  ...space,
} satisfies ChakraTheme['sizes'];
