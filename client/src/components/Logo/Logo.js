import React from 'react';

// import logo from '../../assets/img/burger-logo.png';
import logo from '../../assets/img/logo-white.png';
import classes from './Logo.module.scss';

const Logo = ({ height }) => (
  <div className={ classes.logo } style={ { height } }>
    <img src={ logo } alt='Logo' />
  </div>
);

export default Logo;