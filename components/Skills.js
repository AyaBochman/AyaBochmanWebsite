import React from "react";
import styled from "styled-components";
import Heading from "./commons/Heading";
import SkillBar from "./commons/SkillBar";
import formatDistance from "date-fns/formatDistance";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubes } from "@fortawesome/free-solid-svg-icons";

const skills = [
  {
    name: "React",
    percent: "90",
  },
  {
    name: "CSS",
    percent: "80",
  },
  {
    name: "HTML",
    percent: "85",
  },
  {
    name: "Javascript",
    percent: "90",
  },
  {
    name: "Node.js",
    percent: "75",
  },
  {
    name: "MongoDB",
    percent: "70",
  },
];

const Skills = ({ skillsRef }) => {
  const calculateExp = () => {
    const args = [new Date(2019, 1, 9), new Date()];
    return formatDistance(...args);
  };

  return (
    <>
      <Heading itemRef={skillsRef} text={"skills"} />
      <StyledSkills>
        <span className={"exp"}>
          <code>let myExp = {calculateExp()}</code>{" "}
        </span>
        <div className={"skills-container"}>
          {skills &&
            skills.map((skill, i) => {
              return <SkillBar key={i} skill={skill} />;
            })}
        </div>
      </StyledSkills>
    </>
  );
};

export default Skills;

const StyledSkills = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 50px 45px 50px;
  .exp {
    margin: 0 auto 20px auto;
    font-size: 16px;
    color: var(--gradient-2);
  }
  .skills-container {
    width: 250px;
    margin: 0 auto;
  }
  @media (min-width: 1024px) {
    padding: 30px 50px 45px 50px;
  }
  @media (min-width: 768px) {
    .skills-container {
      width: 350px;
    }
  }
`;
