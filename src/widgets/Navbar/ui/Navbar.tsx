import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';

export function Navbar() {
    return (
        <div className={classNames(cls.navbar)}>
            <div className={cls.links}>
                /
            </div>
        </div>
    );
}
