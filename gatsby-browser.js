/* eslint-disable import/prefer-default-export */
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
// vendors
import React from 'react';

// components
import Layout from './src/components/Layout';

/**
 *  Apply Layout component to every page and template
 */
export const wrapPageElement = ({ element, props }) => (
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  <Layout {...props}>{element}</Layout>
);

/**
 * This is useful to set up any context providers that will wrap your application.
 * For setting persistent UI elements around pages use wrapPageElement.
 */
// export const wrapRootElement = ({ element }) => ();

/**
 * Apply a custom scrolling behavior on navigation
 */
// export const shouldUpdateScroll = ({ routerProps }) => {};

/**
 * Trigger an immediate page refresh to apply changes
 * when a service worker has been updated in the background.
 */
// export const onServiceWorkerUpdateReady = () => window.location.reload();
