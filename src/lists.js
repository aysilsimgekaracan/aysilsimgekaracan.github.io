import WebRoundedIcon from "@material-ui/icons/WebRounded";
import AppleIcon from "@material-ui/icons/Apple";
import AndroidIcon from "@material-ui/icons/Android";

import website from "./assets/img/website.png";
import gdg_certificate from "./assets/img/gdg_certificate.png";
import hacking_with_swift_logo from "./assets/img/hacking_with_swift_logo.png";
import makas_logo from "./assets/img/makas_logo.jpeg";

export const educationArray = [
  {
    date: "2019-2023",
    text: "Beykoz University Computer Engineering",
  },
  {
    date: "2018-2019",
    text: "Beykoz University English Prep School",
  },
];

export const projectsArray = [
  {
    date: "2021",
    text: "My Portfolio Website",
    subtext:
      "This is my first Web project. I built this site using React. This project allowed me to improve my knowledge about HTML, CSS and React",
    image: website,
    links: [
      {
        title: "Github Repositoryyyy of This Project",
        link: "https://github.com/aysilsimgekaracan/aysilsimgekaracan.github.io",
      },
    ],
    icon: <WebRoundedIcon />,
  },
  {
    date: "2020",
    text: "GDG Multicamp Kotlin Course",
    subtext:
      "Developer MultiCamp Android Camp is a 1-month Online Android training camp organized by MultiGroup with the support of Google. Participants, who achieved the required percentage of success in the quizzes and the end-of-training project at the end of the course, were entitled to receive these certificates. With this training, analytical thinking, algorithm and coding skills were developed and Kotlin was learned.",
    image: gdg_certificate,
    links: [
      {
        title: "Verify my Certificate",
        link: "https://verified.cv/en/verify/952474875709",
      },
      {
        title: "Github Repository of my final project",
        link: "https://github.com/aysilsimgekaracan/google-developer-multicamp",
      },
    ],
    icon: <AndroidIcon />,
  },

  {
    date: "2020",
    text: "100 Days of Swift (UIKit)",
    subtext:
      "100 Days of Swift is a course that is aimed for the beginners who want to learn how to build real IOS apps by Paul Hudson. I used this course to improve my knowledge about swift and to make lots of projects.",
    image: hacking_with_swift_logo,
    links: [
      {
        title: "100 Days of Swift",
        link: "https://www.hackingwithswift.com/100",
      },

      {
        title: "Github Repository of This Project",
        link: "https://github.com/aysilsimgekaracan/HackingWithSwift",
      },
    ],
    icon: <AppleIcon />,
  },
];

export const worksArray = [
  {
    title: "MakasApp",
    image: makas_logo,
    date: "Dec 2020 - May 2021",
    text: "This is my first internship. I was in this company as a part time React Native Developer. Working in this job has helped me a lot.",
    bulletedList: [
      "I worked on mobile app projects made using React Native.",
      "I saw how to work as a team on a software project",
      "I had an experience with Redux",
      "I learned how to use git and github.",
    ],
  },
];

export const skillsArray = [
  {
    title: "React Native (and JavaScript)",
    percentage: 75,
    progressCircleTitle: "75%",
    bulletedList: [
      "With the contribution of my internship, I worked with React Native for hundreds of hours.",
      "This is the framework and language I feel most comfortable right now.",
      "Even if the projects I will take part in are big, it is easy for me to adapt.",
    ],
    direction: "right",
  },
  {
    title: "Swift",
    percentage: 55,
    progressCircleTitle: "55%",
    bulletedList: [
      "Swift is my first and most wanted language to learn.",
      "I have developed some small projects (Calculator, RPS_Game, Stopwatch..) with swift since prep class.",
      "I had to stay away from this language for a while because I was doing my internship, but I want to continue to learn very well and make a nice project.",
    ],
    direction: "right",
  },
  {
    title: "C/C++",
    percentage: 35,
    progressCircleTitle: "35%",
    bulletedList: [
      "C and C++ are the languages I've seen in my school classes",
      "I used these languages in my school projects",
    ],
    direction: "right",
  },
  {
    title: "Python",
    percentage: 45,
    progressCircleTitle: "45%",
    bulletedList: [
      "Python was among the languages ​​I wanted to learn",
      "I developed small projects. (Web scraper, Some small games using pygame, Tic-Tac-Toe and a trading bot... )",
    ],
    direction: "right",
  },
  {
    title: "Kotlin",
    percentage: 15,
    progressCircleTitle: "15%",
    bulletedList: [
      "Since I was curious about how things work on the Android side and I felt the need to know, I tried to learn this language and I finished the course you can see in the projects section",
      "This helped me catch the differences between these two platforms and languages.",
    ],
    direction: "right",
  },
];
