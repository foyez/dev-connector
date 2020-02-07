import React from 'react';

import classes from './DrawerToggle.module.scss';

const DrawerToggle = props => (
  <div className={ classes['drawer-toggle'] } onClick={ props.clicked }>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default DrawerToggle;