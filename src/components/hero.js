import React, { useState, createContext } from 'react';
import { useSpring, animated, config } from 'react-spring';
import { css, jsx, keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import NetworkStatus from './network-status';
import Header from './header';
import { GhostButton } from './elements/buttons';
import VisuallyHidden from '@reach/visually-hidden';
import { DialogContent, DialogOverlay } from '@reach/dialog';
import heroImg from '../images/waves-hero.jpg';
import WaveSection from './wave-section';

const Hero = () => {
  const [showLightbox, setShowLightbox] = useState(false);

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
        <WaveSection />
        <NetworkStatus status="5" />
        <Header siteTitle="WAVES" />
        <CTAContainer>
          <animated.h2
            style={{
              transform: x.interpolate(x => `translate3d(${x}px, 0, 0)`),
            }}
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
          <PrimaryCTAButton onClick={() => setShowLightbox(true)}>
            Join the Network
          </PrimaryCTAButton>
        </CTAContainer>
      </Masthead>
      {showLightbox && (
        <StyledDialogOverlay
          isOpen={showLightbox}
          onDismiss={() => setShowLightbox(false)}
        >
          <StyledDialogContent>
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
              <CloseButton onClick={() => setShowLightbox(false)}>
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
              <form
                css={css`
                  max-width: 600px;
                  margin: 2rem auto;
                  label {
                    font-size: 1.5rem;
                    margin-bottom: 0.5rem;
                  }
                  input,
                  textarea {
                    font-size: 1.5rem;
                    border: 2px solid rgba(0, 0, 0, 0.2);
                    border-radius: 0.5rem;
                    padding: 0.5rem;
                    margin-bottom: 1.5rem;
                  }
                  input::placeholder,
                  textarea::placeholder {
                    font-size: 1.5rem;
                    color: #777;
                  }
                `}
              >
                <div
                  css={css`
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                  `}
                >
                  <label for="name">Enter your full name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="First Last"
                    required
                    minlength="4"
                    maxlength="8"
                  />
                  <label for="phone">Enter your phone number:</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="410-555-5555"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    required
                  />
                  <label for="address">Enter your street address:</label>
                  <textarea
                    id="address"
                    name="address"
                    rows="5"
                    cols="33"
                    placeholder="1234 Street Baltimore MD, 21202"
                  />
                  <label for="phone">Enter your phone number:</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="410-555-5555"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    required
                  />
                  <label for="email">Enter your email if you have one:</label>
                  <input
                    type="email"
                    id="email"
                    size="50"
                    placeholder="name@email.com"
                    required
                  />
                  <input type="submit" value="SUBMIT" />
                </div>
              </form>
            </div>
          </StyledDialogContent>
        </StyledDialogOverlay>
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

  h2 {
    color: #ffffff;
    font-weight: bold;
    font-size: 4rem;
    @media only screen and (max-width: 1000px) {
      text-align: center;
      margin-top: 0;
      margin-bottom: 4rem;
    }
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
