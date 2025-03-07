import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    getArticlesPageHasMore,
    getArticlesPageIsLoading, getArticlesPageNum,
} from 'pages/ArticlePage/model/selector/articlesPageSelectors';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { articlesPageActions } from '../../slices/ArticlesPageSlice/articlesPageSlice';
import { fetchArticlesList } from '../../services/fetchArticlesList/fetchArticlesList';

export const fetchNextArticlesList = createAsyncThunk<
        void,
        void,
        ThunkConfig<string>
    >('articlesPage/fetchNextArticlesList', async (_, thunkApi) => {
        const { getState, dispatch } = thunkApi;
        const hasMore = getArticlesPageHasMore(getState());
        const page = getArticlesPageNum(getState());
        const isLoading = getArticlesPageIsLoading(getState());

        if (hasMore && !isLoading) {
            dispatch(articlesPageActions.setPage(page + 1));
            dispatch(fetchArticlesList({
                page: page + 1,
            }));
        }
    });
