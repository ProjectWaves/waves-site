import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import { ContentWrapper } from '../components/elements/layout-components';
import Layout from '../components/layout';
import Header from '../components/header';
import InfoFooter from '../components/info-footer';
import Footer from '../components/footer';

const FAQPage = () => (
  <Layout>
    <Header />
    <ContentWrapper>
      <h2
        css={css`
          font-size: 4rem;
          color: #121212;
        `}
      >
        Frequently Asked Questions
      </h2>
      <h3>
        1. What is your product (Internet), what speeds will you provide (and
        how does that compare to your competition){' '}
      </h3>
      <p>
        The goal when connecting any individual is to make sure they're getting
        high-speed internet(25mb+) with no data cap, and no throttling. I do not
        necessarily see this as competition, but rather as a way for Baltimore
        to circumvent ISPs like Comcast which tend to price gouge consumers
        while also delivering a sub-par service. The recommended tax-deductible
        donation amount is $10 a month for service, $120 for installation.
        Monthly donation & installation fees, however, are Pay-What-You-Can, as
        I strongly believe that pricing should not be a barrier to internet
        access.{' '}
      </p>
      <h2>2. Can we sign up now, if not when?</h2>
      <p>
        Yes! People can begin signing up, and you can do so via phone(443
        681-9384), email(install@projectwaves.net), or ideally through the
        submission form: projectwaves.net/join-the-network. The more folks that
        sign up & show interest in a community, the more of a motivator it will
        be to work on delivering service to that area.
      </p>
    </ContentWrapper>
    <InfoFooter />
    <Footer />
  </Layout>
);

export default FAQPage;
