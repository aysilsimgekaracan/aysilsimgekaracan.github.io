import logo from "./logo.svg";
import "./App.css";
<<<<<<< HEAD
import profilePicture from "./assets/img/profilePicture.jpg";
=======
>>>>>>> parent of 698818f (Updates)

function App() {
  return (
    <div className="App">
      <header className="App-header">
<<<<<<< HEAD
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
      <p>Çok yakında.</p>
=======
        <img src={logo} className="App-logo" alt="logo" />
        <p>Çok yakında.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
>>>>>>> parent of 698818f (Updates)
    </div>
  );
}

export default App;
