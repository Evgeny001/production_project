import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

export function Navbar() {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.navbar)}>
            <div className={cls.links}>
            /
            </div>
        </div>
    );
}
