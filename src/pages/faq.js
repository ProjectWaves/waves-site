import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import { AppWrapper } from '../components/elements/layout-components';
import Layout from '../components/layout';
import Header from '../components/header';
import InfoFooter from '../components/info-footer';
import Footer from '../components/footer';

const FAQPage = () => (
  <Layout>
    <AppWrapper>
      <Header />
      <main
        css={css`
          max-width: 60%;
          margin: 4rem auto;

          @media only screen and (max-width: 1000px) {
            max-width: 100%;
          }

          h2 {
            color: #000;
            font-size: 4rem;
          }

          h3 {
            color: #000;
            font-size: 3rem;
          }

          p {
            color: #000;
            font-size: 2rem;
            line-height: 3.75rem;
          }
        `}
      >
        <article
          css={css`
            max-width: 93.75%;
            margin: 0 auto;
            padding: 4rem;
            border-radius: 1rem;
          `}
        >
          <h2
            css={css`
              font-size: 4rem;
              color: #121212;
            `}
          >
            Frequently Asked Questions
          </h2>
          <h3>
            1. What is your product (Internet), what speeds will you provide
            (and how does that compare to your competition){' '}
          </h3>
          <p>
            The goal when connecting any individual is to make sure they're
            getting high-speed internet(25mb+) with no data cap, and no
            throttling. I do not necessarily see this as competition, but rather
            as a way for Baltimore to circumvent ISPs like Comcast which tend to
            price gouge consumers while also delivering a sub-par service. The
            recommended tax-deductible donation amount is $10 a month for
            service, $120 for installation. Monthly donation & installation
            fees, however, are Pay-What-You-Can, as I strongly believe that
            pricing should not be a barrier to internet access.{' '}
          </p>
          <h3>2. Can we sign up now, if not when?</h3>
          <p>
            Yes! People can begin signing up, and you can do so via phone(443
            681-9384), email(install@projectwaves.net), or ideally through the
            submission form: projectwaves.net/join-the-network. The more folks
            that sign up & show interest in a community, the more of a motivator
            it will be to work on delivering service to that area.
          </p>
          <h3>
            3. What is required to sign up, i.e: who do we contact, what
            equipment will we need to install, will we be responsible for
            installing ourselves or will someone have to come to our house?
          </h3>
          <p>
            Contact goes through email, phone, or the submission form. For
            questions, those can be directed towards install@projectwaves.net,
            however I'm also currently working on setting up a community slack
            channel for the Waves project, that will allow for folks in the
            Sharp-Leadenhall and Greenmount West communities to talk amongst
            each other, as well as talk with volunteers.
          </p>
          <p>
            Regarding equipment, we will provide a Wireless Receiver, as well as
            a home router as a part of the recommended donation of $120 for
            installation. For those who request an install, a Digital Steward
            will coordinate trained volunteers to setup the equipment at the
            resident's home. People are welcome to purchase and install the
            equipment themselves, but may have to talk with the Digital Stewards
            to ensure their equipment is setup properly and is able to connect
            to the network.{' '}
          </p>

          <h3>4. How secure is the internet connection?</h3>
          <p>
            We do not keep logs of anything in the network. However anyone along
            the route chain could view unencrypted data or metadata (just like
            any ISP can). The organizers of Waves can see a spreadsheet of
            signup information volunteered by participants on the
            join-the-network page on the Waves website(name, phone, address, but
            email is optional).{' '}
          </p>
        </article>
      </main>
      <InfoFooter />
      <Footer />
    </AppWrapper>
  </Layout>
);

export default FAQPage;
