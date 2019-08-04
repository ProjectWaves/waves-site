import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Global
          styles={css`
            html {
              width: 100%;
              height: 100%;
              margin: 0;
              padding: 0;
              overflow: hidden;
              /* font-size: 62.5%; */
              box-sizing: border-box;
              -ms-text-size-adjust: 100%;
              -webkit-text-size-adjust: 100%;
              touch-action: manipulation;
            }
            :root {
              --primary-color: #7ba7ff;
              --white: #fffaff;
            }
            *,
            *:before,
            *:after {
              box-sizing: inherit;
            }
            body {
              margin: 0;
              padding: 0;
              /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
                'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
                'Droid Sans', 'Helvetica Neue', sans-serif; */
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoosthing: grayscale;
            }
          `}
        />

        <main>{children}</main>
      </React.Fragment>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
