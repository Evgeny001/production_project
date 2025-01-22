import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
    className?: string;
}

export const ArticleImageBlockComponent = memo((props: ArticleCodeBlockComponentProps) => {
    const { className } = props;
    return (
        <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
            ArticleImageBlockComponent
        </div>
    );
});
