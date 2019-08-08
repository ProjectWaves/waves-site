import React, { useState } from 'react';
import { css } from '@emotion/core';

import { Waypoint } from 'react-waypoint';

const Waypoints = () => {
  return (
    <React.Fragment>
      <Waypoint
        debug
        // topOffset="20%"
        // scrollableAncestor={global.window}
        bottomOffset="30%"
        onEnter={() => console.log('waypoint has been entered')}
      />
    </React.Fragment>
  );
};

export default Waypoints;
