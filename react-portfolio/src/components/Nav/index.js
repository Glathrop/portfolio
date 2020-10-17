import React from 'react';

function Nav(props) {
    const {
        currentTab,
        setCurrentTab
    } = props;

    return(
        <nav>
            <ul className="flex-row">
                <li className="mx-2">
                    <a href="#about">
                        About Me
                    </a>
                </li>
                <li className="mx-2">
                    <a>Past Projects</a>
                </li>
                <li className="mx-2">
                    <a>Resume</a>
                </li>
                <li className="mx-2">
                    <a>Contact Me</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;