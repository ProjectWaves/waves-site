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
        cardImageOne: file(relativePath: { eq: "waves-access-point.jpg" }) {
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
        min-height: 40vh;
      `}
    >
      <Card
        fluid={cardImageOne.childImageSharp.fluid}
        title={'ASDF'}
        copy={'ADSFASDFADSF'}
      />
    </section>
  );
};

export default CardSection;
