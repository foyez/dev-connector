import React from 'react';

import classes from './Backdrop.module.scss';

const Backdrop = props => (
  props.show && <div className={ classes.backdrop } onClick={ props.clicked }></div>
);

export default Backdrop;