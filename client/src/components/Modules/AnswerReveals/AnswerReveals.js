import React from 'react';

import classes from './AnswerReveals.module.scss';
import AnswerReveal from './AnswerReveal/AnswerReveal';

const AnswerReveals = () => (
  <div className={ classes['answer__items'] }>
    <AnswerReveal
      qNo='1'
      question='How many cans must I stack up?'
      answers={ [
        'As many as you need to wash you out from my mind and out of my consciousness.',
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
      ] }
    />
    <AnswerReveal
      qNo='2'
      question='How much?'
      answers={ [
        "She said for $300 she'll do it.",
      ] }
    />
  </div>
);

export default AnswerReveals;