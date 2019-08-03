import React from 'react';
import Img from 'gatsby-image';
import { css } from '@emotion/core';

const Card = ({ fluid, title, copy, featured }) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      align-items: center;
      background: #ffffff;
      border-radius: 16px;
    `}
  >
    <div
      css={css`
        width: 100%;
        height: 300px;
        max-width: 100%;
        max-height: 100%;
        padding-bottom: 1rem;
      `}
    >
      {fluid && (
        <Img
          fluid={fluid}
          css={css`
            border-radius: 16px 16px 0 0;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
            width: 100%;
            height: 100%;
            max-height: 800px;
            /* object-fit: cover; */
            object-position: 50% 10%;
          `}
        />
      )}
    </div>
    <div
      css={css`
        margin: 2rem 4rem;
      `}
    >
      <h3
        css={css`
          font-size: 2.5rem;
        `}
      >
        {title}
      </h3>
      <p
        css={css`
          font-size: 2rem;
          line-height: 3rem;
        `}
      >
        {copy}
      </p>
    </div>
  </div>
);

export default Card;
