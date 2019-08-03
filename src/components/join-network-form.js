import React from 'react';
import { css } from '@emotion/core';

const JoinNetworkForm = () => (
  <form
    method="post"
    name="waves-connected"
    data-netlify="true"
    netlify-honeypot="bot-field"
  >
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
      `}
    >
      <input type="hidden" name="bot-field" />
      <label for="name">Enter your full name:</label>
      <input name="name" type="text" placeholder="First Last" required />
      <label for="address">Enter your street address:</label>
      <textarea
        name="address"
        id="address"
        rows="5"
        cols="33"
        placeholder="1234 Street Baltimore MD, 21202"
      />
      <label for="phone">Enter your phone number (optional):</label>
      <input
        name="phone"
        type="tel"
        id="phone"
        placeholder="410-555-5555"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
      />
      <label for="email">Enter your email (optional):</label>
      <input name="email" type="email" size="50" placeholder="name@email.com" />
      <button
        css={css`
          color: #121212;
          background: #e5f8ff;
          padding: 1rem;
          font-size: 2rem;
          margin-top: 1rem;
          border: 2px solid #121212;
          border-radius: 16px;
          transition: all ease 0.3s;
          text-transform: none;

          &:hover {
            color: #e5f8ff;
            background: #121212;
            border: 2px solid #e5f8ff;
            cursor: pointer;
          }
          &:focus {
            outline: 0.5px dashed #000;
          }
        `}
      >
        Join Now
      </button>
    </div>
  </form>
);

export default JoinNetworkForm;
