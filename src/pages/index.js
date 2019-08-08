import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';
import Layout from '../components/layout';
import { AppWrapper } from '../components/elements/layout-components';
import Hero from '../components/hero';
import CardSection from '../components/card-section';
import AccessSection from '../components/access-section';
import LiteBeamProductSection from '../components/litebeam-product-section';
import InfoFooter from '../components/info-footer';
import Footer from '../components/footer';
import SEO from '../components/seo';
import DigitalStewardsSection from '../components/digital-stewards-section';

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
          <DigitalStewardsSection />
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
