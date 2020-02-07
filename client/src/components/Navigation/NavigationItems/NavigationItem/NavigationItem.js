import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.module.scss';

const NavigationItem = props => (
  <li className={ classes['navigation-item'] }>
    <NavLink
      to={ props.link }
      exact={ props.exact }
      activeClassName={ classes.active }
    >
      { props.children }
    </NavLink>
  </li>
);

export default NavigationItem;