import React, { useState } from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import Layout from '../components/layout';
import { AppWrapper } from '../components/elements/layout-components';
import Header from '../components/header';
import InfoFooter from '../components/info-footer';
import Footer from '../components/footer';

const JoinTheMovementPage = () => {
  return (
    <Layout>
      <AppWrapper>
        <Header />
        <main
          css={css`
            /* max-width: 60%; */
            padding: 4rem;
            @media only screen and (max-width: 1000px) {
              padding: 1rem;
            }

            h3 {
              color: #000;
              font-size: 3rem;
              font-weight: 500;
              margin-top: 3rem;
            }
          `}
        >
          <article
            css={css`
              /* max-width: 93.75%; */
              border-radius: 1rem;
            `}
          >
            <h2
              css={css`
                color: #000;
                font-size: 4rem;
                text-align: center;
                margin-top: 2rem;
              `}
            >
              Join the Waves Movement
            </h2>
            <p
              css={css`
                color: #555;
                padding-bottom: 2rem;
                font-size: 2rem;
                line-height: 3rem;
                text-align: center;
              `}
            >
              Interested in Internet access or becoming a volunteer?
            </p>
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
            <section
              css={css`
                max-width: 960px;
                margin: 0 auto;
                padding: 2rem 4rem;

                @media only screen and (max-width: 1000px) {
                  max-width: 93.75%;
                  padding: 0 2rem;
                }

                p {
                  color: #333;
                  font-size: 1.6rem;
                  line-height: 2.4rem;
                }
              `}
            >
              <div
                css={css`
                  display: grid;
                  grid-template-columns: 1fr 1fr;
                  grid-column-gap: 8rem;

                  @media only screen and (max-width: 1000px) {
                    grid-template-columns: 1fr;
                    margin: 2rem auto;
                  }
                `}
              >
                <div
                  css={css`
                    display: flex;
                    flex-direction: column;
                    @media only screen and (max-width: 1000px) {
                      align-items: center;
                      justify-content: center;
                    }
                  `}
                >
                  <h3>Looking for Internet Access?</h3>
                  <p>
                    If you're interested in requesting Internet access through
                    Waves, click the button. This will direct you to a page
                    where you can fill out a form asking for some information.
                  </p>
                  <Link to="/join-the-network">
                    <button
                      css={css`
                        color: var(--primary-color);
                        background: var(--gray-800);
                        padding: 1rem 2rem;
                        font-size: 2rem;
                        width: 300px;
                        margin-top: 1rem;
                        border: 2px solid var(--gray-800);
                        border-radius: 1rem;
                        transition: all ease-in-out 0.3s;
                        text-transform: none;
                        &:hover {
                          background: var(--gray-900);
                          cursor: pointer;
                        }

                        &:focus {
                          outline: 0.5px dashed var(--gray-900);
                        }
                      `}
                    >
                      Request Access
                    </button>
                  </Link>
                </div>
                <div
                  css={css`
                    display: flex;
                    flex-direction: column;
                    @media only screen and (max-width: 1000px) {
                      align-items: center;
                      justify-content: center;
                    }
                  `}
                >
                  <h3>Looking to Volunteer?</h3>
                  <p>
                    If you're interested in learning more about volunteering,
                    click the button. This will direct you to a page where you
                    can fill out a form asking for some information.
                  </p>
                  <Link to="/volunteer">
                    <button
                      css={css`
                        color: var(--primary-color);
                        background: var(--gray-800);
                        padding: 1rem 2rem;
                        font-size: 2rem;
                        margin-top: 1rem;
                        width: 300px;

                        border: 2px solid var(--gray-800);
                        border-radius: 1rem;
                        transition: all ease-in-out 0.3s;
                        text-transform: none;
                        &:hover {
                          background: var(--gray-900);
                          cursor: pointer;
                        }

                        &:focus {
                          outline: 0.5px dashed var(--gray-900);
                        }
                      `}
                    >
                      Volunteer Information
                    </button>
                  </Link>
                </div>
              </div>
            </section>
          </article>
        </main>
        <InfoFooter />
        <Footer />
      </AppWrapper>
    </Layout>
  );
};

export default JoinTheMovementPage;
