import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Waypoint } from "react-waypoint";
import Img from "gatsby-image";
import { css } from "@emotion/core";
import { useSpring, animated, config } from "react-spring";

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
  const [on, toggle] = useState(false);

  const enterRight = useSpring({
    opacity: on ? 1 : 0,
    transform: on ? `translate3d(0,0,0)` : `translate3d(100%, 0, 0)`,
  });

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
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-areas: "copy photo";

          min-height: 40vh;
          background: #fff;
          margin: 4rem 5rem;

          @media only screen and (max-width: 1000px) {
            margin: 2rem;
            grid-template-columns: 1fr;
            grid-template-areas:
              "photo"
              "copy";
          }
        `}
        // style={enterRight}
        id="digital-stewards-section"
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
            justify-self: start;
            margin: 0 auto;
            grid-area: copy;
          `}
        >
          <h2
            css={css`
              font-size: 4rem;
              padding: 0;
              @media only screen and (max-width: 1000px) {
                padding: 0;
                padding-top: 2rem;
                margin: 0;
              }
            `}
          >
            Democratizing Access to Information
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
                padding-top: 2rem;
                margin: 0;
              }
            `}
          >
            From Southern Park Heights all the way to Lakeland, Waves is comprised of Community Leaders, Activists, and Technologists from across Baltimore City.
            We're passionate about democratizing access in the very
            neighborhoods we live in and serve. The Waves team is trained to
            coordinate installations, do community outreach, and run
            digital equity meetups.
          </p>
        </div>
        <div
          css={css`
            width: 100%;
            height: 100%;
            grid-area: photo;
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
      </animated.section>
    </React.Fragment>
  );
};

export default DigitalStewardsSection;
