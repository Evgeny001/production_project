import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article-details');
    const { id } = useParams<{id: string}>();

    if (!id) {
        return (
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('Статья не найдена')}
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            <ArticleDetails id={id} />
            <Text className={cls.commentTitle} text={t('Коментарий')} />
            <CommentList comments={[
                { id: '1', user: { id: '1', username: 'eLukas', avatar: 'https://s0.rbk.ru/v6_top_pics/resized/1280xH/media/img/4/04/346843326750044.webp' }, text: 'Hi everyOne' },
                { id: '2', user: { id: '1', username: 'eLukas', avatar: 'https://s0.rbk.ru/v6_top_pics/resized/1280xH/media/img/4/04/346843326750044.webp' }, text: 'How are you?' },
            ]}
            />
        </div>
    );
};
export default memo(ArticleDetailsPage);
