import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Header from '../Header'
import Footer from '../Footer';
import Routes from '../../Routes';

function Layout({ onToggleTheme, selectedTheme }) {
    return (
        <BrowserRouter>
            <Header 
                onToggleTheme={onToggleTheme} 
                selectedTheme={selectedTheme}
            />
            <Routes />
            <Footer 
                onToggleTheme={onToggleTheme} 
                selectedTheme={selectedTheme}
            />
        </BrowserRouter>
    );
};

export default Layout