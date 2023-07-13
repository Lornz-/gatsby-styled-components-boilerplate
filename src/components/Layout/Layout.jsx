// vendors
import React from 'react';
import PropTypes from 'prop-types';

// styles
import { GlobalStyle } from '@/styles/global';

import 'sanitize.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/typography.css';

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <main>{children}</main>;
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
