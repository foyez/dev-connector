import { createSelector } from 'reselect';

const selectPosts = (state) => state.posts;

export const selectPostList = createSelector([ selectPosts ], (posts) => posts.postList);

export const selectIsPostsFetching = createSelector([ selectPosts ], (posts) => posts.isFetching);
