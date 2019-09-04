import React from 'react';
import styled from '@emotion/styled';
import Icon from './elements/icon';
import {
  FaGithub,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaFlickr,
  FaInstagram,
} from 'react-icons/fa';
import { IconContext } from 'react-icons';

const SocialLinks = () => (
  <IconContext.Provider value={{ color: 'var(--primary-color)', size: '24px' }}>
    <LinkContainer>
      <a
        href="https://github.com/ProjectWaves"
        aria-label="Find Waves on GitHub"
        target="_blank"
        rel="nofollow noopener"
      >
        {/* <Icon color="var(--primary-color)" type="github" /> */}
        <FaGithub />
      </a>

      <a
        href="https://www.facebook.com/DigitalHarbor"
        aria-label="Find Digital Harbor Foundation on Facebook"
        target="_blank"
        rel="nofollow noopener"
      >
        {/* <Icon color="var(--primary-color)" type="facebook" /> */}
        <FaFacebookF />
      </a>

      <a
        href="https://twitter.com/WavesMesh"
        aria-label="Find Waves on Twitter"
        target="_blank"
        rel="nofollow noopener"
      >
        {/* <Icon color="var(--primary-color)" type="twitter" /> */}
        <FaTwitter></FaTwitter>
      </a>
      <a
        href="https://www.youtube.com/user/DHFBaltimore"
        aria-label="Find Digital Harbor Foundation on YouTube"
        target="_blank"
        rel="nofollow noopener"
      >
        {/* <Icon color="var(--primary-color)" type="youtube" /> */}
        <FaYoutube></FaYoutube>
      </a>
      <a
        href="https://www.flickr.com/photos/digitalharbor/"
        aria-label="Find Digital Harbor Foundation on Flickr"
        target="_blank"
        rel="nofollow noopener"
      >
        {/* <Icon color="var(--primary-color)" type="flickr" /> */}
        <FaFlickr></FaFlickr>
      </a>
      <a
        href="https://www.instagram.com/dhfbaltimore/"
        aria-label="Find Digital Harbor Foundation on Instagram"
        target="_blank"
        rel="nofollow noopener"
      >
        {/* <Icon color="var(--primary-color)" type="instagram" /> */}
        <FaInstagram></FaInstagram>
      </a>
    </LinkContainer>
  </IconContext.Provider>
);

export default SocialLinks;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  a {
    padding: 1rem;
  }

  path:hover {
    fill: #ffffff;
    transition: all 0.3s ease-in-out;
    pointer-events: all;
  }
`;
