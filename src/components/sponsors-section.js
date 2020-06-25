import React from "react";
import { Link } from "gatsby";
import nsfLogo from "../../src/images/nsf-logo-black.png";
import abellFoundationLogo from "../../src/images/abell-foundation-logo-black.png";
import goldsekerLogo from "../../src/images/goldseker-logo-black.png";
import franceMerrickLogo from "../../src/images/france-merrick-logo-black.png";
import zenimaxLogo from "../../src/images/zenimax-logo-black.png";
import { css } from "@emotion/core";

const SponsorsSection = () => {
  return (
    <section
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: #f0f4f8;
        padding: 4rem 4rem;
        width: 100%;
      `}
    >
      <div
        css={css`
          flex-direction: column;
          align-items: center;
          justify-content: center;
        `}
      >
        <h2
          css={css`
            font-size: 4rem;
            color: black;
            margin-bottom: 0;
            text-align: center;
            @media only screen and (max-width: 1000px) {
              padding: 0;
              padding-top: 2rem;
              margin: 0;
            }
          `}
        >
          Sponsors
        </h2>
        <span
          css={css`
            font-size: 2rem;
            padding-top: 0;
            padding-bottom: 2rem;
            color: #333;
            @media only screen and (max-width: 1000px) {
              padding: 0;
              margin: 0;
            }
          `}
        >
          We would like to thank our generous supporters who have helped us grow
          and kept our core operations running. <Link to="/donate">Donate</Link>{" "}
          to Project Waves and help propel our mission for equitable &
          accessible internet forward!
        </span>
      </div>
      <div
        css={css`
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-gap: 2rem;
          padding: 4rem 0;
          @media only screen and (max-width: 1000px) {
            grid-template-columns: 1fr;
            margin: 0 auto;
          }
        `}
      >
        <div
          css={css`
            max-width: 75%;
            margin-right: 2rem;
            @media only screen and (max-width: 1000px) {
              max-width: 100%;
              margin-right: 0;
            }
          `}
        >
          <img
            css={css`
              width: 100%;
              height: 100%;
              max-width: 100%;
              object-fit: contain;
              @media only screen and (max-width: 1000px) {
                margin-right: 0;
              }
            `}
            src={nsfLogo}
          />
        </div>
        <div
          css={css`
            max-width: 75%;
            margin-right: 2rem;
            @media only screen and (max-width: 1000px) {
              max-width: 100%;
              margin-right: 0;
            }
          `}
        >
          <img
            css={css`
              width: 100%;
              height: 100%;
              max-width: 100%;
              object-fit: contain;
            `}
            src={abellFoundationLogo}
          />
        </div>
        <div
          css={css`
            max-width: 75%;
            margin-right: 2rem;
            @media only screen and (max-width: 1000px) {
              max-width: 100%;
              margin-right: 0;
            }
          `}
        >
          <img
            css={css`
              width: 100%;
              height: 100%;
              max-width: 100%;
              object-fit: contain;
            `}
            src={goldsekerLogo}
          />
        </div>
        <div
          css={css`
            max-width: 75%;
            @media only screen and (max-width: 1000px) {
              max-width: 100%;
              margin-right: 0;
            }
          `}
        >
          <img
            css={css`
              width: 100%;
              height: 100%;
              max-width: 100%;
              object-fit: contain;
              @media only screen and (max-width: 1000px) {
                max-width: 100%;
                margin-right: 0;
              }
            `}
            src={franceMerrickLogo}
          />
        </div>
        <div
          css={css`
            max-width: 75%;
            @media only screen and (max-width: 1000px) {
              max-width: 100%;
              margin-right: 0;
            }
          `}
        >
          <img
            css={css`
              width: 100%;
              height: 100%;
              max-width: 100%;
              object-fit: contain;
              @media only screen and (max-width: 1000px) {
                max-width: 100%;
                margin-right: 0;
              }
            `}
            src={zenimaxLogo}
          />
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
