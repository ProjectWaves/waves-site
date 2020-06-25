import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import lakelandLogo from "../../src/images/lakeland-steam-logo-white.png";
import dhfLogo from "../../src/images/dhf-longform-lockup-white.png";
import fullblastLogo from "../../src/images/full-blast-steam-logo-white.png";
import citySchoolsLogo from "../../src/images/city-schools-logo-white.png";
import { css } from "@emotion/core";

const PartnersSection = () => {
  return (
    <section
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: #000;
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
            color: white;
            margin-bottom: 0;
            text-align: center;
            @media only screen and (max-width: 1000px) {
              padding: 0;
              padding-top: 2rem;
              margin: 0;
            }
          `}
        >
          Partners
        </h2>
        <span
          css={css`
            font-size: 2rem;
            padding-top: 0;
            padding-bottom: 2rem;
            color: #f7fafc;
            @media only screen and (max-width: 1000px) {
              padding: 0;
              margin: 0;
            }
          `}
        >
          Partner organizations working to bridge the Digital Divide across
          Baltimore
        </span>
      </div>
      <div
        css={css`
          display: grid;

          grid-template-columns: 1fr 1fr 1fr 1fr;
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
            src={lakelandLogo}
          />
        </div>
        <div
          css={css`
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
            src={dhfLogo}
          />
        </div>
        <div
          css={css`
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
            src={fullblastLogo}
          />
        </div>
        <div
          css={css`
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
            src={citySchoolsLogo}
          />
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
