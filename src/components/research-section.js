import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { useSpring, animated, config } from 'react-spring';
import Iframe from 'react-iframe';

const ResearchSection = () => {
  const { researchImage } = useStaticQuery(
    graphql`
      query {
        researchImage: file(
          relativePath: { eq: "deutsch-foundation-2017-report.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );
  const fadeInSection = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 1000,
  });

  return (
    <AnimatedSectionContainer style={fadeInSection} id="research-section">
      {/* <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem 10rem;
          width: 70%;
          min-height: 600px;
          margin-top: -15rem;

          border-radius: 32px;
          background: #273041;

          @media only screen and (max-width: 1000px) {
            width: 90%;
            margin: 0 auto;
          }
        `}
      >
        <h2
          css={css`
            color: #f0f4f8;
            font-size: 4rem;
          `}
        >
          Get the Facts
        </h2>
        <p
          css={css`
            color: #f0f4f8;
            font-size: 2rem;
            line-height: 3rem;
          `}
        >
          Comcast is available throughout Baltimore, however their pricing makes
          them inaccessible to many families. Per the Deutsch Foundation Digital
          Access and Equity Report for Baltimore City 2017 report, 75,000 homes
          lack internet access.
        </p>
        <Iframe
          url="https://www.rwdfoundation.org/news/2017/10/19/the-digital-access-and-equity-report-in-baltimore-city-2017"
          width="100%"
          height="600px"
          css={css`
            border-radius: 1rem;
            border: none;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
              0 3px 6px rgba(0, 0, 0, 0.23);
            margin-bottom: 5rem;
          `}
        />
        <a
          href="https://www.rwdfoundation.org/news/2017/10/19/the-digital-access-and-equity-report-in-baltimore-city-2017"
          target="_blank"
          rel="noopener noreferrer"
          css={css`
            color: #fff;
          `}
        > */}
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 5rem 10rem;
          width: 70%;
          min-height: 600px;
          margin-top: -15rem;
          margin-bottom: 15rem;
          border-radius: 32px;
          background: #273041;

          @media only screen and (max-width: 1000px) {
            width: 90%;
            margin: 0 auto;
          }
        `}
      >
        <h2
          css={css`
            /* color: #f0f4f8; */
            color: var(--primary-color);
            font-size: 4rem;
            margin: 0;
            padding-bottom: 5rem;
          `}
        >
          Get the Facts
        </h2>
        <Img
          fluid={researchImage.childImageSharp.fluid}
          css={css`
            border-radius: 8px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
            width: 100%;
            height: 100%;
            max-height: 800px;
            object-fit: cover;
          `}
        />

        <p
          css={css`
            color: #f0f4f8;
            font-size: 2rem;
            line-height: 3rem;
          `}
        >
          Comcast is available throughout Baltimore, however their pricing makes
          them inaccessible to many families. Per the Deutsch Foundation Digital
          Access and Equity Report for Baltimore City 2017 report, 75,000 homes
          lack internet access.
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
      </div>
    </AnimatedSectionContainer>
  );
};

export default ResearchSection;

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 40vh;
  background: #000000;

  @media only screen and (max-width: 1000px) {
    margin-top: 0;
  }
`;

const AnimatedSectionContainer = animated(SectionContainer);
