import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        background: #121212;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
        `}
      >
        <h2
          css={css`
            font-size: 4rem;
            color: #fafafa;

            &:after {
              content: '';
              padding-right: 1rem;
              border-right: 2px solid var(--secondary-color);
            }
          `}
        >
          404
        </h2>
        <p
          css={css`
            font-size: 2rem;
            padding-left: 1rem;
            color: #fafafa;
          `}
        >
          Page couldn't be found. Let's{' '}
          <Link
            css={css`
              list-style-type: none;
              padding-bottom: 5px;
              margin-bottom: 0px;
              margin-left: 0px;
              color: var(--primary-color);
              font-size: 2rem;
              font-weight: lighter;
              text-decoration: none;
              transition: color 0.5s ease;

              &:hover {
                color: ${props => props.hovercolor || '#0091c9'};
                cursor: pointer;
              }
              @media only screen and (max-width: 1000px) {
                padding-bottom: 0px;
              }
            `}
            to="/"
          >
            return home.
          </Link>
        </p>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
