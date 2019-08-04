import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/core';

const activeStyles = {
  color: '#fafafa',
  fontWeight: 'bolder',
};

const Navbar = props => (
  <SiteNavContainer>
    <SiteNavList>
      <SiteNavEntry>
        <SiteNavLink
          color={props.color}
          hovercolor={props.hovercolor}
          activeStyle={activeStyles}
          to="/about"
        >
          About
        </SiteNavLink>
      </SiteNavEntry>
      <SiteNavEntry>
        <SiteNavLink activeStyle={activeStyles} to="/join-the-net">
          Join the Net
        </SiteNavLink>
      </SiteNavEntry>
      <SiteNavEntry>
        <SiteNavAnchor
          color="var(--primary-color)"
          activeStyle={activeStyles}
          href="https://digitalharbor.org/donate"
          target="_blank"
          rel="noopener noreferrer"
        >
          Donate
        </SiteNavAnchor>
      </SiteNavEntry>
    </SiteNavList>
  </SiteNavContainer>
);

export default Navbar;

const SiteNavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
  display: inline;
  padding: 0 2rem;

  @media only screen and (max-width: 1000px) {
    padding-left: 0;
    padding-right: 2rem;
  }
`;

const SiteNavLink = styled(Link)`
  list-style-type: none;
  padding-bottom: 5px;
  margin-bottom: 0px;
  margin-left: 0px;
  color: ${props => props.color || '#fff'};
  font-size: 1.5rem;
  font-weight: lighter;
  text-decoration: none;
  transition: color 0.5s ease;

  &:hover {
    color: ${props => props.hovercolor || '#0091c9'};
    cursor: pointer;
  }
  @media only screen and (max-width: 1000px) {
    padding-bottom: 0px;
  }
`;

const SiteNavAnchor = styled.a`
  list-style-type: none;
  padding-bottom: 5px;
  margin-bottom: 0px;
  margin-left: 0px;
  color: ${props => props.color || '#fff'};
  font-size: 1.5rem;
  /* font-weight: bolder; */
  text-decoration: none;
  transition: color 0.5s ease;

  &:hover {
    color: ${props => props.hovercolor || '#0091c9'};
    cursor: pointer;
  }
  @media only screen and (max-width: 1000px) {
    padding-bottom: 0px;
  }
`;

const SiteNavLinkCTA = styled(SiteNavLink)`
  background: #fcece8;
  color: #e86544;
  border: 2px solid #e86544;
  border-radius: 10px;
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: bolder;
  transition: all 0.5s ease;

  &:hover {
    background: #e86544;
    border: 2px solid #e86544;
    color: #fcece8;
  }

  @media only screen and (max-width: 1000px) {
    padding: 1rem;
  }
`;
