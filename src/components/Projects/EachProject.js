import React from "react";

function EachProject(props) {
  const data = props.project_data;
  return (
    <div className="text-right my-card">
      <div className="buttons">
        <a href={data.demo_link} target="_blank" rel="noopener noreferrer">
          demo
        </a>
        <a href={data.github_link} target="_blank" rel="noopener noreferrer">
          github
        </a>
      </div>
      <div className="text-container">
        <h4 className="pj-title-margin">{data.name}</h4>
        <p>تکنولوژی های استفاده شده :</p>
        <div className="tec-icons">
          {data.technologies.map(item => {
            let icon;
            switch (item) {
              case "html":
                icon = <i className="fab fa-html5"></i>;
                break;
              case "css":
                icon = <i className="fab fa-css3"></i>;
                break;
              case "javascript":
                icon = <i className="fab fa-js"></i>;
                break;
              case "bootstrap":
                icon = <i className="fab fa-bootstrap"></i>;
                break;
              case "sass":
                icon = <i className="fab fa-sass"></i>;
                break;
              case "jquery":
                icon = <i className="fab fa-js"></i>;
                break;
              case "react":
                icon = <i className="fab fa-react"></i>;
                break;
              case "git":
                icon = <i className="fab fa-github"></i>;
                break;

              default:
                break;
            }
            return (
              <span className="text-capitalize">
                {icon}
                {item}
              </span>
            );
          })}
        </div>
      </div>
      <img src={data.project_img} alt="project_1"></img>
    </div>
  );
}

export default EachProject;
