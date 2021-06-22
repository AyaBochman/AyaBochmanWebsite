import React, { forwardRef, useEffect } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faMoon as farMoon } from "@fortawesome/free-regular-svg-icons";

const Navbar = forwardRef((props, refs) => {
  const { themeToggler, darkMode } = props;
  useEffect(() => {
    console.log("nav", refs);
  }, []);
  const scrollRef = (name) => {
    refs[name].current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <StyledNav>
      {/* <Fade top> */}
      <div>
        <a onClick={() => scrollRef("top")} href="#home" className={"home-btn"}>
          <FontAwesomeIcon icon={faLaptopCode} className={"nav-icon"} />
        </a>
      </div>
      <div>
        <a onClick={() => scrollRef("about")} className={"link"} href="#about">
          About
        </a>
        <a
          onClick={() => scrollRef("skills")}
          className={"link"}
          href="#skills"
        >
          Skills
        </a>
        <a
          onClick={() => scrollRef("contact")}
          className={"link"}
          href="#contact"
        >
          Contact
        </a>
      </div>

      <button type="button" className={"dm-btn"} onClick={themeToggler}>
        {/* icon={darkMode ? farMoon : faMoon} */}
        <FontAwesomeIcon icon={farMoon} className={"nav-icon"} icon={darkMode ? farMoon : faMoon}/>
      </button>
      {/* </Fade> */}
    </StyledNav>
  );
});

export default Navbar;

const StyledNav = styled.div`
  height: 60px;
  font-family: "Raleway";
  box-shadow: 0 4px 6px -4px grey;
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;
  /* padding: 0 25px; */
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: var(--light-bg);
  a {
    text-transform: uppercase;
    font-size: 20px;
    color: var(--gradient-2);
    font-weight: 300;
    padding: 0.25rem 0;
    transition: 0.1s ease-in-out;
    margin: 0 10px;
  }

  a.link {
    &:hover,
    &:active {
      color: var(--gradient-1);
      border-bottom: 3px solid var(--gradient-1);
    }
  }

  .active {
    color: var(--gradient-1);
    border-bottom: 3px solid var(--gradient-1);
  }

  @media (min-width: 768px) {
    a {
      margin: 0 30px;
    }
  }

  a.home-btn,
  button.dm-btn {
    border: none;
    margin: 0;
    background: none;
    cursor: pointer;
    margin-top: 2px;
    color: var(--gradient-2);
    &:active,
    &:hover,
    &:focus {
      color: var(--gradient-1);
    }
  }

  .nav-icon {
    height: 28px;
    /* color: var(--gradient-2); */
  }
`;
