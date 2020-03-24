import React from "react";
import Navbar from "./Navbar/Navbar";
import profilePic from "../../images/website-profile2.jpg";

function Header() {
  const social_media_data = [
    {
      title: "Instagram",
      link: "https://www.instagram.com/mohammadhosein.business",
      icon: <i className="fab fa-instagram"></i>
    },
    {
      title: "Twitter",
      link: "https://twitter.com/mohamma51012746",
      icon: <i className="fab fa-twitter"></i>
    },
    {
      title: "Github",
      link: "https://github.com/mohammadhosein-github",
      icon: <i className="fab fa-github"></i>
    },
    {
      title: "Facebook",
      link: "https://www.facebook.com/mohammad.hosein.5477272",
      icon: <i className="fab fa-facebook-f"></i>
    }
  ];

  return (
    <div className="header" id="home">
      <Navbar />
      <div className="my-icons">
        {social_media_data.map(item => {
          const { title, link, icon } = item;
          return (
            <a
              href={link}
              title={title}
              target="_blank"
              rel="noopener noreferrer"
            >
              {icon}
            </a>
          );
        })}
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
