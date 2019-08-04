import React from 'react';
import styled from '@emotion/styled';
import SocialLinks from './social-links';
import ContactUs from './contact-us';

const InfoFooter = () => (
  <FooterWrapper>
    <FooterContentWrapper>
      <ContactUs />
      <SocialLinks />
    </FooterContentWrapper>
  </FooterWrapper>
);

export default InfoFooter;

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 3rem 0;
  margin: 0 auto;
  background: rgba(0, 0, 0, 1);
  width: 100%;
`;

const FooterContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: space-between;
  width: 80%;
  margin: 0 auto;
  border-bottom: 1px solid #e5f8ff;
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

const FooterLink = styled.a`
  color: #0091c9;
  text-decoration: none;
  transition: all ease-in-out 0.3s;
  &:hover {
    color: #e5f8ff;
    opacity: 0.75;
    cursor: pointer;
  }
`;

const FooterLinkContainer = styled.div`
  display: inline;
  transition: all ease-in 0.3s;
  padding: 0%;
  border-bottom: 2px solid rgba(0, 145, 201, 0.5);
  &:hover {
    background: rgba(0, 145, 201, 0.5);
    border-bottom: none;
  }
`;

const FooterTagline = styled.span`
  font-size: 2rem;
  font-weight: normal;
  padding: 2.4rem 0;
  color: #e5f8ff;
`;
