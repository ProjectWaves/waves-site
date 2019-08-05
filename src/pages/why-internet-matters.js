import React, { useState } from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
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

const WhyInternetMattersPage = () => {
  return (
    <React.Fragment>
      <Layout>
        <AppWrapper>
          <Header />
          <main
            css={css`
              background: #121212;
            `}
          >
            <p>
              My name is Adam Bouhmad, and I founded Waves in response to the
              repeal of Net Neutrality back in 2018. Recently, the UN declared
              that Internet access is a human right -- Internet access is
              paramount to succeed in today’s society. Susan Crawford has
              written and spoken extensively how the US has fallen far behind
              the rest of the industrialized nations in terms of public access
              to Broadband Internet because of the monopolistic practices of
              companies like Comcast, Time Warner, AT&T, and Verizon. “The rich
              are getting gouged, the poor are very often left out, and this
              means that we’re creating, yet again, two Americas, and deepening
              inequality through this communications inequality,” Crawford tells
              Bill.” - Susan Crawford Providing a service is one thing. Comcast
              claims they’re available throughout the city, and to be fair, they
              are. Thanks to the 2016 Comcast Franchise Agreement with Baltimore
              City, Comcast is available throughout the city. However, there is
              a big difference between availability and accessibility --
              availability does not equal accessibility in terms of pricing and
              quality of service. Waves is a response to this; the lack of
              equitable internet choices in Baltimore paired with the unruly
              price gouging these providers engage in. When folks talk about
              21st-century skills, the fascinating thing is that we’re already
              20% of the way into the 21st century. We’ve talked about the
              problem for decades, but let's start focusing on solutions.
              Together, we can build out community wireless across Baltimore
              where the main focus isn’t profitability -- but rather the human
              aspect.
            </p>
          </main>
          {/* <ContentWrapper>
            <JoinNetworkForm />

          </ContentWrapper> */}
          <InfoFooter />
          <Footer />
        </AppWrapper>
      </Layout>
    </React.Fragment>
  );
};

export default WhyInternetMattersPage;
