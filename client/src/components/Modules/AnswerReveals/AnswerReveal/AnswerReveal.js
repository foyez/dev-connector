import React from 'react';

import classes from './AnswerReveal.module.scss';

const AnswerReveal = props => {
  return (
    <div className={ classes['answer__item'] }>
      <input type="checkbox" className={ classes['answer__input'] } id={ `faq-${props.qNo}` } />
      <h2 className={ classes['answer__heading'] }>
        <label htmlFor={ `faq-${props.qNo}` } className={ classes['answer__label'] }>
          { props.question }
        </label>
      </h2>
      { props.answers.map((answer, id) => (
        <p key={ id } className={ classes['answer_p'] }>
          { answer }
        </p>
      )) }
    </div>
  );
};

export default AnswerReveal;