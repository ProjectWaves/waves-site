import React, { useState } from "react";
import { useSpring, animated, config } from "react-spring";
import Layout from "../components/layout";
import {
  AppWrapper,
  ContentWrapper,
} from "../components/elements/layout-components";
import Hero from "../components/hero";
import CardSection from "../components/card-section";
import AccessSection from "../components/access-section";
import LiteBeamProductSection from "../components/litebeam-product-section";
import InfoFooter from "../components/info-footer";
import Footer from "../components/footer";
import SEO from "../components/seo";
import DigitalStewardsSection from "../components/digital-stewards-section";
import PartnersSection from "../components/partners-section";
import SponsorsSection from "../components/sponsors-section";

const IndexPage = () => {
  return (
    <React.Fragment>
      <Layout>
        <AppWrapper>
          <SEO
            title="Waves Movement"
            keywords={[`gatsby`, `application`, `react`]}
          />
          <Hero />
          <PartnersSection />
          <ContentWrapper>
            <AccessSection />
            <DigitalStewardsSection />
            <LiteBeamProductSection />
          </ContentWrapper>
          <CardSection />
          <SponsorsSection />
          <InfoFooter />
          <Footer />
        </AppWrapper>
      </Layout>
    </React.Fragment>
  );
};

export default IndexPage;
