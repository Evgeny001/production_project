import { classNames } from 'shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { memo, useEffect } from 'react';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import {
    getArticleDetailsData,
    getArticleDetailsError,
} from '../../model/selector/articleDetailsData';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props : ArticleDetailsProps) => {
    const { className, id } = props;
    const { t } = useTranslation();
    // const isLoading = useSelector(getArticleDetailsIsLoading);
    const isLoading = true;
    const error = useSelector(getArticleDetailsError);
    const data = useSelector(getArticleDetailsData);

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchArticleById(id));
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <div>
                <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
            </div>
        );
    } else if (error) {
        content = (
            <Text
                title={t('Произошла ошибка при загрузке страницы')}
                theme={TextTheme.ERROR}
                align={TextAlign.CENTER}
            />
        );
    } else {
        content = (
            <div>ArticleDetails</div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>

    );
});
