import React from 'react';
import styled from '@emotion/styled';

const Footer = () => (
  <FooterWrapper>
    <FooterTagline>
      <FooterRights>© 2019</FooterRights>
      <FooterLinkContainer>
        <FooterLink
          href="https://digitalharbor.org"
          target="_blank"
          rel="noopener"
        >
          Project Waves
        </FooterLink>
      </FooterLinkContainer>
      <FooterRights>All rights reserved.</FooterRights>
    </FooterTagline>
  </FooterWrapper>
);

export default Footer;

const FooterWrapper = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #002432;
  width: 100%;
`;

const FooterLink = styled.a`
  color: #0091c9;
  text-decoration: none;
  transition: all ease-in-out 0.3s;
  &:hover {
    color: #fafafa;
    cursor: pointer;
  }
`;

const FooterRights = styled.span`
  font-size: 1.8rem;
  font-weight: normal;
  padding-left: 1rem;
  padding-right: 1rem;
  margin: 0;
  color: #fafafa;
`;

const FooterLinkContainer = styled.div`
  display: inline;
  transition: all ease-in 0.3s;
  padding: 0%;
  /* border-bottom: 2px solid rgba(0, 145, 201, 0.5); */
  border-bottom: 1px dotted #0091c9;
  &:hover {
    border-bottom: 1px dotted #fafafa;
  }
`;

const FooterTagline = styled.span`
  font-size: 1.8rem;
  font-weight: normal;
  padding-top: 1rem;
  padding-bottom: 2.4rem;
  color: #fafafa;
  @media only screen and (max-width: 1000px) {
    margin: 0 auto;
    max-width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span:first-of-type {
      padding-bottom: 0.5rem;
    }

    span:last-of-type {
      padding-top: 0.5rem;
    }
  }
`;
