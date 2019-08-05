import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/core';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated, config } from 'react-spring';
import Layout from '../components/layout';
import {
  AppWrapper,
  ContentWrapper,
} from '../components/elements/layout-components';
import Header from '../components/header';
import InfoFooter from '../components/info-footer';
import Footer from '../components/footer';
import JoinNetworkForm from '../components/join-network-form';

const JoinTheNetworkPage = () => {
  return (
    <React.Fragment>
      <Layout>
        <AppWrapper>
          <Header />
          <ContentWrapper allMargin="20vh auto">
            <main
              css={css`
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                background: tomato;
              `}
            >
              <JoinNetworkForm />
            </main>
          </ContentWrapper>
          <InfoFooter />
          <Footer />
        </AppWrapper>
      </Layout>
    </React.Fragment>
  );
};

export default JoinTheNetworkPage;
