import { type FC } from 'react';
import {
  ColorItem as StorybookColorItem,
  ColorPalette as StorybookColorPalette,
} from '@storybook/addon-docs';

import { theme, type ColorShade, colorShades } from 'core/theme';

type ColorItem = {
  colors: {
    [key in ColorShade]: string;
  };
  title: string;
  subtitle: string;
};

const getColors = (): ColorItem[] => {
  const colors = [];

  for (const colorName in theme.colors) {
    const color = theme.colors[colorName];

    if (typeof color === 'string') {
      colors.push({
        colors: {
          [colorName]: color,
        },
        subtitle: `colors.${colorName}`,
        title: colorName,
      });

      continue;
    }

    colors.push({
      colors: colorShades.reduce(
        (acc, shade) => ({
          ...acc,
          [`${shade} `]: color[shade],
        }),
        {},
      ),
      subtitle: `colors.${colorName}`,
      title: colorName,
    });
  }

  return colors as ColorItem[];
};

export const ColorPalette: FC = () => {
  const items = getColors();

  return (
    <StorybookColorPalette>
      {items.map(({ colors, subtitle, title }) => (
        <StorybookColorItem
          colors={colors}
          key={title}
          subtitle={subtitle}
          title={title}
        />
      ))}
    </StorybookColorPalette>
  );
};
