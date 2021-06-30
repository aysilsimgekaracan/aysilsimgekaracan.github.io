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
                    <Typography variant="body2" color="textSecondary">
                      {item.date}
                    </Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot>{item.icon}</TimelineDot>
                    {item.text != data[data.length - 1].text && (
                      <TimelineConnector />
                    )}
                  </TimelineSeparator>
                  <TimelineContent>
                    <Paper elevation={3}>
                      <Typography variant="h6" component="h1">
                        {item.text}
                      </Typography>
                      <Typography>{item.subtext}</Typography>
                    </Paper>
                  </TimelineContent>
                </TimelineItem>
              );
            })
          : data.map((item) => {
              return (
                <TimelineItem>
                  <TimelineOppositeContent>
                    <Typography color="textSecondary">{item.date}</Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                    {item.text != data[data.length - 1].text && (
                      <TimelineConnector />
                    )}
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography>{item.text}</Typography>
                  </TimelineContent>
                </TimelineItem>
              );
            })}
      </Timeline>
    </React.Fragment>
  );
}

export default CustomTimeline;
