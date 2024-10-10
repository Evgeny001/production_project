import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './index.scss'
import './index.scss'
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";


const App = () => {
const {theme, toggleTheme} = useTheme()
    return (
        <div className={classNames('app', {}, [theme, 'cls2', 'cls3'])}>
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
