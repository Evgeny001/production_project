import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { ArticleTextBlock } from '../../model/types/article';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArticleTextBlock
}

export const ArticleTextBlockComponent = memo((props: ArticleCodeBlockComponentProps) => {
    const { className, block } = props;
    return (
        <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
            {block.title && (
                <Text title={block.title} className={cls.title} />
            ) }
            {block.paragraphs.map((paragraph) => (
                <Text key={paragraph} text={paragraph} />
            ))}
        </div>
    );
});
