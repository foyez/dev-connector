import React, { Fragment } from 'react';

import classes from './Input.module.scss';

const Input = props => {
  let inputEl = null;

  switch (props.type) {
    case 'text':
      inputEl = (
        <div className={ props.className }>
          <input type="text" className={ classes.input } id={ props.name } placeholder={ props.fieldName } required />
          <label htmlFor={ props.name } className={ classes.label }>{ props.fieldName }</label>
        </div>
      );
      break;
    case 'radio':
      inputEl = (
        <div className={ props.className }>
          { props.fieldNames.map(fieldName => (
            <div key={ fieldName } className={ classes["radio-group"] }>
              <input type="radio" className={ classes["radio-input"] } id={ fieldName } name='radio-name' />
              <label htmlFor={ fieldName } className={ classes["radio-label"] }>
                <span className={ classes["radio-button"] }></span>
                { fieldName }
              </label>
            </div>
          )) }
        </div>
      );
      break;
    case 'checkbox':
      inputEl = (
        <div className={ props.className }>
          { props.fieldNames.map(fieldName => (
            <div key={ fieldName } className={ classes["checkbox-group"] }>
              <input type="checkbox" className={ classes["checkbox-input"] } id={ fieldName } />
              <label htmlFor={ fieldName } className={ classes["checkbox-label"] }>
                <span className={ classes["checkbox-button"] }></span>
                { fieldName }
              </label>
            </div>
          )) }
        </div>
      );
      break;
    default:
      inputEl = (
        <Fragment>
          <input type="text" class={ classes.input } id="name" placeholder={ props.fieldName } required />
          <label for="name" class={ classes.label }>{ props.fieldName }</label>
        </Fragment>
      );
  }

  return inputEl;
};

export default Input;