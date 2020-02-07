import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectIsPostsFetching } from '../../redux/posts/posts.selectors';

import WithSpinner from '../WithSpinner/WithSpinner';
import Posts from './posts.component';

const mapStateToProps = createStructuredSelector({
	isLoading: selectIsPostsFetching
});

const PostsContainer = compose(connect(mapStateToProps), WithSpinner)(Posts);

export default PostsContainer;
