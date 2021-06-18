// import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import profilePicture from "./assets/img/profilePicture.jpg";
import Menu from "./components/Menu";
import Burger from "./components/Burger";

import "react-circular-progressbar/dist/styles.css";
import Media from "react-media";
import CustomProgressBar from "./components/CustomProgressBar";

function App() {
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <Media
          queries={{
            small: "(max-width: 800px)",
            large: "(min-width: 800px)",
          }}
        >
          {(matches) => (
            <div className="HeaderContainer">
              <p className="Name_p">Ayşıl Simge Karacan</p>
              {matches.small && (
                <>
                  <Burger open={menuOpened} setOpen={setMenuOpened} />
                  <Menu open={menuOpened} setOpen={setMenuOpened}>
                    <a href="/">Profile</a>
                    <a href="/">Resume</a>
                    <a href="/">Contact Me</a>
                  </Menu>
                </>
              )}
              {matches.large && (
                <>
                  <p className="Profile_p">Profile</p>
                  <p className="Resume_p">Resume</p>
                  <p className="ContactMe_p">Contact Me</p>
                </>
              )}
            </div>
          )}
        </Media>
        <div className="HeaderInfo_div">
          <img
            className="ProfilePicture"
            src={profilePicture}
            alt={"Profile Picture"}
          />
          <div className="HeaderDetail">
            <p className="HeaderEmoji">👩‍💻</p>
            <hr className="HeaderDivider" />
            <div className="HeaderDetailText">
              <p className="HeaderDetailTitle">Who I am?</p>
              <p className="HeaderDetailSubtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                vehicula sed eros eget facilisis. Maecenas varius sapien ut
                eleifend facilisis. Nam gravida est nisi, non pretium mauris
                condimentum vitae. Mauris tempor quam leo, ut blandit risus
                mollis sit amet. Nam leo erat, vehicula vel hendrerit nec,
                ultrices quis tellus.
              </p>
            </div>
          </div>
        </div>
      </header>
      <section className="EducationSection">
        <p className="EducationTitle">Education</p>
        <p className="EducationSubText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          vehicula sed eros eget facilisis. Maecenas varius sapien ut eleifend
          facilisis. Nam gravida est nisi, non pretium mauris condimentum vitae.
          Mauris tempor quam leo, ut blandit risus mollis sit amet. Nam leo
          erat, vehicula vel hendrerit nec, ultrices quis tellus.
        </p>
      </section>
      <section className="WorkSection">
        <p className="WorkTitle">Work</p>
        <p className="WorkSubText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          vehicula sed eros eget facilisis. Maecenas varius sapien ut eleifend
          facilisis. Nam gravida est nisi, non pretium mauris condimentum vitae.
          Mauris tempor quam leo, ut blandit risus mollis sit amet. Nam leo
          erat, vehicula vel hendrerit nec, ultrices quis tellus.
        </p>
      </section>
      <section className="SkillsSection">
        <p className="SkillsTitle">Skills</p>
        <CustomProgressBar direction="right" />
        <CustomProgressBar direction="right" />
        <CustomProgressBar direction="right" />
      </section>
      <p>Çok yakında.</p>
      <div></div>
      {/* <footer>footer</footer> */}
    </div>
  );
}

export default App;
