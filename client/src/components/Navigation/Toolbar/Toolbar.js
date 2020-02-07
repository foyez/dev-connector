import React from 'react';

import classes from './Toolbar.module.scss';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const Toolbar = props => (
  <header className={ classes.toolbar }>
    <DrawerToggle clicked={ props.drawerToggleClicked } />
    <div className={ classes.logo }>
      <Logo />
    </div>

    <nav className={ classes['desktop-only'] }>
      <NavigationItems />
    </nav>
  </header>
);

export default Toolbar;