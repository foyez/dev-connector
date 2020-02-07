import React from 'react';

import classes from './Button.module.scss';

const Button = props => {
  const customClasses = (props.classes && props.classes.map(cls => classes[cls])) || [];

  return (
    <button
      className={ [classes.btn, ...customClasses].join(' ') }
    >
      { props.children }
    </button>
  );
};

export default Button;