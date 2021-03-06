import React from "react";
import { css } from "@emotion/core";
import ccLogo from "../../src/images/cc-by-nc-sa.png";

const Footer = () => (
  <footer
    css={css`
      display: flex;
      flex-shrink: 0;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 1);
      /* background: #121212; */
      width: 100%;
    `}
  >
    <div
      css={css`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-bottom: 0.5rem;
      `}
    >
      <span
        css={css`
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
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
          `}
        >
          <span
            css={css`
              font-size: 1.8rem;
              font-weight: normal;
              padding-left: 1rem;
              padding-right: 1rem;
              margin: 0;
              color: #fafafa;
            `}
          >
            © {new Date().getFullYear()}
          </span>
          <div
            css={css`
              display: inline;
              transition: all ease-in 0.3s;
              padding: 0%;
              /* border-bottom: 2px solid rgba(0, 145, 201, 0.5); */
              border-bottom: 1px dotted #0091c9;
              &:hover {
                border-bottom: 1px dotted #fafafa;
              }
            `}
          >
            <a
              css={css`
                color: #0091c9;
                text-decoration: none;
                transition: all ease-in-out 0.3s;
                &:hover {
                  color: #fafafa;
                  cursor: pointer;
                }
              `}
              href="https://projectwaves.net"
              target="_blank"
              rel="noopener"
            >
              Project Waves
            </a>
          </div>
          <span
            css={css`
              font-size: 1.8rem;
              font-weight: normal;
              padding-left: 1rem;
              padding-right: 1rem;
              margin: 0;
              color: #fafafa;
            `}
          >
            {" "}
            Creative Commons
            <br />
          </span>
        </div>
      </span>
      <div
        css={css`
          height: 10%;
          width: 10%;
        `}
      >
        <img src={ccLogo} />
      </div>
    </div>
  </footer>
);

export default Footer;
