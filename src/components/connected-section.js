import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const ConnectedSection = () => {
  return (
    <SectionContainer id="connected-section">
      <h2>Connected. Community. Access.</h2>
      <p>75,000 Baltimore Homes Without Access.</p>
      <div
        style={{
          width: '100%',
          height: '130px',
          minHeight: '130px',
          marginTop: '4rem',
          background: '#F0F4F8',
          borderRadius: '32px',
        }}
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
  background: #fff;
  h2 {
    font-size: 4rem;
    color: #000;
    padding: 0;
    margin: 0;
  }
  p {
    font-size: 2rem;
    line-height: 3rem;
    color: #000;
    padding: 0;
    margin: 0;
  }
`;
