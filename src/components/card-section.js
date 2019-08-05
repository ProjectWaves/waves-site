import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { css } from '@emotion/core';
import { useSpring, animated, config } from 'react-spring';
import Card from '../components/card';

const CardSection = () => {
  const { cardOneImage, cardTwoImage, cardThreeImage } = useStaticQuery(
    graphql`
      query {
        cardOneImage: file(relativePath: { eq: "save-the-net-protest.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000, maxHeight: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        cardTwoImage: file(
          relativePath: { eq: "bridge-the-digital-divide.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1000, maxHeight: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        cardThreeImage: file(
          relativePath: { eq: "kholodnitskiy-maksim-railroad-unsplash.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1000, maxHeight: 800) {
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
        background: #f0f4f8;
        padding: 2rem 4rem;
        min-height: 40vh;
        margin-top: -20vh;
        @media only screen and (max-width: 1000px) {
          margin: 0 auto;
        }
      `}
    >
      <div
        css={css`
          display: grid;
          grid-template-columns: repeat(3, minmax(400px, 1fr));
          grid-column-gap: 2rem;
          margin: 0 auto;

          @media only screen and (max-width: 1000px) {
            grid-template-columns: 1fr;
            grid-gap: 2rem;
          }
        `}
      >
        <Card
          fluid={cardOneImage.childImageSharp.fluid}
          title={'Why Internet Matters'}
          copy={
            'Waves not only stands for Net Neutrality, but is committed to making all members of the network aware of any potential changes.'
          }
          linkTo="/why-intenret-matters"
        />
        <Card
          fluid={cardTwoImage.childImageSharp.fluid}
          title={'Bridge the Digital Divide'}
          copy={`Per the Deutsch Foundation's Digital Access and Equity Report for Baltimore City 2017 report, 75,000 homes lack internet access.`}
          featured
        />
        <Card
          fluid={cardThreeImage.childImageSharp.fluid}
          title={'Availability ≠ Accessibility'}
          copy={`Comcast is available throughout Baltimore, however their pricing makes them inaccessible to many families.`}
        />
      </div>
    </section>
  );
};

export default CardSection;
