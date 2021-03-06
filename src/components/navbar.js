import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/core";

const activeStyles = {
  color: "#fafafa",
  fontWeight: "bolder",
};

const Navbar = (props) => (
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
        <SiteNavLink activeStyle={activeStyles} to="/join-the-movement">
          Join the Movement
        </SiteNavLink>
      </SiteNavEntry>
      <SiteNavEntry>
        <SiteNavLink activeStyle={activeStyles} to="/faq">
          FAQ
        </SiteNavLink>
      </SiteNavEntry>
      <SiteNavEntry>
        <SiteNavLink
          color="var(--primary-color)"
          activeStyle={activeStyles}
          to="/donate"
        >
          Donate
        </SiteNavLink>
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

  @media only screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: 1rem;
    /* padding: 1rem; */
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
  color: ${(props) => props.color || "#fff"};
  font-size: 1.5rem;
  font-weight: lighter;
  text-decoration: none;
  transition: color 0.5s ease;

  &:hover {
    color: ${(props) => props.hovercolor || "#0091c9"};
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
  color: ${(props) => props.color || "#fff"};
  font-size: 1.5rem;

  text-decoration: none;
  transition: color 0.5s ease;

  &:hover {
    color: ${(props) => props.hovercolor || "#0091c9"};
    cursor: pointer;
  }
  @media only screen and (max-width: 1000px) {
    padding-bottom: 0px;
  }
`;
