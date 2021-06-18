import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function CustomProgressBar() {
  return (
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
  );
}

export default CustomProgressBar;
