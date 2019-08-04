import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { css } from '@emotion/core';
import { useSpring, animated, config } from 'react-spring';

const LiteBeamProductSection = () => {
  const { litebeamImage } = useStaticQuery(
    graphql`
      query {
        litebeamImage: file(relativePath: { eq: "litebeam.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000, maxHeight: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );
  return (
    <section
      css={css`
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        min-height: 40vh;
        background: #fff;
        margin: 5rem 5rem;

        @media only screen and (max-width: 1000px) {
          margin-top: 0;
          grid-template-columns: 1fr;
        }
      `}
      id="litebeam-product-section"
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 40%;
          margin: 0 auto;
        `}
      >
        <h2
          css={css`
            font-size: 4rem;
            padding: 0 4rem;
            @media only screen and (max-width: 1000px) {
              padding: 0;
              margin: 0;
            }
          `}
        >
          Pricing Should Never Be the Barrier to Access
        </h2>
        <p
          css={css`
            font-size: 2rem;
            padding-top: 0;
            padding-bottom: 1.5rem;
            padding-left: 4rem;
            padding-right: 4rem;
            color: #222;
            @media only screen and (max-width: 1000px) {
              padding: 0;
            }
          `}
        >
          $120 install fee.
          <br />
          Minimum $5 donation per month.
        </p>
        <button
          css={css`
            text-transform: none;
            font-size: 2rem;
            /* background: var(--primary-color); */
            background: #000;
            color: #fff;
            border: 2px solid;
            border-color: #000;
            /* border-color: var(--primary-color); */
            border-radius: 16px;
            padding: 1rem 2rem;
            max-width: 800px;
            transition: all ease-in-out 500ms;

            @media only screen and (max-width: 1000px) {
              margin-top: 8rem;
              max-width: 100%;
            }

            &:hover {
              color: #ffffff;

              background: #243b53;
              border: 2px solid;
              border-color: #243b53;
              cursor: pointer;
            }
          `}
        >
          Learn More
        </button>
      </div>
      <div
        css={css`
          width: 100%;
          height: 100%;
        `}
      >
        <Img
          fluid={litebeamImage.childImageSharp.fluid}
          css={css`
            border-radius: 8px;
            box-shadow: 0px 5px 10px rgba(123, 167, 255, 0.4);
            width: 100%;
            height: 80%;
            object-fit: cover;
          `}
        />
      </div>
    </section>
  );
};

export default LiteBeamProductSection;
