import React, { useState } from 'react';
import { useSpring, animated, config, useTransition } from 'react-spring';
import { css, jsx, keyframes } from '@emotion/core';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Header from './header';
import { GhostButton } from './elements/buttons';
import VisuallyHidden from '@reach/visually-hidden';
import { DialogContent, DialogOverlay } from '@reach/dialog';
import heroImg from '../images/waves-hero.jpg';
import WaveSection from './wave-section';
import JoinNetworkForm from './join-network-form';

/* TODO: Refactor this component
  - Split out the modal and form into separate components
  - State needs to be handled for form and modal:
  - Hook for opening/closing modal and then all the state for the form's logic
  - Figure out the best way to handle this
*/

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  const formTransition = useTransition(showModal, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const fadeHalfDelay = useSpring({
    from: {
      opacity: 0,
    },
    to: { opacity: 1 },
    delay: 500,
  });

  const fadeOneDelay = useSpring({
    from: {
      opacity: 0,
    },
    to: { opacity: 1 },
    delay: 1500,
  });

  const fadeTwoDelay = useSpring({
    from: {
      opacity: 0,
    },
    to: { opacity: 1 },
    delay: 2500,
  });

  const { x } = useSpring({
    from: {
      x: -1000,
    },
    to: {
      x: 0,
    },
    delay: 100,
    config: { mass: 1.25, tension: 50, friction: 20 },
  });

  return (
    <React.Fragment>
      <Masthead>
        <Header siteTitle="Waves" />
        <CTAContainer>
          <animated.h2
            // style={{
            //   transform: x.interpolate(x => `translate3d(${x}px, 0, 0)`),
            // }}
            css={css`
              font-weight: bold;
              color: rgba(189, 195, 199, 1);
              font-size: 4rem;
              @media only screen and (max-width: 1000px) {
                text-align: center;
                margin-top: 0;
                margin-bottom: 4rem;
              }
            `}
          >
            Pay What You Can Internet Access
          </animated.h2>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              margin-top: 5vh;
              @media only screen and (max-width: 1000px) {
                span {
                  font-weight: bolder;
                }
                p {
                  font-size: 2.5rem;
                }
              }
            `}
          >
            <animated.p
              style={{
                ...fadeHalfDelay,
              }}
              css={css`
                color: #ffffff;
                font-size: 2rem;
                line-height: 3rem;
                margin: 0;
                padding: 0;
              `}
            >
              <span
                css={css`
                  color: var(--primary-color);
                `}
              >
                Connect
              </span>{' '}
              yourself.
            </animated.p>
            <animated.p
              style={fadeOneDelay}
              css={css`
                color: #ffffff;
                font-size: 2rem;
                line-height: 3rem;
                margin: 0;
                padding: 0;
              `}
            >
              <span
                css={css`
                  color: var(--primary-color);
                `}
              >
                Connect
              </span>{' '}
              your community.
            </animated.p>
            <animated.p
              style={fadeTwoDelay}
              css={css`
                color: #ffffff;
                font-size: 2rem;
                line-height: 3rem;
                margin: 0;
                padding: 0;
              `}
            >
              <span
                css={css`
                  color: var(--primary-color);
                `}
              >
                Connect
              </span>{' '}
              the world.
            </animated.p>
          </div>
          {/* <PrimaryCTAButton onClick={() => setShowModal(true)}> */}
          <Link to="/join-the-net">
            <PrimaryCTAButton>Join the Network</PrimaryCTAButton>
          </Link>
        </CTAContainer>
      </Masthead>
      {formTransition.map(
        ({ item, key, props }) =>
          item && (
            <AnimatedStyledDialogOverlay
              key={key}
              style={props}
              isOpen={showModal}
              onDismiss={() => setShowModal(false)}
            >
              <AnimatedStyledDialogContent>
                <div
                  css={css`
                    display: flex;
                    position: fixed;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    width: 600px;
                    height: 600px;
                    background: #ffffff;
                    border-radius: 1rem;
                  `}
                >
                  <CloseButton onClick={() => setShowModal(false)}>
                    <VisuallyHidden>Close</VisuallyHidden>
                    <svg
                      x="0px"
                      y="0px"
                      width="24px"
                      height="24px"
                      viewBox="0 0 31.11 31.11"
                      enableBackground="new 0 0 31.11 31.11"
                    >
                      <polygon
                        fill="red"
                        points="31.11,1.41 29.7,0 15.56,14.14 1.41,0 0,1.41 14.14,15.56 0,29.7 1.41,31.11 15.56,16.97   29.7,31.11 31.11,29.7 16.97,15.56 "
                      />
                    </svg>
                  </CloseButton>
                  <JoinNetworkForm />
                </div>
              </AnimatedStyledDialogContent>
            </AnimatedStyledDialogOverlay>
          )
      )}
    </React.Fragment>
  );
};

export default Hero;

const Masthead = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
  background: linear-gradient(
      90deg,
      #000000 1.87%,
      rgba(0, 0, 0, 0.5) 32.85%,
      rgba(0, 0, 0, 0) 50%
    ),
    url(${heroImg});
  background-repeat: no-repeat;
  background-size: cover;

  @media only screen and (max-width: 1000px) {
    background: url(${heroImg});
    background-repeat: no-repeat;
    background: linear-gradient(
        90deg,
        #000000 1.87%,
        rgba(0, 0, 0, 0.5) 32.85%,
        rgba(0, 0, 0, 0) 50%
      ),
      url(${heroImg});
    background-size: cover;
    background-position: 70%;
    overflow: hidden;
  }
  svg {
    margin: 0;
    padding: 0;
  }
  .chevron-down:hover {
    fill: red;
  }
`;

const CTAContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 3vw;
  margin-right: 50vw;
  @media only screen and (max-width: 1000px) {
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    max-width: 90%;
  }
`;

const PrimaryCTAButton = styled(GhostButton)`
  text-transform: none;
  color: #7ba7ff;
  border: 2px solid #7ba7ff;
  border-radius: 16px;
  padding: 1rem;
  margin-top: 8rem;
  max-width: 200px;
  @media only screen and (max-width: 1000px) {
    margin-top: 8rem;
    max-width: 100%;
  }

  &:hover {
    color: #ffffff;
    border-color: #ffffff;
  }
`;

const StyledDialogOverlay = styled(DialogOverlay)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2000;
  background: rgba(0, 0, 0, 0.6);
  @media only screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const AnimatedStyledDialogOverlay = animated(StyledDialogOverlay);

const StyledDialogContent = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  max-width: 100%;
  max-height: 100%;
  border-radius: 16px;
  z-index: 10;

  @media only screen and (max-width: 1000px) {
    width: 93.75%;
  }
  -webkit-overflow-scrolling: touch;
`;

const AnimatedStyledDialogContent = animated(StyledDialogContent);

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  transition: all ease 0.5s;
  background: transparent;
  padding: 1.2rem;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: 0;
  }
`;
