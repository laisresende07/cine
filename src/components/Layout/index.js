import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Header from '../Header'
import Routes from '../../Routes'

function Layout({ onToggleTheme, selectedTheme }) {
    return (
        <BrowserRouter>
            <Header 
                onToggleTheme={onToggleTheme} 
                selectedTheme={selectedTheme}
            />
            <Routes />
        </BrowserRouter>
    );
};

export default Layout