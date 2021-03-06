import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Footer from "../components/Footer";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../components/globalStyles";
import { lightTheme, darkTheme } from "../components/Theme";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const isMobile = useMediaQuery("(max-width:500px)");

  const refs = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    contact: useRef(null),
  };

  const themeToggler = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }
  }, []);

  const handleScroll = () => {
    const scrollY = window.pageYOffset;
    Object.keys(refs).forEach((key) => {
      const sectionHeight = refs[key].current.offsetHeight;
      const sectionTop = refs[key].current.offsetTop - 200;
      const sectionId = key;
      let link = document.querySelector("a[href*=" + sectionId + "]");
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        link && link.classList.add("active");
      } else {
        link && link.classList.remove("active");
      }
    });
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Head>
        <title>Aya Bochman | Full Stack Web Developer</title>
        <link rel="icon" href="/laptop.ico" />
      </Head>
      <Header ref={refs.home} />
      <Navbar
        ref={refs}
        themeToggler={themeToggler}
        darkMode={darkMode}
        isMobile={isMobile}
      />
      <Main ref={refs} />
      <Footer />
    </ThemeProvider>
  );
}
