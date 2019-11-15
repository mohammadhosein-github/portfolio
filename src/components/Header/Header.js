import React from 'react';
import Navbar from './Navbar/Navbar';
import profilePic from '../../images/profile-image.jpg';

function Header (){
    return (
      <div className="header">
        <Navbar />
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
                    <img src={profilePic} className=""></img>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Header;