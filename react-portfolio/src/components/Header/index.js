import React, {useState} from 'react';
import Nav from '../Nav/';

function Header(props) {
    
    
    return(
        <header className="App-header">
            <h1>Shaun Mardones</h1>
            <Nav props/>
        </header>
        
    )
}

export default Header;