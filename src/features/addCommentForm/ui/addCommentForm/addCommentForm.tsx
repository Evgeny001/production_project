import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { addCommentFormAction, addCommentFormReducer } from 'features/addCommentForm/model/slices/addCommentFormSlice';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getAddCommentFormText } from '../../model/selector/addCommentFormSelectors';
import cls from './addCommentForm.module.scss';

interface addCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const addCommentForm = memo((props: addCommentFormProps) => {
    const { className, onSendComment } = props;
    const { t } = useTranslation();
    const text = useSelector(getAddCommentFormText);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentFormAction.setText(value));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        dispatch(addCommentFormAction.setText(''));
    }, [dispatch, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input
                    className={cls.input}
                    placeholder={t('Введите текст комментария')}
                    value={text}
                    onChange={onCommentTextChange}
                />
                <Button onClick={onSendHandler} theme={ButtonTheme.OUTLINE}>{t('Отправить')}</Button>
            </div>
        </DynamicModuleLoader>

    );
});

export default addCommentForm;
