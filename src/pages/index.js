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
import Hero from '../components/hero';
import ConnectedSection from '../components/connected-section';
import CardSection from '../components/card-section';
import NoNetSection from '../components/no-net-section';
import AccessSection from '../components/access-section';
import LiteBeamProductSection from '../components/litebeam-product-section';
import InfoFooter from '../components/info-footer';
import Footer from '../components/footer';
import SEO from '../components/seo';
import JoinNetworkForm from '../components/join-network-form';

const IndexPage = () => {
  return (
    <React.Fragment>
      <Layout>
        <AppWrapper>
          <SEO
            title="Waves Community WiFi"
            keywords={[`gatsby`, `application`, `react`]}
          />
          <Hero />
          <AccessSection />
          <LiteBeamProductSection />
          <CardSection />
          <InfoFooter />
          <Footer />
        </AppWrapper>
      </Layout>
    </React.Fragment>
  );
};

export default IndexPage;
