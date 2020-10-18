import React from 'react';
import Nav from '../Nav/';

function Header(props) {
    const {
        currentTab,
        setCurrentTab,
        navOptions
    } = props;
    
    return(
        <header className="app-header">
            <h1>Shaun Mardones</h1>
            <Nav 
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
            navOptions={navOptions}
            />
        </header>
        
    )
}

export default Header;