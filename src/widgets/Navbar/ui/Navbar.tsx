import React, { useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

export function Navbar() {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = React.useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);
    return (
        <div className={classNames(cls.navbar)}>
            <Button
                className={cls.links}
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onToggleModal}
            >
                {t('войти')}
            </Button>
            {/* eslint-disable-next-line */}
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                dsfjdoghjbjfcklxnvdklxcngjkbfdlcvnbklcxfgndfkjngjkdfnxgfd
            </Modal>
        </div>
    );
}
