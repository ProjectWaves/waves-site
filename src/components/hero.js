import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NetworkStatus from './network-status';
import Header from './header';
import { GhostButton } from './elements/buttons';
import VisuallyHidden from '@reach/visually-hidden';
import heroImg from '../images/waves-hero.jpg';

const Hero = () => {
  return (
    <Masthead>
      <NetworkStatus status="Engaged!" />
      <Header siteTitle="WAVES" />
      <CTAContainer>
        <h2>Pay What You Can Internet Access</h2>
        <p>Community owned. No monthly fee.</p>
        <p>Get access.</p>
        <PrimaryCTAButton>Join the Network</PrimaryCTAButton>
      </CTAContainer>
      <VisuallyHidden>Scroll Down</VisuallyHidden>
      <svg
        class="chevron-down"
        width="188"
        height="188"
        viewBox="0 0 188 188"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M119.851 80.6841C121.359 79.5527 123.225 79.0035 125.106 79.1371C126.987 79.2708 128.756 80.0784 130.09 81.4118C131.423 82.7451 132.23 84.5146 132.364 86.3955C132.498 88.2763 131.949 90.1423 130.817 91.6508L99.4839 122.984C98.0196 124.419 96.0509 125.223 94.0005 125.223C91.9501 125.223 89.9815 124.419 88.5172 122.984L57.1839 91.6508C56.0525 90.1423 55.5032 88.2763 55.6369 86.3955C55.7706 84.5146 56.5782 82.7451 57.9115 81.4118C59.2449 80.0784 61.0144 79.2708 62.8952 79.1371C64.7761 79.0035 66.642 79.5527 68.1505 80.6841L94.0005 106.456L119.851 80.6058V80.6841Z"
          fill="white"
        />
      </svg>
    </Masthead>
  );
};

export default Hero;

const Masthead = styled.div`
  display: flex;
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
    background-color: #002432;
    background-size: 100%;
    background-position: top 33% bottom 66%;
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
  margin-right: 50vw;
  h2 {
    color: #ffffff;
    font-weight: bold;
    font-size: 4rem;
  }
  p {
    color: #ffffff;
    font-size: 2rem;
    line-height: 3rem;
    margin: 0;
    padding: 0;
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

  &:hover {
    color: #ffffff;
    border-color: #ffffff;
  }
`;

const ScrollDown = styled.a`
  background: none;
  margin-top: 8rem;
  padding: 0;
  border: none;
`;
