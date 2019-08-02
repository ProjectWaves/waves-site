import React, { useState } from 'react';
import { css, jsx, keyframes } from '@emotion/core';

const JoinNetworkForm = () => {
  return (
    <form
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
        <label for="name">Enter your full name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="First Last"
          required
          minlength="4"
          maxlength="8"
        />
        <label for="phone">Enter your phone number:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="410-555-5555"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          required
        />
        <label for="address">Enter your street address:</label>
        <textarea
          id="address"
          name="address"
          rows="5"
          cols="33"
          placeholder="1234 Street Baltimore MD, 21202"
        />
        <label for="phone">Enter your phone number:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="410-555-5555"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          required
        />
        <label for="email">Enter your email if you have one:</label>
        <input
          type="email"
          id="email"
          size="50"
          placeholder="name@email.com"
          required
        />
        <input type="submit" value="SUBMIT" />
      </div>
    </form>
  );
};

export default JoinNetworkForm;
