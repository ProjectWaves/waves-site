import React from 'react';
import { css } from '@emotion/core';
import { useSpring, animated, config } from 'react-spring';
import styled from '@emotion/styled';

const ConnectedSection = () => {
  const fadeInSection = useSpring({
    from: { opacity: 0, transform: 'translate3d(0%,50%,0)' },
    to: { opacity: 1, transform: 'translate3d(0%, 0%, 0%' },
    config: { mass: 1, tension: 100, friction: 20 },
  });

  const fadeInOneSecond = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 1000,
  });

  return (
    <AnimatedSectionContainer style={fadeInSection} id="connected-section">
      <h2>Connecting communities in Baltimore and beyond.</h2>
      <animated.p style={fadeInOneSecond}>
        75,000 Baltimore homes without access. Let's start connecting people.
      </animated.p>
      <div
        css={css`
          width: 100%;
          min-height: 200px;
          margin-top: 5rem;
          margin-bottom: 15rem;
          background: #f0f4f8;
          border-radius: 32px;
          z-index: 2000;
        `}
      />
    </AnimatedSectionContainer>
  );
};

export default ConnectedSection;

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 20vh;
  /* margin-top: -22rem; */
  z-index: 1000;

  @media only screen and (max-width: 1000px) {
    margin-top: 0;
  }
  h2 {
    font-size: 3.5rem;
    color: #000;
    padding: 0;
    margin: 0;
    z-index: 1000;
  }
  p {
    font-size: 2rem;
    line-height: 3rem;
    color: #000;
    padding-top: 1rem;
    margin: 0;
    z-index: 1000;
  }
`;

const AnimatedSectionContainer = animated(SectionContainer);
