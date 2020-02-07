import React, { Fragment } from 'react';

import classes from './SideDrawer.module.scss';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

const SideDrawer = props => {
  let attachedClasses = [classes['side-drawer'], classes.close];
  if (props.open) {
    attachedClasses = [classes['side-drawer'], classes.open];
  }

  return (
    <Fragment>
      <Backdrop show={ props.open } clicked={ props.closed } />
      <div className={ attachedClasses.join(' ') }>
        <div className={ classes.logo }>
          <Logo />
        </div>

        <nav onClick={ props.closed }>
          <NavigationItems />
        </nav>
      </div>
    </Fragment>
  );
};

export default SideDrawer;