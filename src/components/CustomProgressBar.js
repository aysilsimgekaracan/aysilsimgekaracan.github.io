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

const StyledTitle = styled.p`
  color: ${({ theme }) => theme.workTitle_color};
  transition: all 0.3s linear;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.9 !important;
  text-align: left;
`;

const renderProgressBar = (value, text) => {
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
        <CircularProgressbar value={value} text={text} />
      </div>
    </div>
  );
};

const renderSkillList = (list) => {
  return (
    <SkillsList className="SkillsList">
      {list.map((text) => {
        return <li>{text}</li>;
      })}
    </SkillsList>
  );
};

function CustomProgressBar({ list }) {
  return (
    <React.Fragment>
      {list.map((item) => {
        return (
          <>
            <StyledTitle style={{ textAlign: "center" }}>
              {item.title}
            </StyledTitle>
            <div className="ProgressBarComponent">
              {item.direction !== "left"
                ? [
                    renderProgressBar(
                      item.percentage,
                      item.progressCircleTitle
                    ),
                    renderSkillList(item.bulletedList),
                  ]
                : [
                    renderSkillList(item.bulletedList),
                    renderProgressBar(
                      item.percentage,
                      item.progressCircleTitle
                    ),
                  ]}
            </div>
          </>
        );
      })}
    </React.Fragment>
  );
}

export default CustomProgressBar;
