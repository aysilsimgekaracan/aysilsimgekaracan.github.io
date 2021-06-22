// import logo from "./logo.svg";
import React, { useState, useEffect, useRef } from "react";
import "react-circular-progressbar/dist/styles.css";
import Media from "react-media";
import { IoIosMoon, IoIosSunny } from "react-icons/io";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/Globalstyle";
import { lightTheme, darkTheme } from "./components/Themes";
import CustomScrollButon from "./components/CustomScrollButton";

// import { slide as Menu } from "react-burger-menu";
// import Hamburger from "hamburger-react";
// import FocusLock from "react-focus-lock";
// import styled from "styled-components";

import "./App.css";
import CustomProgressBar from "./components/CustomProgressBar";
// import profilePicture from "./assets/img/profilePicture.jpg";
import Menu from "./components/Menu";
import Burger from "./components/Burger";
import CustomSection from "./components/CustomSection";

function App() {
  const [menuOpened, setMenuOpened] = useState(false);
  const [isLightMode, setIsLightMode] = useState(true);

  const workRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);

  const scrollToRef = (ref) =>
    window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setIsLightMode(false);
    }

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        setIsLightMode(e.matches ? false : true);
      });
  }, [setIsLightMode]);

  return (
    <ThemeProvider theme={isLightMode ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <CustomScrollButon />
        <div className="App">
          <header className="App-header">
            <Media
              queries={{
                small: "(max-width: 1000px)",
                large: "(min-width: 1000px)",
              }}
            >
              {(matches) => (
                <div className="HeaderContainer">
                  <p className="Name_p">Ayşıl Simge Karacan</p>
                  <button
                    onClick={() => setIsLightMode(!isLightMode)}
                    className="SwitchTheme"
                    style={{
                      borderColor: isLightMode ? "white" : "yellow",
                    }}
                  >
                    {isLightMode ? (
                      <IoIosMoon size={32} color="white" />
                    ) : (
                      <IoIosSunny size={32} color="#ffbe3d" />
                    )}
                  </button>

                  {matches.small && (
                    <>
                      <Burger open={menuOpened} setOpen={setMenuOpened} />
                      <Menu open={menuOpened} setOpen={setMenuOpened}>
                        <a
                          onClick={() => {
                            scrollToRef(workRef);
                            setMenuOpened(false);
                          }}
                        >
                          Work
                        </a>
                        <a
                          onClick={() => {
                            scrollToRef(projectsRef);
                            setMenuOpened(false);
                          }}
                        >
                          Projects
                        </a>
                        <a
                          onClick={() => {
                            scrollToRef(skillsRef);
                            setMenuOpened(false);
                          }}
                        >
                          Skills
                        </a>
                      </Menu>
                    </>
                  )}
                  {matches.large && (
                    <>
                      <a
                        className="Header_p"
                        onClick={() => scrollToRef(workRef)}
                      >
                        Work
                      </a>
                      <a
                        className="Header_p"
                        onClick={() => scrollToRef(projectsRef)}
                      >
                        Projects
                      </a>
                      <a
                        className="Header_p"
                        onClick={() => scrollToRef(skillsRef)}
                      >
                        Skills
                      </a>
                    </>
                  )}
                </div>
              )}
            </Media>
            <div className="HeaderInfo_div">
              {/* <img
                className="ProfilePicture"
                src={profilePicture}
                alt={"Profile"}
              /> */}
              <div
                className="HeaderDetail"
                style={{
                  backgroundColor: isLightMode
                    ? lightTheme.headerDetail_bg
                    : darkTheme.headerDetail_bg,
                  color: isLightMode
                    ? lightTheme.headerDetail_color
                    : darkTheme.headerDetail_color,
                }}
              >
                <p className="HeaderEmoji">👩‍💻</p>
                <hr className="HeaderDivider" />
                <div className="HeaderDetailText">
                  <p className="HeaderDetailTitle">Who I am?</p>
                  <p className="HeaderDetailSubtitle">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec vehicula sed eros eget facilisis. Maecenas varius
                    sapien ut eleifend facilisis. Nam gravida est nisi, non
                    pretium mauris condimentum vitae. Mauris tempor quam leo, ut
                    blandit risus mollis sit amet. Nam leo erat, vehicula vel
                    hendrerit nec, ultrices quis tellus.
                  </p>
                </div>
              </div>
            </div>
          </header>
          <CustomSection
            title="Education"
            backgroundColor="#ffbe3d"
            id="education"
          >
            <p
              className="subText"
              style={{
                color: isLightMode
                  ? lightTheme.subText_color
                  : darkTheme.subText_color,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              vehicula sed eros eget facilisis. Maecenas varius sapien ut
              eleifend facilisis. Nam gravida est nisi, non pretium mauris
              condimentum vitae. Mauris tempor quam leo, ut blandit risus mollis
              sit amet. Nam leo erat, vehicula vel hendrerit nec, ultrices quis
              tellus.
            </p>
          </CustomSection>

          <CustomSection
            title="Work"
            backgroundColor="#5cc9a7"
            reference={workRef}
          >
            <p
              className="subText"
              style={{
                color: isLightMode
                  ? lightTheme.subText_color
                  : darkTheme.subText_color,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              vehicula sed eros eget facilisis. Maecenas varius sapien ut
              eleifend facilisis. Nam gravida est nisi, non pretium mauris
              condimentum vitae. Mauris tempor quam leo, ut blandit risus mollis
              sit amet. Nam leo erat, vehicula vel hendrerit nec, ultrices quis
              tellus.
            </p>
          </CustomSection>

          <CustomSection
            title="Projects"
            backgroundColor="#f25767"
            reference={projectsRef}
          ></CustomSection>

          <CustomSection
            title="Skills"
            backgroundColor="#008aff"
            reference={skillsRef}
          >
            <CustomProgressBar direction="right" />
            <CustomProgressBar direction="right" />
            <CustomProgressBar direction="right" />
          </CustomSection>

          <p>Çok yakında.</p>
          <div></div>
          {/* <footer>footer</footer> */}
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
