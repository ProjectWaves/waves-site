import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import { AppWrapper } from '../components/elements/layout-components';
import Layout from '../components/layout';
import Header from '../components/header';
import InfoFooter from '../components/info-footer';
import Footer from '../components/footer';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const PostLayout = ({ title, body }) => (
  <Layout>
    <AppWrapper>
      <Header />
      <main
        css={css`
          /* max-width: 60%; */
          padding: 4rem;
          @media only screen and (max-width: 1000px) {
            padding: 0;
          }

          h2 {
            color: #000;
            font-size: 4rem;
            font-weight: 500;
            margin-top: 3rem;
          }
        `}
      >
        <article
          css={css`
            /* max-width: 93.75%; */
            border-radius: 1rem;
          `}
        >
          <h1
            css={css`
              color: #000;
              font-size: 5rem;
              text-align: center;
              margin-top: 2rem;
            `}
          >
            {title}
          </h1>
          <p
            css={css`
              color: #555;
              padding-bottom: 2rem;
              font-size: 2rem;
              text-align: center;
            `}
          >
            (some sort of sub-title)
          </p>
          <hr
            css={css`
              margin: 2rem auto;
              border: 0;
              height: 1px;
              background-image: linear-gradient(
                to right,
                rgba(123, 167, 255, 0),
                rgba(123, 167, 255, 0.75),
                rgba(123, 167, 255, 0)
              );
              box-shadow: 0px 5px 10px rgba(123, 167, 255, 0.4);
            `}
          />
          <section
            css={css`
              max-width: 860px;
              margin: 0 auto;
              padding: 2rem 4rem;

              @media only screen and (max-width: 1000px) {
                max-width: 93.75%;
                padding: 0 2rem;
              }

              p {
                color: #333;
                font-size: 2rem;
                line-height: 3.75rem;
              }
            `}
          >
            <MDXRenderer>{body}</MDXRenderer>
          </section>
        </article>
      </main>
      <InfoFooter />
      <Footer />
    </AppWrapper>
  </Layout>
);

export default PostLayout;
