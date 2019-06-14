import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { GlobalStyle } from '../components/globalStyle';
import { AppWrapper } from '../components/elements/layout-components';
import Hero from '../components/hero';

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
      <SecondSection>
        <h2>Connected. Community. Access</h2>
        <p>75,000 Baltimore Homes Without Access.</p>
      </SecondSection>
    </AppWrapper>
  </React.Fragment>
);

export default IndexPage;

const SecondSection = styled.section`
  min-height: 20vh;
  background: #fff;
  h2 {
    font-size: 4rem;
    color: #000;
    padding: 0;
    margin: 0;
  }
  p {
    font-size: 2rem;
    line-height: 3rem;
    color: #000;
    padding: 0;
    margin: 0;
  }
`;
