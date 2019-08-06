import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import { useSpring, animated, config } from 'react-spring';
import Layout from '../components/layout';
import Header from '../components/header';
import InfoFooter from '../components/info-footer';
import Footer from '../components/footer';

const ThankYouPage = () => {
  const fadeQuarterDelay = useSpring({
    from: {
      opacity: 0,
    },
    to: { opacity: 1 },
    config: { mass: 1.25, tension: 50, friction: 20 },
    delay: 250,
  });

  const fadeHalfDelay = useSpring({
    from: {
      opacity: 0,
    },
    to: { opacity: 1 },
    config: { mass: 1.25, tension: 50, friction: 20 },
    delay: 500,
  });

  return (
    <React.Fragment>
      <Layout>
        <Header />
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            background: #fff;
          `}
        >
          <animated.h2
            css={css`
              font-size: 4rem;
              color: #121212;
            `}
            style={fadeQuarterDelay}
          >
            Thank You.
          </animated.h2>
          <animated.p
            css={css`
              font-size: 2rem;
              padding-left: 1rem;
              color: #121212;
            `}
            style={fadeHalfDelay}
          >
            We're glad that you're interested in the Waves community-driven
            network.
          </animated.p>
          <AnimatedLink
            css={css`
              list-style-type: none;
              padding-bottom: 5px;
              margin-bottom: 0px;
              margin-left: 0px;
              color: #121212;
              font-size: 2rem;
              font-weight: lighter;
              text-decoration: underline;
              transition: color 0.5s ease;

              &:hover {
                color: ${props => props.hovercolor || '#0091c9'};
                cursor: pointer;
              }
              @media only screen and (max-width: 1000px) {
                padding-bottom: 0px;
              }
            `}
            style={fadeHalfDelay}
            to="/"
          >
            Explore the rest of the site.
          </AnimatedLink>
        </div>
        <InfoFooter />
        <Footer />
      </Layout>
    </React.Fragment>
  );
};

export default ThankYouPage;

const AnimatedLink = animated(Link);
