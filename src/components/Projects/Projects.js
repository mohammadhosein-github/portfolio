import React from "react";
import { skills, projects_data } from "./Data";
import EachProject from "./EachProject";
import MySkills from "./MySkills";

function Project() {
  return (
    <div className="container p-container section-padding" id="projects">
      <div className="row text-right">
        <div className="col-md-9 projects">
          <h3 className="pj-section-title">پروژهای من</h3>
          {projects_data.map(p => {
            return (
              <React.Fragment key={p.name}>
                <EachProject project_data={p} />
                {p !== projects_data[projects_data.length - 1] && (
                  <div className="card-hr"></div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        <div className="col-md-3 skills">
          <h3>مهارت&zwnj;های من</h3>
          {skills.map(skill => (
            <MySkills skill_data={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
