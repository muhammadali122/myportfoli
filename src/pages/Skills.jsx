import React from "react";
import { Container } from "react-bootstrap";

import { skillsConstants } from "../constants";
import AreaHeading from "../layout/areaHeading";

const Skills = () => {
  return (
    <Container className="py-md-5 py-3">
      <AreaHeading word1="MY" word2="SKILLS" />

      <div className="py-md-5 py-3">
        {skillsConstants.map((group, groupIndex) => (
          <div
            key={group.category}
            className="mb-4"
            data-aos="fade-up"
            data-aos-delay={groupIndex * 150}
          >
            <h5 className="text-warning fw-bold mb-3 text-glow">{group.category}</h5>
            <div className="d-flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-2 rounded-pill bg-secondary bg-opacity-50 text-white fw-500 warning-hover skill-chip-3d"
                  role="button"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Skills;
