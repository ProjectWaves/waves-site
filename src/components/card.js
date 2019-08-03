import React from 'react';
import Img from 'gatsby-image';
import { css } from '@emotion/core';

const Card = ({ fluid, title, copy }) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      align-items: center;
      background: #ffffff;
      border-radius: 16px;
      max-width: 440px;
    `}
  >
    <div
      css={css`
        border-radius: 8px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
        width: 100%;
        height: 100%;
        max-height: 800px;
        object-fit: cover;
      `}
    >
      {fluid && <Img fluid={fluid} />}
    </div>
    <div>
      <h3>{title}</h3>
      <p>{copy}</p>
    </div>
  </div>
);

export default Card;
