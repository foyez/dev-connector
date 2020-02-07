import React from 'react';

import classes from './Heading1.module.scss';

const Heading1 = ({ children }) => (
  <h2 className={ classes.heading }>
    { children }
  </h2>
);

export default Heading1;