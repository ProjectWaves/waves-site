import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { GlobalStyle } from '../components/globalStyle';
import {
  AppWrapper,
  ContentWrapper,
} from '../components/elements/layout-components';
import Hero from '../components/hero';
import ConnectedSection from '../components/connected-section';
import SEO from '../components/seo';

const IndexPage = () => (
  <React.Fragment>
    <GlobalStyle />
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
  </React.Fragment>
);

export default IndexPage;
