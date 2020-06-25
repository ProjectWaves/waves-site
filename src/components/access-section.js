import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Waypoint } from "react-waypoint";
import Img from "gatsby-image";
import { css } from "@emotion/core";
import { useSpring, animated, config } from "react-spring";

const AccessSection = () => {
  const { accessPointImage } = useStaticQuery(
    graphql`
      query {
        accessPointImage: file(relativePath: { eq: "keytech-install.jpg" }) {
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

  const enterLeft = useSpring({
    opacity: on ? 1 : 0,
    transform: on ? `translate3d(0,0,0)` : `translate3d(-100%, 0, 0)`,
    config: { mass: 1.25, tension: 70, friction: 20 },
  });

  return (
    <React.Fragment>
      <Waypoint
        bottomOffset="50%"
        onEnter={() => {
          if (!on) toggle(true);
        }}
      />
      <section
        css={css`
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-row-gap: 1rem;
          grid-template-areas: "photo copy";
          min-height: 40vh;
          background: #fff;
          margin: 10rem 5rem;

          @media only screen and (max-width: 1000px) {
            margin: 2rem;
            grid-template-columns: 1fr;
            grid-template-areas:
              "photo"
              "copy";
          }

          img {
            margin-bottom: 0 !important;
          }
        `}
        // style={enterLeft}
        id="access-section"
      >
        <div
          css={css`
            width: 100%;
            height: 100%;
            justify-self: start;
            grid-area: photo;
          `}
        >
          <Img
            fluid={accessPointImage.childImageSharp.fluid}
            css={css`
              border-radius: 8px;
              box-shadow: 0px 5px 10px rgba(123, 167, 255, 0.4);
              object-fit: cover;
            `}
          />
        </div>

        <div
          css={css`
            display: flex;
            flex-direction: column;
            margin: 0 auto;
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
            Connecting Communities Across Baltimore
          </h2>
          <p
            css={css`
              font-size: 2rem;
              padding-top: 0;
              padding-bottom: 1.5rem;
              padding-left: 4rem;
              padding-right: 4rem;
              color: #222;
              @media only screen and (max-width: 1000px) {
                padding: 0;
                padding-top: 2rem;
              }
            `}
          >
            Waves is a Community ISP focused on providing Internet access to
            all. Over one third of the Baltimore City population is without
            Internet access. Waves builds relationships with community
            organizers across the city and focus on lighting up access to
            residential areas that are classified as Internet Deserts.
          </p>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AccessSection;
