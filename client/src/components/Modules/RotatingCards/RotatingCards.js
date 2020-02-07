import React, { Fragment } from 'react';

// import classes from './RotatingCards.module.scss';
import './grid.css';
import Heading1 from '../../UI/Headings/Heading1/Heading1';
import RotatingCard from './RotatingCard/RotatingCard';

const RotatingCards = () => {
  return (
    <Fragment>
      <Heading1>Rotating Cards</Heading1>

      <div className="row">
        <div className="col-1-of-3">
          <RotatingCard
            cardNo='1'
            heading='The Sea Explorer'
            cardItems={ [
              '3 day tours',
              'Up to 30 people',
              '2 tour guides',
              'Sleep in cozy hotels',
              'Difficulty: easy'
            ] }
            price='297'
          />
        </div>
        <div className="col-1-of-3">
          <RotatingCard
            cardNo='2'
            heading='The forest hiker'
            cardItems={ [
              '7 day tours',
              'Up to 40 people',
              '6 tour guides',
              'Sleep in provided tents',
              'Difficulty: medium'
            ] }
            price='497'
          />
        </div>
        <div className="col-1-of-3">
          <RotatingCard
            cardNo='3'
            heading='The snow adventurer'
            cardItems={ [
              '5 day tours',
              'Up to 15 people',
              '3 tour guides',
              'Sleep in provided tents',
              'Difficulty: hard'
            ] }
            price='897'
          />
        </div>
      </div>
    </Fragment>
  );
};

export default RotatingCards;