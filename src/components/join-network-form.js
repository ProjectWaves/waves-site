import React from 'react';
import { css } from '@emotion/core';

const JoinNetworkForm = () => (
  <div
    css={css`
      width: 93.75%;
    `}
  >
    <form
      name="wavesInterestForm"
      method="post"
      action="/thank-you"
      data-netlify="true"
      netlify-honeypot="bot-field"
      css={css`
        max-width: 600px;
        margin: 2rem auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: #ffffff;
        border-radius: 16px;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
        padding: 4rem;
        label {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }
        input,
        textarea {
          font-size: 1.5rem;
          border: 2px solid rgba(0, 0, 0, 0.2);
          border-radius: 0.5rem;
          padding: 1rem;
          margin-bottom: 2rem;
        }
        input::placeholder,
        textarea::placeholder {
          font-size: 1.5rem;
          color: #777;
        }
      `}
    >
      <h2
        css={css`
          font-size: 2.5rem;
          text-align: center;
        `}
      >
        Waves Interest Form
      </h2>
      <input type="hidden" name="bot-field" />
      <label for="name">Enter your full name:</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="First Last"
        required
      />
      <label for="address">Enter your street address:</label>
      <textarea
        name="address"
        id="address"
        rows="5"
        cols="33"
        placeholder="1234 Street City, State 11111"
        required
      />
      <label for="phone">Enter your phone number:</label>
      <input
        type="tel"
        name="phone"
        id="phone"
        placeholder="555-555-5555"
        // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
      />
      <label for="email">Enter your email address if you have one:</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="name@email.com"
        size="50"
      />
      <button
        css={css`
          color: #fafafa;
          background: #121212;
          padding: 1rem;
          font-size: 2rem;
          margin-top: 1rem;
          border: 2px solid #121212;
          border-radius: 1rem;
          transition: all ease 0.3s;
          text-transform: none;

          &:hover {
            color: #fafafa;
            background: #595959;
            border: 2px solid #595959;
            cursor: pointer;
          }

          &:focus {
            outline: 0.5px dashed #000;
          }
        `}
        type="submit"
      >
        Join Now
      </button>
    </form>
  </div>
);

export default JoinNetworkForm;
