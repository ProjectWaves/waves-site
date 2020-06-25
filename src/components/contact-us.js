import React from "react";
import { css } from "@emotion/core";

const ContactUs = () => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      width: 100%;
      padding-bottom: 1rem;
    `}
  >
    <h3
      css={css`
        font-size: 2.4rem;
        font-weight: 300;
        padding-bottom: 1.5rem;
        margin: 0;
        color: #e5f8ff;
      `}
    >
      Contact Us
    </h3>
    <p
      css={css`
        font-size: 1.6rem;
        line-height: 2.7rem;
        font-weight: 400;
        padding: 0;
        margin: 0;
        color: #e5f8ff;
      `}
    >
      Fiscal Sponsor
      <br />
      Digital Harbor Foundation
      <br />
      1045 Light St. Baltimore, MD 21230
      <br />
      <br />
    </p>
    <a
      css={css`
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
      `}
      href="mailto: contact@projectwaves.net"
      target="_top"
    >
      contact@projectwaves.net
    </a>
  </div>
);

export default ContactUs;
