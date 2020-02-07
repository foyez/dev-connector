import React from 'react';

import classes from './Form.module.scss';
import Input from './Input/Input';

const Form = () => (
  <form className={ classes.form }>
    <Input
      type='text'
      fieldName='Full Name'
      name='name'
      className={ classes['form__group'] }
    />
    <Input
      type='text'
      fieldName='Email Address'
      name='email'
      className={ classes['form__group'] }
    />
    <Input
      type='radio'
      fieldNames={ ['Small Size', 'Large Size'] }
      className={ classes['form__group'] }
    />
    <Input
      type='checkbox'
      fieldNames={ ['Apple', 'Mango', 'Banana'] }
      className={ classes['form__group'] }
    />
  </form>
);

export default Form;