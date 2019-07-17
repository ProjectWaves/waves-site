import React from 'react';
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import Iframe from 'react-iframe';

const ResearchSection = () => {
  return (
    <SectionContainer id="connected-section">
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem 10rem;
          width: 50%;
          min-height: 600px;
          margin-top: -15rem;
          background: #7ba7ff;
          border-radius: 32px;

          @media only screen and (max-width: 1000px) {
            width: 80%;
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
          them inaccessible to many families. Per the Deutsche Foundation 2017
          report, 75,000 homes lack internet access.
        </p>
      </div>
    </SectionContainer>
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
