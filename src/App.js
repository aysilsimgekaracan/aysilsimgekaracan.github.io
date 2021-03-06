import React, { useState, useEffect, useRef } from "react";
import "react-circular-progressbar/dist/styles.css";
import Media from "react-media";
import {
  IoIosMoon,
  IoIosSunny,
  IoLogoLinkedin,
  IoLogoGithub,
} from "react-icons/io";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/Globalstyle";
import { lightTheme, darkTheme } from "./components/Themes";
import CustomScrollButon from "./components/CustomScrollButton";
import CustomTimeline from "./components/CustomTimeline";

// import strings from "./localization/localization";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Dropdown from "react-dropdown";
// import "react-dropdown/style.css";

// import { slide as Menu } from "react-burger-menu";
// import Hamburger from "hamburger-react";
// import FocusLock from "react-focus-lock";
// import styled from "styled-components";
// import profilePicture from "./assets/img/profilePicture.jpg";

import "./App.css";
import CustomProgressBar from "./components/CustomProgressBar";
import Menu from "./components/Menu";
import Burger from "./components/Burger";
import CustomSection from "./components/CustomSection";
import CustomWorkSection from "./components/CustomWorkSection";

import {
  educationArray,
  projectsArray,
  worksArray,
  skillsArray,
} from "./lists";

const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank");
  if (newWindow) newWindow.opener = null;
};

function App() {
  // const [menuOpened, setMenuOpened] = useState(false);
  const [isLightMode, setIsLightMode] = useState(true);
  // const [language, setLanguage] = useState("en");

  const workRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);

  const scrollToRef = (ref) =>
    window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });

  // useEffect(() => {
  //   strings.setLanguage(language);
  // }, [language]);

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

  function renderThemeToggle() {
    return (
      <button
        onClick={() => setIsLightMode(!isLightMode)}
        className="SwitchTheme"
        style={{
          borderColor: isLightMode ? "white" : "yellow",
          alignItems: "center",
          alignContent: "center",
          textAlign: "center",
        }}
      >
        {isLightMode ? (
          <IoIosMoon size={25} color="white" />
        ) : (
          <IoIosSunny size={25} color="#ffbe3d" />
        )}
      </button>
    );
  }

  // function renderLanguageDropDown() {
  //   const options = [
  //     { value: "en", label: "English" },
  //     { value: "tr", label: "Turkish" },
  //   ];
  //   const defaultOption = language == "en" ? options[0] : options[1];
  //   return (
  //     <div
  //       style={{
  //         justifyContent: "center",
  //         alignItems: "center",
  //         marginLeft: "2%",
  //       }}
  //     >
  //       <Dropdown
  //         options={options}
  //         value={defaultOption}
  //         onChange={({ value }) => setLanguage(value)}
  //       />
  //     </div>
  //   );
  // }

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
                  {matches.small && (
                    <div style={{ width: "100%" }}>
                      {/* <Burger open={menuOpened} setOpen={setMenuOpened} />
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
                      </Menu> */}
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <p className="Name_p">Ay????l Simge Karacan</p>
                        {renderThemeToggle()}
                      </div>
                    </div>
                  )}
                  {matches.large && (
                    <>
                      <p className="Name_p">Ay????l Simge Karacan</p>
                      <button
                        className="Header_p"
                        onClick={() => scrollToRef(workRef)}
                      >
                        Work
                      </button>
                      <button
                        className="Header_p"
                        onClick={() => scrollToRef(projectsRef)}
                      >
                        Projects
                      </button>
                      <button
                        className="Header_p"
                        onClick={() => scrollToRef(skillsRef)}
                      >
                        Skills
                      </button>
                      {renderThemeToggle()}
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
                <p className="HeaderEmoji">???????????</p>
                <hr className="HeaderDivider" />
                <div className="HeaderDetailText">
                  <p className="HeaderDetailTitle">Hi! I'm Ay????l</p>
                  <p className="HeaderDetailSubtitle">
                    I am a computer engineering student who wants to become a
                    mobile app developer.
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <button
                      className="socialMediaButton"
                      onClick={() =>
                        openInNewTab("http://github.com/aysilsimgekaracan")
                      }
                    >
                      <IoLogoGithub size={32} color="#211F1F" />
                    </button>
                    <button
                      className="socialMediaButton"
                      onClick={() =>
                        openInNewTab(
                          "https://www.linkedin.com/in/ay????l-simge-karacan-4b0597202/"
                        )
                      }
                    >
                      <IoLogoLinkedin size={32} color="#0077b5" />
                    </button>
                  </div>
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
              I'm 3rd Year Computer Engineering Student at Beykoz University.
            </p>
            <CustomTimeline
              align="alternate"
              isCustomized={false}
              data={educationArray}
              timelineStyle={{ alignItems: "center" }}
            />
          </CustomSection>

          <CustomSection
            title="Projects"
            backgroundColor="#f25767"
            reference={projectsRef}
          >
            <CustomTimeline
              align="alternate"
              isCustomized={true}
              data={projectsArray}
            />
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
              I'm currently spending my time with my personal projects and
              self-development, but I am open to internship or job offers
              related to Swift (preferably) and/or React Native.
            </p>

            <CustomWorkSection works={worksArray} />
          </CustomSection>

          <CustomSection
            title="Skills"
            backgroundColor="#008aff"
            reference={skillsRef}
          >
            <CustomProgressBar list={skillsArray} />
          </CustomSection>

          <footer className="App-header" style={{ height: 70 }}></footer>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
