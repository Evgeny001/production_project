import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss"
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

interface NavbarProps {

}
export const Navbar = () => {
    return (
        <div className={classNames(cls.navbar)}>
            <ThemeSwitcher />
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>Главная</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>О сайте</AppLink>
            </div>
        </div>
    );
};
