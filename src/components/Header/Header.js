import React from 'react';
import Navbar from './Navbar/Navbar';
import profilePic from '../../images/website-profile2.jpg';

function Header (){
    
    return (
      <div className="header" id="home">
        <Navbar />
        <div className="my-icons">
          <a href="https://www.instagram.com/mohammadhosein.business" title="Instagram"><i className="fab fa-instagram"></i></a>
          <a href="https://twitter.com/mohamma51012746" title="Twitter"><i className="fab fa-twitter"></i></a>
          <a href="https://github.com/mohammadhosein-github" title="Github"><i className="fab fa-github"></i></a>
          <a href="https://www.facebook.com/mohammad.hosein.5477272" title="Facebook"><i className="fab fa-facebook-f"></i></a>

        </div>
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-12 col-md-7 col-xl-6 text-area text-right">
              <h1>سلام، من محمد حسین هستم</h1>
              <div className="my-stroke"></div>
              <p>
                یه Fron-end Developer که به HTML، CSS و JavaScript تسلط دارم و
                عاشق برنامه نویسی و یادگرفتن تکنولوژی های جدید وب هستم.
              </p>
            </div>

            <div className="col-5 col-md-4 col-xl-3">
                <div className="box">
                    <img src={profilePic} alt="profile_picture"></img>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Header;