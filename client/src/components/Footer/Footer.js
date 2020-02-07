import React from 'react';

import classes from './Footer.module.scss';

const Footer = () => (
  <footer className={ classes.footer }>
    <p>Created by Foyez, &copy; { new Date().getFullYear() }</p>
  </footer>
);

export default Footer;