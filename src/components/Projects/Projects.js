import React from 'react';
import pj1Pic from '../../images/pj1-img.png';
import pj2Pic from '../../images/pj2-img.png';
import pj3Pic from '../../images/pj3-img.png';
import pjPortfolio from '../../images/pj-portfolio.png';
import jqueryLogo from '../../images/jq-logo.png';
import webpackLogo from '../../images/webpack-logo.png';

function Project(){

    return(
        <div className="container p-container section-padding" id="projects">
            <div className="row text-right">
                
                <div className="col-md-9 projects">
                    <h3 className="pj-section-title">پروژهای من</h3>
                    <div className="text-right my-card">
                        <div className="buttons">
                            <a href="https://mohammadhosein-github.github.io/project-3.0/">demo</a>
                            <a href="https://github.com/mohammadhosein-github/project-3.0">github</a>
                        </div>
                        <div className="text-container">
                            <h4 className="pj-title-margin">Project 3.0</h4>
                            <p>تکنولوژی های استفاده شده :</p>
                            <div className="tec-icons">
                                <span><i className="fab fa-html5"></i>HTML</span>
                                <span><i className="fab fa-css3"></i>CSS</span>
                                <span><i className="fab fa-js"></i>JavaScript</span>
                                <span><i className="fab fa-bootstrap"></i>Bootstrap</span>
                                <span><i className="fab fa-sass"></i>Sass</span>
                                <span><i className="fab fa-js"></i>jQuery</span>
                                <span><i className="fab fa-github"></i>Git</span>
                            </div>
                        </div>
                        <img src={pj3Pic} alt="project_1"></img>
                    </div>
                    <div className="card-hr"></div>
                    <div className="text-right my-card">
                        <div className="buttons">
                            <a href="#home">demo</a>
                            <a href="#home">github</a>
                        </div>
                        <div className="text-container">
                            <h4 className="pj-title-margin">Portfolio</h4>
                            <p>تکنولوژی های استفاده شده :</p>
                            <div className="tec-icons">
                                <span><i className="fab fa-html5"></i>HTML</span>
                                <span><i className="fab fa-css3"></i>CSS</span>
                                <span><i className="fab fa-js"></i>JavaScript</span>
                                <span><i className="fab fa-bootstrap"></i>Bootstrap</span>
                                <span><i className="fab fa-sass"></i>Sass</span>
                                <span><i className="fab fa-react"></i>React</span>
                                <span><i className="fab fa-github"></i>Git</span>
                            </div>
                        </div>
                        <img src={pjPortfolio} alt="portfolio"></img>
                    </div>
                    <div className="card-hr"></div>
                    <div className="text-right my-card">
                        <div className="buttons">
                            <a href="https://mohammadhosein-github.github.io/project-2.0">demo</a>
                            <a href="https://github.com/mohammadhosein-github/project-2.0">github</a>
                        </div>
                        <div className="text-container">
                            <h4>Project 2.0</h4>
                            <p>تکنولوژی های مورد استفاده :</p>
                            <div className="tec-icons">
                                <span><i className="fab fa-html5"></i>HTML</span>
                                <span><i className="fab fa-css3"></i>CSS</span>
                                <span><i className="fab fa-bootstrap"></i>Bootstrap</span>
                                <span><i className="fab fa-sass"></i>Sass</span>
                                <span><i className="fab fa-github"></i>Git</span>
                            </div>
                        </div>
                        <img src={pj2Pic} alt="project_2"></img>
                    </div>
                    <div className="card-hr"></div>
                    <div className="text-right my-card">
                        <div className="buttons">
                            <a href="https://mohammadhosein-github.github.io/project-1.0">demo</a>
                            <a href="https://github.com/mohammadhosein-github/project-1.0">github</a>
                        </div>
                        <div className="text-container">
                            <h4>Project 1.0</h4>
                            <p>تکنولوژی های مورد استفاده :</p>
                            <div className="tec-icons">
                                <span><i className="fab fa-html5"></i>HTML</span>
                                <span><i className="fab fa-css3"></i>CSS</span>
                                <span><i className="fab fa-bootstrap"></i>Bootstrap</span>
                                <span><i className="fab fa-github"></i>Git</span>
                            </div>    
                        </div>
                        <img src={pj1Pic} alt="project_1"></img>
                    </div>
                </div>

                
                <div className="col-md-3 skills">
                    <h3>مهارت&zwnj;های من</h3>
                    
                        <div className="card-container col-12 col-sm-6 col-md-12">
                            <div className="skills-cards">
                                <i className="fab fa-html5"></i>
                                <h4 href="#">HTML</h4>
                            </div>
                        </div>
                        <div className="card-container col-12 col-sm-6 col-md-12">
                            <div className="skills-cards">
                                <i className="fab fa-css3-alt"></i>
                                <h4 href="#">CSS</h4>
                            </div>
                        </div>
                        <div className="card-container col-12 col-sm-6 col-md-12">
                            <div className="skills-cards">
                                <i className="fab fa-js-square"></i>
                                <h4 href="#">JavaScript</h4>
                            </div>
                        </div>
                        <div className="card-container col-12 col-sm-6 col-md-12">
                            <div className="skills-cards">
                                <i className="fab fa-bootstrap"></i>
                                <h4 href="#">Bootstrap</h4>
                            </div>
                        </div>
                        <div className="card-container col-12 col-sm-6 col-md-12">
                            <div className="skills-cards">
                                <i className="fab fa-sass"></i>
                                <h4 href="#">Sass</h4>
                            </div>
                        </div>
                        <div className="card-container col-12 col-sm-6 col-md-12">
                            <div className="skills-cards">
                                <img src={jqueryLogo} alt="jquery"/>
                                <h4 href="#">JQuery</h4>
                            </div>
                        </div>
                        <div className="card-container col-12 col-sm-6 col-md-12">
                            <div className="skills-cards">
                                <i className="fab fa-react"></i>
                                <h4 href="#">React</h4>
                            </div>
                        </div>
                        <div className="card-container col-12 col-sm-6 col-md-12">
                            <div className="skills-cards">
                                <i className="fab fa-github"></i>
                                <h4 href="#">Github</h4>
                            </div>
                        </div>
                        <div className="card-container col-12 col-sm-6 col-md-12">
                            <div className="skills-cards">
                                <img className="webpack" src={webpackLogo} alt="webpack"></img>
                                <h4 href="#">Webpack</h4>
                            </div>
                        </div>
                </div>


            </div>
        </div>
    );
}

export default Project;