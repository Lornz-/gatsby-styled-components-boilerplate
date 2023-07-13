// vendors
import { css } from 'styled-components';
import { rem } from 'polished';

// utils
import interpolate from '@/utils/math/interpolate';

export default css`
  --font-sans-serif: arial, sans-serif;
  --font-mono: ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono',
    'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro',
    'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace;

  --letter-spacing-xxs: 0.005em;
  --letter-spacing-xs: 0.01em;
  --letter-spacing-sm: 0.0125em;
  --letter-spacing-md: 0.015em;
  --letter-spacing-lg: 0.02em;
  --letter-spacing-xl: 0.025em;

  /* use interpolation in a clamp function for responsive font
    based on a min/max font size and min/max viewport width. */
  font-size: clamp(${rem(16)}, ${interpolate(16, 20, 480, 1280)}, ${rem(20)});
`;
