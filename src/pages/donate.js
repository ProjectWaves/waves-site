import React, { useState } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import { css } from "@emotion/core";
import Layout from "../components/layout";
import Header from "../components/header";
import InfoFooter from "../components/info-footer";
import Footer from "../components/footer";
import DonorboxEmbed from "../components/donorbox-embed";
import { AppWrapper } from "../components/elements/layout-components";

const DonatePage = () => {
  const { wavesTeamDonate } = useStaticQuery(graphql`
    query {
      wavesTeamDonate: file(relativePath: { eq: "waves-team-donate.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <React.Fragment>
      <Layout>
        <AppWrapper>
          <Header />
          <div
            css={css`
              width: 100%;
              height: 60vh;

              img {
                margin-bottom: 0 !important;
              }
            `}
          >
            <Img
              fluid={wavesTeamDonate.childImageSharp.fluid}
              alt="Waves team on rooftop in Baltimore City"
              css={css`
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
              margin-top: 90px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              padding: 2rem;
              max-width: 960px;
              margin: 0 auto;
              background: #fff;
              @media only screen and (max-width: 1000px) {
                margin: 0 auto;
                padding: 1rem;
                max-width: 100%;
              }
              h2 {
                color: #000;
                font-size: 4rem;
                text-align: center;
                @media only screen and (max-width: 1000px) {
                  text-align: left;
                }
              }

              p {
                color: #000;
                font-size: 1.6rem;
                padding: 0rem;
                margin-bottom: 1rem;
                @media only screen and (max-width: 1000px) {
                }
              }
            `}
          >
            <h2>Help Fund Our Next 100 Installs</h2>
            <p>
              Donations help us connect communities across Baltimore City, as
              well as maintain the network.
            </p>
            <div
              css={css`
                margin-top: 2rem;
              `}
            >
              <DonorboxEmbed />
            </div>
          </main>
          <InfoFooter />
          <Footer />
        </AppWrapper>
      </Layout>
    </React.Fragment>
  );
};

export default DonatePage;
