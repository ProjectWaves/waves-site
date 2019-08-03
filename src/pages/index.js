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
import ResearchSection from '../components/research-section';
import AccessSection from '../components/access-section';
import InfoFooter from '../components/info-footer';
import Footer from '../components/footer';
import SEO from '../components/seo';

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
          <ContentWrapper>
            <ConnectedSection />
          </ContentWrapper>
          <CardSection />
          <ResearchSection />
          <AccessSection />
        </AppWrapper>
        <InfoFooter />
        <Footer />
      </Layout>
    </React.Fragment>
  );
};

export default IndexPage;
