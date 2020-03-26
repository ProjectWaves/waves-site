import React, { useState } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import VisuallyHidden from '@reach/visually-hidden';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { useSpring, animated, config } from 'react-spring';
import Navbar from './navbar';
// import NavSlider from './nav-slider';

const Header = props => {
  const [isNavOpen, setNavOpen] = useState(false);

  const fadeInLogo = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 100,
  });

  // const navAnimation = useSpring({
  //   transform: isNavOpen ? `translate3d(0,0,0)` : `translate3d(0, -100%, 0)`,
  //   opacity: isNavOpen ? 1 : 0,
  //   config: { mass: 1, tension: 120, friction: 20 },
  // });

  return (
    <StyledHeader>
      <Link
        to="/"
        css={css`
          text-decoration: none;
          margin: 0;
          padding: 0;
        `}
      >
        <VisuallyHidden>
          <h1>Waves Home</h1>
        </VisuallyHidden>
        <div>
          <div
            css={css`
              width: 400px;
              height: 62px;
            `}
          >
            <animated.svg
              style={fadeInLogo}
              css={css`
                width: 100%;
                height: 100%;
              `}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.961 57.543c16.265 0 29.45-11.946 29.45-26.681 0-14.735-13.185-26.68-29.45-26.68s-29.45 11.944-29.45 26.68c0 14.735 13.185 26.68 29.45 26.68z"
                stroke="#fff"
                stroke-width="2"
                stroke-miterlimit="10"
              />
              <path
                d="M40.484 30.862c0 3.192-2.873 5.862-6.523 5.862-3.65 0-6.522-2.67-6.522-5.862S30.312 25 33.961 25c3.65 0 6.523 2.67 6.523 5.862z"
                fill="#fff"
                stroke="#fff"
              />
              <path
                d="M63.325 30.941c-.307 4.334-5.31 10.22-10.622 12.923-5.486 3.062-9.173 3.738-11.148 4.772-2.063.994-2.765 1.988-3.028 3.936-.44 1.71.088 4.93-4.697 4.851-4.827-.08-11.28-4.811-14.264-9.622-3.38-4.97-4.126-8.31-5.267-10.1-1.097-1.869-2.194-2.505-4.345-2.744-1.887-.397-5.442.08-5.398-4.254.043-3.34 5.31-10.22 10.621-12.923 5.486-3.062 9.173-3.738 11.148-4.772 2.063-.994 2.765-1.988 3.029-3.936.439-1.71-.088-4.93 4.696-4.891 5.442.08 11.28 4.811 14.264 9.623 3.38 4.97 4.126 8.31 5.267 10.1 1.097 1.868 2.195 2.504 4.345 2.743 1.932.437 5.487-.04 5.399 4.294zM33.962 4.18c21.99 37.577-21.945 15.469 0 53.084M4.687 30.703c41.52-19.922 17.073 19.92 58.594 0"
                stroke="#fff"
                stroke-width="2"
                stroke-miterlimit="10"
              />
              <path
                d="M4.511 34.043c1.94 0 3.511-1.425 3.511-3.181 0-1.757-1.572-3.181-3.51-3.181C2.571 27.68 1 29.105 1 30.86c0 1.757 1.572 3.182 3.511 3.182zM63.413 34.043c1.939 0 3.51-1.425 3.51-3.181 0-1.757-1.571-3.181-3.51-3.181-1.94 0-3.512 1.424-3.512 3.18 0 1.757 1.572 3.182 3.512 3.182zM33.962 7.362c1.94 0 3.511-1.424 3.511-3.181C37.473 2.424 35.901 1 33.962 1c-1.94 0-3.511 1.424-3.511 3.181 0 1.757 1.572 3.181 3.51 3.181zM33.962 60.724c1.94 0 3.511-1.425 3.511-3.181 0-1.757-1.572-3.181-3.511-3.181-1.94 0-3.511 1.424-3.511 3.18 0 1.757 1.572 3.182 3.51 3.182z"
                fill="#000"
                stroke="#fff"
                stroke-width="2"
                stroke-miterlimit="10"
              />
              <path
                d="M126.922 50.584h-2.502l-9.568-30.458c-.79-2.505-1.405-4.533-1.8-6.163-.307 1.55-.79 3.38-1.36 5.408-.571 2.027-3.775 12.445-9.612 31.213h-2.546L87.552 11.14h3.204l7.637 25.408c.307 1.034.57 1.988.834 2.863.263.875.482 1.71.702 2.465.219.756.395 1.511.57 2.227.176.716.308 1.431.483 2.147.483-2.465 1.493-6.163 3.029-11.133l7.461-23.938h3.38l8.734 27.476c1.009 3.181 1.755 5.726 2.194 7.675a45.634 45.634 0 0 1 1.01-4.136c.395-1.47 3.467-11.81 9.173-31.015h3.072l-12.113 39.405zM179.81 36.667h-17.688l-6.057 13.917h-3.379l17.512-39.604h1.931l17.161 39.604h-3.423l-6.057-13.917zm-16.591-2.505H178.8l-5.925-14.235c-.483-1.113-1.097-2.664-1.799-4.652a43.11 43.11 0 0 1-1.756 4.692l-6.101 14.195zM233.4 11.14h3.291l-16.283 39.444h-2.677l-16.24-39.444h3.248l10.973 26.84c1.668 4.055 2.809 7.077 3.379 9.105.395-1.352 1.185-3.46 2.37-6.282L233.4 11.14zM278.871 50.584h-23.789V11.14h23.789v2.544H258.11v14.912h19.62v2.544h-19.62v16.94h20.761v2.504zM325 40.405c0 3.3-1.317 5.885-3.994 7.833-2.678 1.909-6.233 2.903-10.666 2.903-5.311 0-9.392-.517-12.245-1.59v-2.744c3.116 1.193 7.154 1.79 12.026 1.79 3.555 0 6.408-.756 8.514-2.228 2.107-1.47 3.161-3.42 3.161-5.845 0-1.51-.352-2.743-1.054-3.698-.702-.994-1.843-1.868-3.379-2.703-1.58-.796-3.863-1.67-6.891-2.625-4.433-1.392-7.505-2.902-9.217-4.493-1.712-1.59-2.546-3.738-2.546-6.442 0-2.942 1.273-5.368 3.819-7.236 2.545-1.87 5.837-2.784 9.831-2.784 4.082 0 7.944.716 11.543 2.108l-1.097 2.385c-3.599-1.351-7.066-2.067-10.358-2.067-3.204 0-5.794.676-7.681 2.028-1.887 1.352-2.853 3.18-2.853 5.487 0 1.471.307 2.664.878 3.578.571.955 1.536 1.79 2.897 2.506 1.316.755 3.599 1.63 6.847 2.703 3.379 1.074 5.969 2.108 7.637 3.102 1.711.994 2.94 2.147 3.73 3.42.703 1.272 1.098 2.823 1.098 4.612z"
                fill="#fff"
              />
            </animated.svg>
          </div>
        </div>
      </Link>
      <Navbar />
      {/* <button
        css={css`
          z-index: 200;
        `}
        onClick={() => setNavOpen(!isNavOpen)}
      >
        Menu
      </button> */}
      {/* <NavSlider style={navAnimation} /> */}
    </StyledHeader>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  width: 100%;
  /* min-width: 100vw; */
  background: rgba(0, 0, 0, 1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16), 0 2px 4px rgba(0, 0, 0, 0.23);
  padding: 1rem 0;
  padding-left: 5rem;
  z-index: 1000;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    padding: 0;
  }

  svg {
    margin-left: 3.8rem;
    @media only screen and (max-width: 320px) {
      margin: 0;
    }
  }
`;

export default Header;
