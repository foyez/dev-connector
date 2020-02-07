import React, { Fragment } from 'react';

import classes from './playground.module.scss';
import TableExample from '../../components/Modules/table/table.component';
import AnswerReveals from '../../components/Modules/AnswerReveals/AnswerReveals';

const Playground = () => (
	<Fragment>
		<div className={classes.section}>
			<div className={classes['elementor-widget']}>
				<TableExample />
			</div>
			<div className={classes['elementor-widget']}>
				<AnswerReveals />
			</div>
		</div>
	</Fragment>
);

export default Playground;
