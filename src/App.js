// import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import profilePicture from "./assets/img/profilePicture.jpg";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Media from "react-media";
import styled from "styled-components";

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #effffa;
  transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
  height: 50vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0%;
  right: 0;
  transition: transform 0.3s ease-in-out;
  @media (max-width: 576px) {
    width: 100%;
  }
  border-radius: 1rem;
  z-index: 20;
  a {
    font-size: calc(1.3rem + 0.6vw);
    padding: 2rem 0;
    font-weight: 600;
    color: #000;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`;

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">Profile</a>
      <a href="/">Resume</a>
      <a href="/">Contact Me</a>
    </StyledMenu>
  );
};

const StyledBurger = styled.button`
  position: absolute;
  top: 5%;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 30;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (!open ? "#0D0C1D" : "#EFFFFA")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (!open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (!open ? "0" : "1")};
      transform: ${({ open }) =>
        !open ? "translateX(20px)" : "translateX(0)"};
    }

    :nth-child(3) {
      transform: ${({ open }) => (!open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

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
                  <Menu open={menuOpened} setOpen={setMenuOpened} />
                </>
              )}
              {matches.large && (
                <>
                  {setMenuOpened(false)}
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
      <div></div>
      {/* <footer>footer</footer> */}
    </div>
  );
}

export default App;
