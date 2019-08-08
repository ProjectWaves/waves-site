import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Waypoint } from 'react-waypoint';
import { css } from '@emotion/core';
import { useSpring, animated, config } from 'react-spring';
import Card from '../components/card';

const CardSection = () => {
  const [on, toggle] = useState(false);

  const enterUpward = useSpring({
    opacity: on ? 1 : 0,
    transform: on ? `translate3d(0,0,0)` : `translate3d(0, 100%, 0)`,
  });

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
    <React.Fragment>
      <Waypoint
        bottomOffset="50%"
        onEnter={() => {
          if (!on) toggle(true);
        }}
      />
      <animated.section
        css={css`
          /* background: #f0f4f8; */
          background: #fff;
          padding: 8rem 4rem;
          min-height: 40vh;
          margin-top: -20vh;
          @media only screen and (max-width: 1000px) {
            margin: 0 auto;
          }
        `}
        style={enterUpward}
      >
        <h2
          css={css`
            padding-bottom: 2rem;
            font-size: 6rem;
            text-align: center;
          `}
        >
          Waves Core Values
        </h2>
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
            linkTo="/why-internet-matters"
          />
          <Card
            fluid={cardTwoImage.childImageSharp.fluid}
            title={'Bridge the Digital Divide'}
            copy={`Per the Deutsch Foundation's Digital Access and Equity Report for Baltimore City 2017 report, 75,000 homes lack internet access.`}
            linkTo="/bridge-the-digital-divide"
          />
          <Card
            fluid={cardThreeImage.childImageSharp.fluid}
            title={'Availability ≠ Accessibility'}
            copy={`Comcast is available throughout Baltimore, however their pricing makes them inaccessible to many families.`}
            linkTo="/availability-is-not-accessibility"
          />
        </div>
      </animated.section>
    </React.Fragment>
  );
};

export default CardSection;
