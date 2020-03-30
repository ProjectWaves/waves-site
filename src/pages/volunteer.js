import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import { AppWrapper } from '../components/elements/layout-components';
import Layout from '../components/layout';
import Header from '../components/header';
import InfoFooter from '../components/info-footer';
import Footer from '../components/footer';

const VolunteerPage = () => (
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

          h3 {
            color: #000;
            font-size: 3rem;
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
          <h2
            css={css`
              color: #000;
              font-size: 4rem;
              text-align: center;
              margin-top: 2rem;
            `}
          >
            Help Support the Waves Movement
          </h2>
          <p
            css={css`
              color: #555;
              padding-bottom: 2rem;
              font-size: 2rem;
              line-height: 3rem;
              text-align: center;
            `}
          >
            Volunteer to help connect more communities.
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
              max-width: 960px;
              margin: 0 auto;
              padding: 2rem 4rem;

              @media only screen and (max-width: 1000px) {
                max-width: 93.75%;
                padding: 0 2rem;
              }

              p {
                color: #333;
                font-size: 1.6rem;
                line-height: 3rem;
              }
            `}
          >
            <h3>Introduce Yourself</h3>
            <p>
              Waves is working to establish a volunteer network. Thank you for
              your interest in contributing to the Waves movement to get
              families and communities connected.
            </p>
            <p>
              Please fill out this brief form with your contact information and
              skill areas. This will help us know more about you as we move
              forward.
            </p>
            <p>
              A Digital Steward will contact you with more information about the
              next steps. Thank you.
            </p>
          </section>
        </article>
      </main>
      <InfoFooter />
      <Footer />
    </AppWrapper>
  </Layout>
);

export default VolunteerPage;
