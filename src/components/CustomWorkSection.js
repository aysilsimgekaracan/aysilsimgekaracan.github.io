import React from "react";
import styled from "styled-components";

const StyledTitle = styled.p`
  color: ${({ theme }) => theme.workTitle_color};
  transition: all 0.3s linear;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.9 !important;
  text-align: left;
`;

const Divider = styled.hr`
  border-top: 3px solid;
  border-top-color: ${({ theme }) => theme.typography_color};
  transition: all 0.3s linear;
`;

const StyledText = styled.p`
  text-align: left;
  font-size: 1.125rem;
  line-height: 1.9 !important;
  color: ${({ theme }) => theme.workTitle_color};
  transition: all 0.3s linear;
`;

const SkillsList = styled.span`
  transition: all 0.3s linear;
  align-items: center;
  align-self: center;
  justify-content: center;
  color: ${({ theme }) => theme.skillsList_color};
  text-align: left;
  font-size: 1.125rem;
  line-height: 1.5 !important;
`;

const DivHorizontal = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }
  align-items: center;
`;

const StyledImage = styled.img`
  @media (max-width: 768px) {
    max-width: 200px;
    max-height: 150px;
  }
  max-width: 500px;
  max-height: 400px;
  width: auto;
  height: auto;
  border-radius: 5px;
  padding: 10px 10px 10px 10px;
`;

const StyledDateText = styled.p`
  color: ${({ theme }) => theme.workTitle_color};
  transition: all 0.3s linear;
  font-size: 1.125rem;
  line-height: 1.9 !important;
  text-align: left;
  opacity: 0.7;
`;

const Dot = styled.span`
  height: 12px;
  width: 12px;
  background-color: ${({ theme }) => theme.typography_color};
  opacity: 0.4;
  border-radius: 50%;
  @media (min-width: 768px) {
    margin-right: 1%;
    margin-left: 1%;
  }
`;

const CustomWorkSection = ({ works }) => {
  return (
    <React.Fragment>
      {works.map((item) => {
        return (
          <>
            <DivHorizontal>
              <StyledTitle>{item.title}</StyledTitle>
              <Dot />
              <StyledDateText>{item.date}</StyledDateText>
            </DivHorizontal>
            <Divider />
            <DivHorizontal>
              <StyledImage src={item.image} />
              <div style={{ marginLeft: "2%" }}>
                <StyledText>{item.text}</StyledText>
                <SkillsList>
                  {item.bulletedList.map((text) => {
                    return <li>{text}</li>;
                  })}
                </SkillsList>
              </div>
            </DivHorizontal>
          </>
        );
      })}
    </React.Fragment>
  );
};

export default CustomWorkSection;
