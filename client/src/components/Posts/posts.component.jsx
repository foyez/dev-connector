import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectPostList } from '../../redux/posts/posts.selectors';

import './posts.scss';

const Posts = ({ postList }) => {
	return (
		<div className="posts">
			{postList.slice(0, 10).map(({ id, title }) => (
				<p key={id} className="post-item">
					{id + '. ' + title}
				</p>
			))}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	postList: selectPostList
});

export default connect(mapStateToProps)(Posts);
