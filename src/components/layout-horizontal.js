import React from 'react';
import { css } from '@emotion/core';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const LayoutHorizontal = ({ titleMdx, copyMdx, imgSrc }) => {
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
    <React.Fragment>
      <section
        css={css`
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-areas: 'photo copy';

          background: #fff;
          margin: 10rem 5rem;

          @media only screen and (max-width: 1000px) {
            margin: 2rem;
            grid-template-columns: 1fr;
            grid-template-areas:
              'photo'
              'copy';
          }
        `}
        // style={enterLeft}
        id="litebeam-product-section"
      >
        <div
          css={css`
            width: 100%;
            height: 100%;
            grid-area: photo;
            justify-self: start;
          `}
        >
          <Img
            fluid={litebeamImage.childImageSharp.fluid}
            css={css`
              border-radius: 8px;
              box-shadow: 0px 5px 10px rgba(123, 167, 255, 0.4);
              width: 100%;
              /* height: 80%; */
              object-fit: cover;
            `}
          />
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            grid-area: copy;
          `}
        >
          <h2
            css={css`
              font-size: 4rem;
              padding: 0 4rem;
              @media only screen and (max-width: 1000px) {
                padding: 0;
                padding-top: 2rem;
                margin: 0;
              }
            `}
          >
            {titleMdx}
          </h2>
          <p
            css={css`
              font-size: 2rem;
              padding-top: 0;
              padding-bottom: 1.5rem;
              padding-left: 4rem;
              color: #222;
              @media only screen and (max-width: 1000px) {
                padding: 0;
                padding-top: 2rem;
                margin: 0;
              }
            `}
          >
            {copyMdx}
          </p>
        </div>
      </section>
    </React.Fragment>
  );
};

export default LayoutHorizontal;
