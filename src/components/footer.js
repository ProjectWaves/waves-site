import React from 'react';
import styled from '@emotion/styled';
const Footer = ({ className }) => (
  <footer className={className}>
    <div>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
  </footer>
);

const StyledFooter = styled(Footer)`
  color: #fffaff;
  background: #000;
  padding: 1rem 0;
`;

export default StyledFooter;
