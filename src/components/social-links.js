import React from "react";
import styled from "@emotion/styled";
import Icon from "./elements/icon";
import {
  FaGithub,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaFlickr,
  FaInstagram,
} from "react-icons/fa";
import { IconContext } from "react-icons";

const SocialLinks = () => (
  <IconContext.Provider value={{ color: "var(--primary-color)", size: "24px" }}>
    <LinkContainer>
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
        href="https://www.flickr.com/photos/digitalharbor/albums/72157714851026012"
        aria-label="Find Digital Harbor Foundation on Flickr"
        target="_blank"
        rel="nofollow noopener"
      >
        {/* <Icon color="var(--primary-color)" type="flickr" /> */}
        <FaFlickr></FaFlickr>
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
