import React from 'react';
import { Link } from 'gatsby';
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { useSpring, animated, config } from 'react-spring';

const NavSlider = ({ style }) => {
  return (
    <animated.div
      css={css`
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        padding: 100px;
        max-height: 85vh;
        background: #000000;
        z-index: 100;
      `}
      style={style}
    >
      <SlideNavContainer>
        <SiteNavList>
          <SiteNavEntry>
            <SiteNavLink color="var(--primary-color)" hoverColor="#fff">
              About
            </SiteNavLink>
          </SiteNavEntry>

          <SiteNavEntry>
            <SiteNavLink color="var(--primary-color)" hoverColor="#fff">
              Mission
            </SiteNavLink>{' '}
          </SiteNavEntry>
          <SiteNavEntry>
            {' '}
            <SiteNavLink color="var(--primary-color)" hoverColor="#fff">
              Research
            </SiteNavLink>{' '}
          </SiteNavEntry>
          <SiteNavEntry>
            <SiteNavLink color="var(--primary-color)" hoverColor="#fff">
              Donate
            </SiteNavLink>{' '}
          </SiteNavEntry>
        </SiteNavList>
      </SlideNavContainer>
    </animated.div>
  );
};

export default NavSlider;

const SlideNavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 2rem;
  padding-right: 4rem;

  @media only screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;

    width: 100%;
    padding-top: 0;
    padding-bottom: 2rem;
    padding-left: 2rem;
    padding-right: 2rem;
    /* border-top: 2px solid rgba(0, 0, 0, 0.3); */
  }
`;

const SiteNavList = styled.ul`
  padding: 0;
  margin: 0;
`;

const SiteNavEntry = styled.li`
  list-style-type: none;
  display: block;
  padding: 2rem;
  @media only screen and (max-width: 1000px) {
    padding-left: 0;
    padding-right: 2rem;
  }
`;

const SiteNavLink = styled(Link)`
  list-style-type: none;
  padding-bottom: 1rem;
  margin-bottom: 0;
  margin-left: 0;
  color: ${props => props.color || '#fff'};
  font-size: 3rem;
  text-decoration: none;
  transition: color 0.5s ease;

  &:hover {
    color: ${props => props.hoverColor || '#0091c9'};
    cursor: pointer;
  }
  @media only screen and (max-width: 1000px) {
    padding-bottom: 0px;
  }
`;
