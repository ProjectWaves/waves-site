import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/core';

import { FlexRowContainer } from './elements/layout-components';

const NetworkStatus = props => {
  return (
    <React.Fragment>
      <StyledFlexRowContainer>
        <span
          css={css`
            color: #ffffff;
            font-size: 1.5rem;
          `}
        >
          Network Status: &nbsp;
        </span>
        <span
          css={css`
            color: var(--primary-color);
            font-size: 1.5rem;
          `}
        >
          {props.status && props.status}
        </span>
        <span
          css={css`
            color: #ffffff;
            font-size: 1.5rem;
          `}
        >
          &nbsp;
          {props.status && props.status != '1' ? 'users online' : 'user online'}
        </span>
      </StyledFlexRowContainer>
    </React.Fragment>
  );
};

NetworkStatus.propTypes = {
  status: PropTypes.string.isRequired,
};

NetworkStatus.defaultProps = {
  status: '50',
};

export default NetworkStatus;

const StyledFlexRowContainer = styled(FlexRowContainer)`
  background: rgba(123, 167, 255, 0.1);
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0;
  min-width: 100vw;
`;
