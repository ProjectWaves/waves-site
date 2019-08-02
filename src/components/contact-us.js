import React from 'react';
import styled from '@emotion/styled';

const ContactUs = () => (
  <ContactWrapper>
    <ContactHeading>Contact Us</ContactHeading>
    <ContactCopy>
      Digital Harbor Foundation
      <br />
      1045 Light St. Baltimore, MD 21230
      <br />
      443-681-9384
      <br />
    </ContactCopy>
    <ContactLink href="mailto: contact@projectwaves.net" target="_top">
      contact@projectwaves.net
    </ContactLink>
  </ContactWrapper>
);

export default ContactUs;

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 1rem;
`;

const ContactHeading = styled.h3`
  font-size: 2.4rem;
  font-weight: 300;
  padding-bottom: 1.5rem;
  margin: 0;
  color: #e5f8ff;
`;

const ContactCopy = styled.p`
  font-size: 1.8rem;
  line-height: 2.7rem;
  font-weight: 400;
  padding: 0;
  margin: 0;
  color: #e5f8ff;
`;

const ContactLink = styled.a`
  color: #0091c9;
  font-size: 2rem;
  padding: 2rem 0;
  text-decoration: none;
  transition: all ease-in-out 0.3s;
  &:hover {
    color: #fafafa;
    opacity: 0.75;
    cursor: pointer;
  }
`;
