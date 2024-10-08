import React, {Suspense, useState} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './index.scss'
import './index.scss'
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark'
}

const App = () => {
    const [theme, setTheme] = useState(Theme.LIGHT)

    const toggleTheme = () => {
        setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
    }
    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>о сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
        <Routes>
         <Route path={'/about'} element={<AboutPageAsync/>}/>
         <Route path={'/'} element={<MainPageAsync/>}/>
        </Routes>
            </Suspense>
        </div>
    );
};

export default App;
