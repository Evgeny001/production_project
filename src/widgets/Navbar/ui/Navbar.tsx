import React from 'react';
import {Link} from "react-router-dom";
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss"

interface NavbarProps {

}
export const Navbar = () => {
    return (
        <div className={classNames(cls.navbar)}>
            <div className={cls.links}>
                <Link to={'/'} className={cls.mainLink}>Главная</Link>
                <Link to={'/about'}>О сайте</Link>
            </div>
        </div>
    );
};
