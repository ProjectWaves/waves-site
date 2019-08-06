import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { useSpring, animated, config } from 'react-spring';
import Iframe from 'react-iframe';
import { Waypoint } from 'react-waypoint';

const ResearchSection = () => {
  const [on, setToggle] = useState(false);

  const enterAnimation = useSpring({
    opacity: on ? 1 : 0,
    background: on ? 'red' : 'blue',
    config: config.default,
  });

  const { researchImage } = useStaticQuery(
    graphql`
      query {
        researchImage: file(
          relativePath: { eq: "deutsch-foundation-2017-report.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1000, maxHeight: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );
  const { opacity, transform } = useSpring({
    opacity: on ? 1 : 0,
    transform: on ? `translate3d(0, 0, 0)` : `translate3d(0, 100%, 0)`,
    config: { mass: 1, tension: 170, friction: 26 },
  });

  return (
    <React.Fragment>
      <Waypoint onEnter={() => console.log('waypoint hit')} />
      <AnimatedSectionContainer
        style={{ opacity: opacity }}
        id="research-section"
      >
        <animated.div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 5rem 10rem;
            margin: 0 auto;
            width: 60%;
            min-height: 300px;
            /* max-height: 70vh; */
            /* margin-top: -15rem; */
            /* margin-bottom: 15rem; */
            border-radius: 32px;
            background: #000;

            @media only screen and (max-width: 1000px) {
              width: 90%;
              margin: 0 auto;
            }
          `}
          style={{ transform: transform }}
        >
          <h2
            css={css`
              color: var(--primary-color);
              font-size: 4rem;
              margin: 0;
              padding-bottom: 5rem;
            `}
          >
            Get the Facts
          </h2>
          <div
            css={css`
              width: 100%;
              height: 100%;
            `}
          >
            <Img
              fluid={researchImage.childImageSharp.fluid}
              css={css`
                border-radius: 8px;
                box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
                width: 100%;
                height: 100%;
                object-fit: cover;
              `}
            />
          </div>
          <p
            css={css`
              color: #f0f4f8;
              font-size: 2rem;
              line-height: 3rem;
            `}
          >
            Comcast is available throughout Baltimore, however their pricing
            makes them inaccessible to many families. Per the Deutsch Foundation
            Digital Access and Equity Report for Baltimore City 2017 report,
            75,000 homes lack internet access.
          </p>
          <a
            href="https://www.rwdfoundation.org/news/2017/10/19/the-digital-access-and-equity-report-in-baltimore-city-2017"
            target="_blank"
            rel="noopener noreferrer"
            css={css`
              color: #fff;
            `}
          >
            <button
              css={css`
                text-transform: none;
                font-size: 2rem;
                color: var(--primary-color);
                border: 2px solid;
                border-color: var(--primary-color);
                background: none;
                border-radius: 16px;
                padding: 1rem 2rem;
                max-width: 800px;
                transition: all ease-in-out 250ms;

                @media only screen and (max-width: 1000px) {
                  margin-top: 8rem;
                  max-width: 100%;
                }

                &:hover {
                  color: #ffffff;
                  border: 2px solid #ffffff;
                  cursor: pointer;
                  transform: translate3d() ();
                }
              `}
            >
              View the Report Now
            </button>
          </a>
        </animated.div>
      </AnimatedSectionContainer>
    </React.Fragment>
  );
};

export default ResearchSection;

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 30vh;
  padding: 5rem 0;
  /* background: #000000; */
  background: #73c8a9; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #373b44,
    #73c8a9
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #373b44,
    #73c8a9
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  @media only screen and (max-width: 1000px) {
    margin-top: 0;
  }
`;

const AnimatedSectionContainer = animated(SectionContainer);
