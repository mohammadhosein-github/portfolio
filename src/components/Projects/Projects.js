import React, {useState} from 'react';
import pj1Pic from '../../images/pj1.png';
import pj2Pic from '../../images/pj2.png';
import pj3Pic from '../../images/pj3.png';

function Project(){

    return(
        <div className="container-fluid p-container section-padding">
            <div className="row text-right">
                
                <div className="col-md-9 projects">
                    <h3>پروژهای من</h3>
                    <div className="text-right d-flex justify-content-end">
                        <div className="text-container">
                            <p>this is a test</p>
                        </div>
                        <img src={pj3Pic}></img>
                    </div>
                    <div className="card-hr"></div>
                    <div className="text-right d-flex justify-content-end">
                        <div className="text-container">
                            <p>this is a test</p>
                        </div>
                        <img src={pj2Pic}></img>
                    </div>
                </div>
                <div className="col-md-3 skills">
                    <h3>مهارت&zwnj;های من</h3>
                    <div className="row cards-container">
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;