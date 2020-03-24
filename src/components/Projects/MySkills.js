import React from "react";

function MySkills(props) {
  const { name, icon } = props.skill_data;
  return (
    <div className="card-container col-12 col-sm-6 col-md-12">
      <div className="skills-cards">
        {icon}
        <h4 href="#">{name}</h4>
      </div>
    </div>
  );
}

export default MySkills;
