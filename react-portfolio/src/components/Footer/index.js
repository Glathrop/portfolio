import React from 'react';

function Footer() {
    return(
        <div className="flex-row">
            <a href="https://github.com/smardones"><img src={require('../../assets/icons/GitHub.png')} className="contact-icon" /></a>
            <a href="https://www.linkedin.com/in/shaunmardones/"><img src={require('../../assets/icons/LinkedIn.png')} className="contact-icon" /></a>
            <a href="mailto:shaun.mardones@gmail.com"><img src={require('../../assets/icons/Email.png')} className="contact-icon" /></a>
        </div>
    )
}

export default Footer;