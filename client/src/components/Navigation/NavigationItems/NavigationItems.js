import React from 'react';

import classes from '../NavigationItems/NavigationItems.module.scss';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = () => {
  const authLinks = (
    <ul className={ classes['navigation-items'] }>
      <NavigationItem link='/' exact>Home</NavigationItem>
    </ul>
  );

  const guestLinks = (
    <ul className={ classes['navigation-items'] }>
      <NavigationItem link='/' exact>Home</NavigationItem>
      <NavigationItem link='/playground'>Playground</NavigationItem>
    </ul>
  );

  return false ? authLinks : guestLinks;
};

export default NavigationItems;