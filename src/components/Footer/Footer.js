import React from 'react';

function Footer(){
    return(
        <section className="footer my-section" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <p className="m-0">&copy; Copyright 2019. designed by <a href="#home">Mohammad Hosein</a></p>
                    </div>
                    <div className="col-lg-6 text-right icon-container">
                        <a href="https://www.facebook.com/mohammad.hosein.5477272" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/mohammadhosein.business" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                        <a href="https://twitter.com/mohamma51012746" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                        <a href="https://github.com/mohammadhosein-github" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;