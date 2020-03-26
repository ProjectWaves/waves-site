import React, { useState } from 'react';
import { Link } from 'gatsby';
import { css, jsx } from '@emotion/core';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated, config } from 'react-spring';
import Layout from '../components/layout';
import Header from '../components/header';
import InfoFooter from '../components/info-footer';
import Footer from '../components/footer';
import JoinNetworkForm from '../components/join-network-form';

const JoinTheNetworkPage = () => {
  return (
    <React.Fragment>
      <Layout>
        <Header />
        <main
          css={css`
            /* display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center; */
            padding: 2rem;
            max-width: 960px;
            margin: 0 auto;
            background: #fff;
            h2 {
              color: #000;
              font-size: 4rem;
              text-align: center;
            }
            h3 {
              color: #000;
              font-size: 3.2rem;
            }

            p {
              color: #000;
              font-size: 2rem;
              padding: 0rem;
              margin: 0rem;
            }
          `}
        >
          <h2>Interested in Internet Access?</h2>
          <p>
            Filling out this form if you're interested in getting connected to
            the Internet through Waves.
          </p>
          <p>
            We ask for your information so that a Digital Steward will be able
            to contact you with next steps. Please provide either a phone number
            or email address if you have one.
          </p>
          <p>Thank you!</p>

          <JoinNetworkForm />
        </main>
        <InfoFooter />
        <Footer />
      </Layout>
    </React.Fragment>
  );
};

export default JoinTheNetworkPage;
