import React from "react";
import { graphql, StaticQuery } from "gatsby";
import PropTypes from "prop-types";
import { Global, css } from "@emotion/core";
import styled from "@emotion/styled";

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
    render={(data) => (
      <React.Fragment>
        <Global
          styles={css`
            html {
              width: 100%;
              height: 100%;
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              -ms-text-size-adjust: 100%;
              -webkit-text-size-adjust: 100%;
              touch-action: manipulation;
            }
            :root {
              --primary-color: #7ba7ff;
              --secondary-color: #ef4e4e;
              --white: #ffffff;
              --black: #000000;
              --gray-800: #2d3748;
              --gray-900: #1a202c;
            }
            *,
            *:before,
            *:after {
              box-sizing: inherit;
            }
            body {
              margin: 0;
              padding: 0;
              height: 100%;
              min-height: 100%;
              overflow-x: hidden;
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
