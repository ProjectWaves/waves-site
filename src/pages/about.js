import React, { useState } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { css } from '@emotion/core';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated, config } from 'react-spring';
import Layout from '../components/layout';
import { AppWrapper } from '../components/elements/layout-components';
import Header from '../components/header';
import InfoFooter from '../components/info-footer';
import Footer from '../components/footer';

const AboutPage = () => {
  const [on, toggle] = useState(false);

  const enterAnimation = useSpring({
    opacity: on ? 1 : 0,
    transform: on ? `translate3d(0,0,0)` : `translate3d(50%, 0, 0)`,
  });

  const { aboutImageFeatured, adamProfileImage } = useStaticQuery(graphql`
    query {
      aboutImageFeatured: file(relativePath: { eq: "roof-access-point.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      adamProfileImage: file(relativePath: { eq: "adam-profile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const fadeInMessage = useSpring({
    from: {
      opacity: 0,
    },
    to: { opacity: 1 },
    config: { mass: 1.25, tension: 50, friction: 20 },
    delay: 250,
  });

  return (
    <Layout>
      <AppWrapper>
        <Header />
        <div
          css={css`
            width: 100%;
            height: 80vh;

            img {
              margin-bottom: 0 !important;
            }
          `}
        >
          <Img
            fluid={aboutImageFeatured.childImageSharp.fluid}
            alt="Adam on rooftop with an access point directed toward Baltimore City"
            css={css`
              border-radius: 16px 16px 0 0;
              box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
              width: 100%;
              height: 100%;
              object-fit: cover;
              overflow: hidden;
            `}
          />
        </div>
        <main
          css={css`
            max-width: 60%;
            margin: 4rem auto;

            @media only screen and (max-width: 1000px) {
              max-width: 100%;
            }

            h2 {
              color: #000;
              font-size: 4rem;
            }

            p {
              color: #000;
              font-size: 2rem;
              line-height: 3.75rem;
            }
          `}
        >
          <animated.span
            css={css`
              font-style: italic;
              font-size: 2.5rem;
              color: #3a3a3a;
              @media only screen and (max-width: 1000px) {
                display: block;
                font-size: 2rem;
                margin: 2rem;
              }
            `}
            style={fadeInMessage}
          >
            If something is to be truly community-led, the community must come
            together to bridge the inequity.
          </animated.span>
          <hr
            css={css`
              margin: 2rem auto;
              border: 0;
              height: 1px;
              background-image: linear-gradient(
                to right,
                rgba(123, 167, 255, 0),
                rgba(123, 167, 255, 0.75),
                rgba(123, 167, 255, 0)
              );
              box-shadow: 0px 5px 10px rgba(123, 167, 255, 0.4);
            `}
          />
          <article
            css={css`
              max-width: 93.75%;
              margin: 0 auto;
              padding: 4rem;
              border-radius: 1rem;
            `}
          >
            <h2>About Waves</h2>
            <p>
              Roughly one-third of Baltimore City does not have access to
              broadband Internet in their homes. As described in{' '}
              <a
                href="https://www.rwdfoundation.org/news/2017/10/19/the-digital-access-and-equity-report-in-baltimore-city-2017"
                target="_blank"
                rel="noopener noreferrer"
                css={css``}
              >
                The Deutsch Foundation's Digital Access and Equity Report in
                Baltimore City 2017
              </a>
              , the internet is arguably the most important communication tool
              of the 21st century and, therefore, lack of access is a critical
              opportunity gap that disproportionately affects low-income and
              minority households.
            </p>
            <p>
              Waves is our proposed approach to bridge this divide through a community-driven
              network committed to providing highly available, transparent,
              reliable internet to Baltimore.
            </p>
            <h2>From the Waves Team</h2>
            <Waypoint
              debug
              topOffset="30%"
              onEnter={() => {
                if (!on) toggle(true);
              }}
            />
            <animated.section
              css={css`
                display: grid;
                grid-template-columns: 1fr 1fr;
                align-items: center;
                margin: 4rem auto;
                @media only screen and (max-width: 1000px) {
                  margin: 0;
                  grid-template-columns: 1fr;
                }
              `}
              style={enterAnimation}
            >
              <div
                css={css`
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                  height: 40%;
                  margin: 0 auto;
                `}
              >
                <p>
                  My name is Adam Bouhmad, and I founded Waves in response to
                  the repeal of Net Neutrality back in 2018. Recently, the UN
                  declared that Internet access is a human right -- Internet
                  access is paramount to succeed in today’s society.
                </p>
              </div>
              <div
                css={css`
                  width: 100%;
                  height: 100%;
                  @media only screen and (max-width: 1000px) {
                    padding: 4rem 0;
                  }
                `}
              >
                <Img
                  fluid={adamProfileImage.childImageSharp.fluid}
                  css={css`
                    border-radius: 8px;
                    box-shadow: 0px 5px 10px rgba(123, 167, 255, 0.4);
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    margin-left: 2rem;

                    @media only screen and (max-width: 1000px) {
                      margin: 0;
                    }
                  `}
                />
              </div>
            </animated.section>
            <p>
              Susan Crawford has written and spoken extensively how the US has
              fallen far behind the rest of the industrialized nations in terms
              of public access to Broadband Internet because of the monopolistic
              practices of companies like Comcast, Time Warner, AT&T, and
              Verizon.
            </p>
            <blockquote
              css={css`
                font-size: 2rem;
                color: #121212;
                line-height: 3rem;
                font-weight: 300;
                margin: 2rem;
                padding-left: 2rem;
                border-left: 2px solid var(--primary-color);
              `}
            >
              “The rich are getting gouged, the poor are very often left out,
              and this means that we’re creating, yet again, two Americas, and
              deepening inequality through this communications inequality,” -
              Susan Crawford
            </blockquote>
            <p>
              Providing a service is one thing. Comcast claims they’re available
              throughout the city, and to be fair, they are. Thanks to the 2016
              Comcast Franchise Agreement with Baltimore City, Comcast is
              available throughout the city. However, there is a big difference
              between availability and accessibility -- availability does not
              equal accessibility in terms of pricing and quality of service.
              Waves is a response to this; the lack of equitable internet
              choices in Baltimore paired with the unruly price gouging these
              providers engage in.
            </p>
            <div>
              <p>
                When folks talk about 21st-century skills, the fascinating thing
                is that we’re already 20% of the way into the 21st century.
                We’ve talked about the problem for decades, but let's start
                focusing on solutions. Together, we can build out community
                wireless across Baltimore where the main focus isn’t
                profitability -- but rather the human aspect.
              </p>
            </div>
          </article>
        </main>
        <InfoFooter />
        <Footer />
      </AppWrapper>
    </Layout>
  );
};

export default AboutPage;
