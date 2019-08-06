import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { css } from '@emotion/core';
import { useSpring, animated, config } from 'react-spring';

const DigitalStewardsSection = () => {
  const { digitalStewardsImage } = useStaticQuery(
    graphql`
      query {
        digitalStewardsImage: file(
          relativePath: { eq: "digital-stewards.jpg" }
        ) {
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
        margin: 4rem 5rem;

        @media only screen and (max-width: 1000px) {
          margin-top: 0;
          grid-template-columns: 1fr;
        }
      `}
      id="digital-stewards-section"
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          /* align-items: center; */
          justify-content: center;
          height: 40%;
          margin: 0 auto;
        `}
      >
        <h2
          css={css`
            font-size: 4rem;
            padding: 0;
            @media only screen and (max-width: 1000px) {
              padding: 0;
              margin: 0;
            }
          `}
        >
          Community Focused Digital Stewards
        </h2>
        <p
          css={css`
            font-size: 2rem;
            padding-top: 0;
            padding-bottom: 1.5rem;
            padding-right: 4rem;
            color: #222;
            @media only screen and (max-width: 1000px) {
              padding: 0;
            }
          `}
        >
          Digital Stewards are selected and trained commuity leaders and are the
          crucial human infrastructure of Waves.
        </p>
      </div>
      <div
        css={css`
          width: 100%;
          height: 100%;
        `}
      >
        <Img
          fluid={digitalStewardsImage.childImageSharp.fluid}
          css={css`
            border-radius: 8px;
            box-shadow: 0px 5px 10px rgba(123, 167, 255, 0.4);
            width: 100%;
            height: 100%;
            object-fit: cover;
          `}
        />
      </div>
    </section>
  );
};

export default DigitalStewardsSection;
