import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FlexRowContainer } from './elements/layout-components';

const NetworkStatus = props => {
  return (
    <React.Fragment>
      <StyledFlexRowContainer>
        <span>Network Status: </span>
        <span> {props.status && props.status}</span>
      </StyledFlexRowContainer>


    </React.Fragment>
  );
};

NetworkStatus.propTypes = {
  status: PropTypes.string.isRequired,
};

NetworkStatus.defaultProps = {
  status: 'Engaged!',
};

export default NetworkStatus;

const StyledFlexRowContainer = styled(FlexRowContainer)`
  background: rgba(123, 167, 255, 0.1);
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0;
  min-width: 100vw;
  span :first-of-type {
    color: #ffffff;
    font-size: 1.5rem;
  }
  span:last-of-type {
    color: var(--primary-color);
    font-size: 1.5rem;
  }
`;
