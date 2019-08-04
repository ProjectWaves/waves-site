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
import CardSection from '../components/card-section';
import AccessSection from '../components/access-section';
import InfoFooter from '../components/info-footer';
import Footer from '../components/footer';
import JoinNetworkForm from '../components/join-network-form';

const JoinTheNetworkPage = () => {
  return (
    <React.Fragment>
      <Layout>
        <AppWrapper>
          <ContentWrapper>
            <JoinNetworkForm />
          </ContentWrapper>
          <InfoFooter />
          <Footer />
        </AppWrapper>
      </Layout>
    </React.Fragment>
  );
};

export default JoinTheNetworkPage;
