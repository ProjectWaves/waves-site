import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { css, jsx } from '@emotion/core';
import { useSpring, animated, config } from 'react-spring';
import styled from '@emotion/styled';

const AccessSection = () => {
  const { accessPointImage } = useStaticQuery(
    graphql`
      query {
        accessPointImage: file(relativePath: { eq: "waves-access-point.jpg" }) {
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
    <SectionContainer id="access-section">
      <div
        css={css`
          width: 100%;
          height: 80%;
        `}
      >
        <Img
          fluid={accessPointImage.childImageSharp.fluid}
          css={css`
            border-radius: 8px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
            width: 100%;
            height: 100%;
            object-fit: cover;
          `}
        />
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 40%;
          /* background: rgba(0, 0, 0, 0.3); */
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
          Internet Access is a Human Right
        </h2>
        <p
          css={css`
            font-size: 2rem;
            padding: 0 4rem;
            @media only screen and (max-width: 1000px) {
              padding: 0;
            }
          `}
        >
          Waves not only stands for Net Neutrality, but is committed to making
          all members of the network aware of any potential changes.{' '}
        </p>
      </div>
    </SectionContainer>
  );
};

export default AccessSection;

const SectionContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  min-height: 40vh;
  background: #fff;
  /* background: blue; */
  margin: 4rem 5rem;

  @media only screen and (max-width: 1000px) {
    margin-top: 0;
    grid-template-columns: 1fr;
  }
`;
