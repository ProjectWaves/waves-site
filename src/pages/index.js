import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/core';
import Layout from '../components/layout';
import {
  AppWrapper,
  ContentWrapper,
} from '../components/elements/layout-components';
import Hero from '../components/hero';
import ConnectedSection from '../components/connected-section';
import SEO from '../components/seo';

const IndexPage = () => (
  <React.Fragment>
    <Layout>
      <AppWrapper>
        <SEO
          title="Waves Community Mesh"
          keywords={[`gatsby`, `application`, `react`]}
        />
        <Hero />
        <ContentWrapper>
          <ConnectedSection />
        </ContentWrapper>
      </AppWrapper>
    </Layout>
  </React.Fragment>
);

export default IndexPage;
