import React from 'react';
import { css, jsx } from '@emotion/core';

import styled from '@emotion/styled';

const ConnectedSection = () => {
  return (
    <SectionContainer id="connected-section">
      <h2>Connecting communities in Baltimore and beyond.</h2>
      <p>75,000 Baltimore Homes Without Access.</p>
      <div
        css={css`
          width: 100%;
          min-height: 200px;
          margin-top: 5rem;
          margin-bottom: 10rem;
          background: #f0f4f8;
          border-radius: 32px;
        `}
      />
    </SectionContainer>
  );
};

export default ConnectedSection;

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 20vh;
  margin-top: -20rem;
  z-index: 1000;

  @media only screen and (max-width: 1000px) {
    margin-top: 0;
  }
  h2 {
    font-size: 3.5rem;
    color: #000;
    padding: 0;
    margin: 0;
    z-index: 1000;
  }
  p {
    font-size: 2rem;
    line-height: 3rem;
    color: #000;
    padding-top: 1rem;
    margin: 0;
    z-index: 1000;
  }
`;
