import React from 'react';
import { css } from '@emotion/core';

const JoinNetworkForm = () => (
  <form
    method="post"
    name="wavesInterestForm"
    netlify-honeypot="bot-field"
    data-netlify="true"
    css={css`
      max-width: 600px;
      margin: 2rem auto;
      label {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
      }
      input,
      textarea {
        font-size: 1.5rem;
        border: 2px solid rgba(0, 0, 0, 0.2);
        border-radius: 0.5rem;
        padding: 0.5rem;
        margin-bottom: 1.5rem;
      }
      input::placeholder,
      textarea::placeholder {
        font-size: 1.5rem;
        color: #777;
      }
    `}
  >
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
      `}
    >
      <input type="hidden" name="bot-field" />
      <label>
        Name
        <input
          css={css`
            color: red;
          `}
          type="text"
          name="name"
          id="name"
        />
      </label>
      <label>
        Phone
        <input type="tel" name="phone" id="phone" />
      </label>
      <label>
        Address
        <textarea name="address" id="address" rows="5" />
      </label>
      <label>
        Email
        <input type="email" name="email" id="email" />
      </label>
      <button type="submit">Send</button>
      <input type="reset" value="Clear" />
    </div>
  </form>
);

export default JoinNetworkForm;
