// vendors
import { css, createGlobalStyle } from 'styled-components';

// styles
import colors from './colors';
import typography from './typography';
import zIndexes from './zIndexes';
import animations from './animations';

export const rootStyle = css`
  --container-gutter: 16px;
  --container-min-width: 320px;
  --container-max-width: 1280px;
  --header-height: 200px;

  --radius-small: 10px;
  --radius-medium: 16px;
  --radius-large: 24px;

  ${colors};

  ${typography};

  ${zIndexes};

  ${animations};
`;

export const htmlStyle = css`
  position: relative;

  width: 100%;

  margin: 0;
  padding: 0;

  scroll-behavior: smooth;
`;

export const bodyStyle = css`
  color: var(--color-black);
  font-family: var(--font-sans);
  letter-spacing: var(--letter-spacing-sm);

  background-color: var(--color-white);
`;

export const h1Style = css``;
export const h2Style = css``;
export const h3Style = css``;
export const h4Style = css``;

export const unstyledListStyle = css`
  margin: 0;
  padding: 0;

  list-style: none;
`;

export const resetStyle = css`
  *,
  ::after,
  ::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    color: inherit;

    word-break: break-word;
  }
`;

export const GlobalStyle = createGlobalStyle`
  :root {
    ${rootStyle}
  }

  html{
    ${htmlStyle}
  }

  body {
    ${bodyStyle}
  }

  ${resetStyle}
`;
