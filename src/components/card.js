import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import { css } from '@emotion/core';

const Card = ({ fluid, title, copy, linkTo }) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      align-items: center;
      background: #ffffff;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
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
          padding-bottom: 2rem;
        `}
      >
        {copy}
      </p>
      <a href={linkTo} target="_blank" rel="noopener noreferrer">
        <button
          css={css`
            text-transform: none;
            font-size: 2rem;
            background: #000000;
            color: #fff;
            border: 1px solid #000000;
            border-radius: 16px;
            padding: 1rem 2rem;
            margin-bottom: 2rem;
            width: 100%;
            transition: all ease-in-out 500ms;

            @media only screen and (max-width: 1000px) {
              margin-top: 8rem;
              max-width: 100%;
            }

            &:hover {
              color: #000000;
              background: #ffffff;
              border: 1px solid;
              border-color: #000000;
              cursor: pointer;
            }
          `}
        >
          Learn More
        </button>
      </a>
    </div>
  </div>
);

export default Card;
