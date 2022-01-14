import React from 'react'

import Header from '../Header'
import Footer from '../Footer';
import Home from '../Home';

function Layout({ onToggleTheme, selectedTheme }) {
    return (
        <>
            <Header 
                onToggleTheme={onToggleTheme} 
                selectedTheme={selectedTheme}
            />
            <Home />
            <Footer 
                onToggleTheme={onToggleTheme} 
                selectedTheme={selectedTheme}
            />
        </>
    );
};

export default Layout