import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';
import { getAddCommentFormText } from 'features/addCommentForm/model/selector/addCommentFormSelectors';
import { getArticleDetailsData } from 'entities/Article/model/selector/articleDetailsData';
import { addCommentFormAction } from 'features/addCommentForm/model/slices/addCommentFormSlice';

export const sendComment = createAsyncThunk<Comment, void, ThunkConfig<string>>(
    'addCommentForm/sendComment',
    async (authData, thunkAPI) => {
        const {
            dispatch, extra, rejectWithValue, getState,
        } = thunkAPI;

        const userData = getUserAuthData(getState());
        const text = getAddCommentFormText(getState());
        const article = getArticleDetailsData(getState());

        if (!userData || !text || !article) {
            return rejectWithValue('no data');
        }

        try {
            const response = await extra.api.post<Comment>('/comments', {
                articleId: article.id,
                userId: userData.id,
                text,

            });
            if (!response.data) {
                throw new Error();
            }
            dispatch(addCommentFormAction.setText(''));
            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
