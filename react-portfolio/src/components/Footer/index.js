import React from 'react';

function Footer() {
    return(
        <div className="footer-icons">
            <a href="https://github.com/smardones">
                <img 
                    src={require('../../assets/icons/GitHub.png')} 
                    className="contact-icon" 
                    alt="GitHub"
                />
            </a>
            <a href="https://www.linkedin.com/in/shaunmardones/">
                <img 
                    src={require('../../assets/icons/LinkedIn.png')} 
                    className="contact-icon"
                    alt="Linkedin" 
                />
            </a>
            <a href="mailto:shaun.mardones@gmail.com">
                <img 
                    src={require('../../assets/icons/Email.png')} 
                    className="contact-icon" 
                    alt="Email Shaun"
                />
            </a>
        </div>
    )
}

export default Footer;