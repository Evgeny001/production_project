import React, { useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import cls from './Navbar.module.scss';

export function Navbar() {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = React.useState(false);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);
    return (
        <div className={classNames(cls.navbar)}>
            <Button
                className={cls.links}
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onShowModal}
            >
                {t('войти')}
            </Button>
            {/* eslint-disable-next-line */}
            <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}
            />
        </div>
    );
}
