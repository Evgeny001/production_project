import React, {Suspense, useContext} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './index.scss'
import './index.scss'
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {Theme, ThemeContext} from "./theme/ThemeContext";

const App = () => {
    const {theme, setTheme} = useContext(ThemeContext)
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
