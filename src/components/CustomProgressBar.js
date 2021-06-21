import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styled from "styled-components";

const SkillsList = styled.span`
  align-items: center;
  align-self: center;
  justify-content: center;
  color: ${({ theme }) => theme.skillsList_color};
  text-align: left;
  font-size: 1.125rem;
  font-weight: 300;
  line-height: 1.5 !important;
`;

const renderProgressBar = () => {
  return (
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
  );
};

const renderSkillList = () => {
  return (
    <SkillsList className="SkillsList">
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      <li>Maecenas varius sapien ut eleifend facilisis.</li>
      <li>
        Nam gravida est nisi, non pretium mauris condimentum vitae. Mauris
        tempor quam leo, ut blandit risus mollis sit amet.
      </li>
    </SkillsList>
  );
};

function CustomProgressBar({ list, direction = "right" }) {
  return (
    <div className="ProgressBarComponent">
      {direction !== "left"
        ? [renderProgressBar(), renderSkillList()]
        : [renderSkillList(), renderProgressBar()]}
    </div>
  );
}

export default CustomProgressBar;
