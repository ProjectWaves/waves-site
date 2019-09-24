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
          /* max-width: 60%; */
          padding: 4rem;
          @media only screen and (max-width: 1000px) {
            padding: 0;
          }

          h2 {
            color: #000;
            font-size: 4rem;
            font-weight: 500;
            margin-top: 3rem;
          }
        `}
      >
        <article
          css={css`
            /* max-width: 93.75%; */
            border-radius: 1rem;
          `}
        >
          <h1
            css={css`
              color: #000;
              font-size: 5rem;
              text-align: center;
              margin-top: 2rem;
            `}
          >
            Frequently Asked Questions
          </h1>
          <p
            css={css`
              color: #555;
              padding-bottom: 2rem;
              font-size: 2rem;
              text-align: center;
            `}
          >
            Learn more about the process and service.
          </p>
          <hr
            css={css`
              margin: 2rem auto;
              border: 0;
              height: 1px;
              background-image: linear-gradient(
                to right,
                rgba(123, 167, 255, 0),
                rgba(123, 167, 255, 0.75),
                rgba(123, 167, 255, 0)
              );
              box-shadow: 0px 5px 10px rgba(123, 167, 255, 0.4);
            `}
          />
          <section
            css={css`
              max-width: 860px;
              margin: 0 auto;
              padding: 2rem 4rem;

              @media only screen and (max-width: 1000px) {
                max-width: 93.75%;
                padding: 0 2rem;
              }

              p {
                color: #333;
                font-size: 2rem;
                line-height: 3.75rem;
              }
            `}
          >
            <h2>1. What is your product, and what speeds will you provide?</h2>
            <p>
              The goal when connecting any individual is to make sure they're
              getting high-speed internet(25mb+) with no data cap, and no
              throttling. I do not necessarily see this as competition, but
              rather as a way for Baltimore to circumvent ISPs like Comcast
              which tend to price gouge consumers while also delivering a
              sub-par service. The recommended tax-deductible donation amount is
              $10 a month for service, $120 for installation. Monthly donation &
              installation fees, however, are Pay-What-You-Can, as I strongly
              believe that pricing should not be a barrier to internet access.{' '}
            </p>
            <h2>2. Can I sign up now?</h2>
            <p>
              Yes! People can begin signing up, and you can do so via phone(443
              681-9384), email(install@projectwaves.net), or ideally through the
              submission form: projectwaves.net/join-the-network. The more folks
              that sign up & show interest in a community, the more of a
              motivator it will be to work on delivering service to that area.
            </p>
            <h2>3. What is required to sign up?</h2>
            <p>
              Contact goes through email, phone, or the submission form. For
              questions, those can be directed towards install@projectwaves.net,
              however I'm also currently working on setting up a community slack
              channel for the Waves project, that will allow for folks in the
              Sharp-Leadenhall and Greenmount West communities to talk amongst
              each other, as well as talk with volunteers.
            </p>
            <p>
              Regarding equipment, we will provide a Wireless Receiver, as well
              as a home router as a part of the recommended donation of $120 for
              installation. For those who request an install, a Digital Steward
              will coordinate trained volunteers to setup the equipment at the
              resident's home. People are welcome to purchase and install the
              equipment themselves, but may have to talk with the Digital
              Stewards to ensure their equipment is setup properly and is able
              to connect to the network.{' '}
            </p>

            <h2>4. How secure is the Internet connection?</h2>
            <p>
              We do not keep logs of anything in the network. However anyone
              along the route chain could view unencrypted data or metadata
              (just like any ISP can). The organizers of Waves can see a
              spreadsheet of signup information volunteered by participants on
              the join-the-network page on the Waves website(name, phone,
              address, but email is optional).{' '}
            </p>
          </section>
        </article>
      </main>
      <InfoFooter />
      <Footer />
    </AppWrapper>
  </Layout>
);

export default FAQPage;
