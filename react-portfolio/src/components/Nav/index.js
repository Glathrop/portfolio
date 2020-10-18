import React from 'react';

function Nav(props) {
    const {
        currentTab,
        setCurrentTab,
        navOptions
    } = props;

    return(
        <nav>
            <ul className="flex-row">
                {navOptions.map((option) => (
                    <li key={option.name}>
                        <span onClick={()=> 
                        setCurrentTab(option)}>{option.name}</span>
                    </li>
                )) }
            </ul>
        </nav>
    )
}

export default Nav;