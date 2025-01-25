import {
    createEntityAdapter,
    createSlice,
} from '@reduxjs/toolkit';
import { Comment } from 'entities/Comment/model/types/comment';
import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';

const commentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsComments || commentsAdapter.getInitialState(),
);

const articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsCommentsSlice',
    initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
        isLoading: false,
        ids: [],
        entities: {},
        error: undefined,
    }),
    reducers: {
    },
});

export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;
