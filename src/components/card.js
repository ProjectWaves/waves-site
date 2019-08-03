import React from 'react';
import Img from 'gatsby-image';
import { css } from 'emotion';

const Card = ({ fluid, title, copy }) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      align-items: center;
      background: #ffffff;
      border-radius: 16px;
      max-width: 440px;
      height: auto;
    `}
  >
    <div css={css``}>
      <Img fluid={fluid} />
    </div>
    <div>
      <h3>{title}</h3>
      <p>{copy}</p>
    </div>
  </div>
);

export default Card;
