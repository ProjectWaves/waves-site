import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { css } from '@emotion/core';
import { useSpring, animated, config } from 'react-spring';
import styled from '@emotion/styled';

const ConnectedSection = () => {
  // const { saveTheNetImage } = useStaticQuery(
  //   graphql`
  //     query {
  //       saveTheNetImage: file(
  //         relativePath: {
  //           eq: "Open-Internet-4-All-Hashtag-Backbone-Campaign-flickr.jpg"
  //         }
  //       ) {
  //         childImageSharp {
  //           fluid(maxWidth: 1000, maxHeight: 300) {
  //             ...GatsbyImageSharpFluid
  //           }
  //         }
  //       }
  //     }
  //   `
  // );

  const { noNetDinoImage } = useStaticQuery(
    graphql`
      query {
        noNetDinoImage: file(relativePath: { eq: "no-net-dino-1.jpg" }) {
          childImageSharp {
            fixed(width: 800, height: 600) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  );
  const fadeInSection = useSpring({
    from: { opacity: 0, transform: 'translate3d(0%,50%,0)' },
    to: { opacity: 1, transform: 'translate3d(0%, 0%, 0%' },
    config: { mass: 1, tension: 100, friction: 20 },
  });

  const fadeInOneSecond = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 1000,
  });

  return (
    <AnimatedSectionContainer style={fadeInSection} id="connected-section">
      <h2
        css={css`
          font-size: 3.5rem;
          color: #000;
          padding: 0;
          margin: 0;
          z-index: 1000;
        `}
      >
        Availability ≠{' '}
        <span
          css={css`
            color: var(--primary-color);
          `}
        >
          Accessibility
        </span>
      </h2>
      {/* <animated.p
        css={css`
          padding-top: 2rem;
          font-size: 2.5rem;
          font-weight: lighter;
        `}
        style={fadeInOneSecond}
      >
        75,000 Baltimore homes without access. Let's start connecting people.
      </animated.p> */}
      <div
        css={css`
          width: 100%;
          min-height: 200px;
          margin-top: 2rem;
          margin-bottom: 2rem;
          border-radius: 32px;
          z-index: 2000;
        `}
      >
        <div
          css={css`
            width: 100%;
          `}
        >
          <div
            css={css`
              width: 100%;
              height: 100%;
            `}
          >
            <Img
              fixed={noNetDinoImage.childImageSharp.fixed}
              css={css`
                border-radius: 8px;
                box-shadow: 0px 5px 10px rgba(123, 167, 255, 0.4);
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
              margin-top: 2rem;
            `}
          >
            <p
              css={css`
                color: #f0f4f8;
                font-size: 2rem;
                line-height: 3rem;
                font-size: 2rem;
                color: #000;
                z-index: 1000;
              `}
            >
              Comcast is available throughout Baltimore, however their pricing
              makes them inaccessible to many families. Per the Deutsch
              Foundation Digital Access and Equity Report for Baltimore City
              2017 report, 75,000 homes lack internet access.
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
        </div>
      </div>
    </AnimatedSectionContainer>
  );
};

export default ConnectedSection;

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 20vh;
  z-index: 1000;
  margin-top: 0;
  @media only screen and (max-width: 1000px) {
    margin-top: 0;
  }
`;

const AnimatedSectionContainer = animated(SectionContainer);
