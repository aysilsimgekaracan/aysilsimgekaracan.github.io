import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@material-ui/lab";
import { Typography, Paper } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const StyledDate = styled.p`
  font-size: small;
  color: ${({ theme }) => theme.typography_date_color};
  transition: all 0.3s linear;
`;

const StyledText = styled.p`
  color: ${({ theme }) => theme.typography_color};
  transition: all 0.3s linear;
  font-size: 1.125rem;
  font-weight: 300;
  line-height: 1.9 !important;
`;

const StyledPaper = styled.div`
  background-color: ${({ theme }) => theme.timeline_bg};
  border-radius: 10px;
  padding: 5px;
`;

const StyledHeading = styled.p`
  color: ${({ theme }) => theme.typography_heading_color};
  font-size: 24px;
  font-weight: 500;
`;

const StyledImage = styled.img`
  @media (max-width: 768px) {
    max-width: 300px;
    max-height: 200px;
  }
  max-width: 500px;
  max-height: 400px;
  width: auto;
  height: auto;
  border-radius: 5px;
  padding: 10px 10px 10px 10px;
`;

const StyledLink = styled.a`
  color: ${({ theme }) => theme.typography_color};
  transition: all 0.3s linear;
  font-size: 1.125rem;
  font-weight: 300;
  line-height: 1.9 !important;
`;

function CustomTimeline({
  align = "left",
  isCustomized = false,
  data = [],
  timelineStyle = null,
}) {
  return (
    <React.Fragment>
      <Timeline align={align} style={timelineStyle}>
        {isCustomized
          ? data.map((item) => {
              return (
                <TimelineItem>
                  <TimelineOppositeContent>
                    <StyledDate>{item.date}</StyledDate>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot>{item.icon}</TimelineDot>
                    {item.text != data[data.length - 1].text && (
                      <TimelineConnector />
                    )}
                  </TimelineSeparator>
                  <TimelineContent>
                    <Paper
                      elevation={3}
                      style={{
                        textAlign: "center",
                        borderRadius: "10px",
                      }}
                    >
                      <StyledPaper>
                        <StyledHeading>{item.text}</StyledHeading>
                        <StyledImage src={item.image} />
                        <StyledText>{item.subtext}</StyledText>
                        {item.links.length > 0 &&
                          item.links.map((link) => {
                            return (
                              <>
                                <StyledLink
                                  href={link.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {link.title}
                                </StyledLink>{" "}
                                <br />
                              </>
                            );
                          })}
                      </StyledPaper>
                    </Paper>
                  </TimelineContent>
                </TimelineItem>
              );
            })
          : data.map((item) => {
              return (
                <TimelineItem>
                  <TimelineOppositeContent>
                    <StyledDate>{item.date}</StyledDate>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                    {item.text != data[data.length - 1].text && (
                      <TimelineConnector />
                    )}
                  </TimelineSeparator>
                  <TimelineContent>
                    <StyledText>{item.text}</StyledText>
                  </TimelineContent>
                </TimelineItem>
              );
            })}
      </Timeline>
    </React.Fragment>
  );
}

export default CustomTimeline;
