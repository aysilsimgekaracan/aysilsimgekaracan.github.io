// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import profilePicture from "./assets/img/profilePicture.jpg";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="HeaderContainer">
          <p className="Name_p">Ayşıl Simge Karacan</p>
          <p className="Profile_p">Profile</p>
          <p className="Resume_p">Resume</p>
          <p className="ContactMe_p">Contact Me</p>
        </div>
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
        <div className="ProgressBarComponent">
          <div className="ProgressBar" id="wrapper">
            <div
              style={{
                width: 144,
                height: 144,
                alignSelf: "center",
                display: "inline-block",
              }}
            >
              <CircularProgressbar value={70} text={`${70}%`} />
            </div>
          </div>
          <ul className="SkillsList">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Maecenas varius sapien ut eleifend facilisis.</li>
            <li>
              Nam gravida est nisi, non pretium mauris condimentum vitae. Mauris
              tempor quam leo, ut blandit risus mollis sit amet.
            </li>
          </ul>
        </div>
      </section>
      <p>Çok yakında.</p>
    </div>
  );
}

export default App;
