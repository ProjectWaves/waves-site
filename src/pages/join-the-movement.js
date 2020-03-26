import React, { useState } from 'react';
import { Link } from 'gatsby';
import { css, jsx } from '@emotion/core';
import Layout from '../components/layout';
import Header from '../components/header';
import InfoFooter from '../components/info-footer';
import Footer from '../components/footer';

const JoinTheMovementPage = () => {
  return (
    <React.Fragment>
      <Layout>
        <Header />
        <section
          css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 2rem;
            background: #fff;
            h2 {
              color: #000;
              font-size: 4rem;
            }
            h3 {
              color: #000;
              font-size: 3.2rem;
            }

            p {
              color: #000;
              font-size: 2rem;
              line-height: 3.75rem;
            }
          `}
        >
          <h2>Join the Waves Movement</h2>
          <p>This page </p>
        </section>
        <InfoFooter />
        <Footer />
      </Layout>
    </React.Fragment>
  );
};

export default JoinTheMovementPage;
