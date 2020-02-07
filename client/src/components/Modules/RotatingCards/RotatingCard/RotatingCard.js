import React from 'react';

import classes from './RotatingCard.module.scss';
import Button from '../../../UI/Button/Button';

const Card = props => {
  return (
    <div className={ classes.card }>
      <div className={ `${classes['card__side']} ${classes['card__side--front']}` }>
        <div className={ [classes['card__picture'], classes[`card__picture--${props.cardNo}`]].join(' ') }>
          &nbsp;
        </div>
        <h4 className={ classes['card__heading'] }>
          <span className={ [classes['card__heading-span'], classes[`card__heading-span--${props.cardNo}`]].join(' ') }>
            { props.heading }
          </span>
        </h4>
        <div className={ classes['card__details'] }>
          <ul>
            { props.cardItems.map(item => <li>{ item }</li>) }
          </ul>
        </div>
      </div>
      <div className={ `${classes['card__side']} ${classes['card__side--back']} ${classes[`card__side--back-${props.cardNo}`]}` }>
        <div className={ classes['card__cta'] }>
          <div className={ classes['card__price-box'] }>
            <p className={ classes['card__price-only'] }>Only</p>
            <p className={ classes['card__price-value'] }>${ props.price }</p>
          </div>
          <Button
            classes={ ['btn--oval', 'btn--white'] }
          >
            Book now!
          </Button>
        </div>
      </div>
    </div>
  )
};

export default Card;