import React from 'react';

function Nav(props) {
    const {
        setCurrentTab,
        navOptions
    } = props;

    return(
        <nav>
            <ul className="tab-list">
                {navOptions.map((option) => (
                    <li key={option.name} className="tab" sm={12} md={6} lg={4}>
                        <span onClick={()=> 
                        setCurrentTab(option)}>{option.name}</span>
                    </li>
                )) }
            </ul>
        </nav>
    )
}

export default Nav;