import React from 'react';
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/core';

const WaveSection = () => (
  <div
    css={css`
      position: absolute;
      top: 100vh;
      left: 0px;
      width: 100vw;
      max-width: 100vw;
      transform: translateY(-90%);
      margin: 0 auto;
      @media only screen and (max-width: 1000px) {
        top: 100vh;
      }
    `}
  >
    <svg
      css={css`
        /* border: 1px solid red; */
        width: 100vw;
        height: 250px;
        @media only screen and (max-width: 1000px) {
          height: 50px;
        }
      `}
      viewBox="400 0 1440 100"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1440 250H0C125.279 106.419 581.445 0 1125 0c543.56 0 999.72 106.419 1125 250z"
        fill="#ffffff"
      />
    </svg>
  </div>
);

export default WaveSection;
