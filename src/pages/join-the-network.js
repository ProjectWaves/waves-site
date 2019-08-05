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
        <section
          css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 2rem;
            background: #fff;
          `}
        >
          <JoinNetworkForm />
        </section>
        <InfoFooter />
        <Footer />
      </Layout>
    </React.Fragment>
  );
};

export default JoinTheNetworkPage;
