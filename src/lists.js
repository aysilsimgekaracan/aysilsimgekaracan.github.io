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
    text: "Beykoz Üniversitesi Computer Engineering",
  },
  {
    date: "2018-2019",
    text: "Beykoz Üniversitesi İngilizce Hazırlık",
  },
];

export const projectsArray = [
  {
    date: "2021",
    text: "My Portfolio Website - aysilsimgekaracan.github.io",
    subtext:
      "This is my first Web project. I built this site using React. This project allowed me to improve my knowledge about HTML, CSS and React",
    image: website,
    links: [
      {
        title: "Github Repository of This Project",
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
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula sed eros eget facilisis. Maecenas varius sapien ut eleifend facilisis. Nam gravida est nisi, non pretium mauris condimentum vitae. Mauris tempor quam leo, ut blandit risus mollis sit amet. Nam leo erat, vehicula vel hendrerit nec, ultrices quis tellus.",
    bulletedList: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Maecenas varius sapien ut eleifend facilisis. Nam gravida est nisi, non pretium mauris condimentum vitae.",
      "Donec vehicula sed eros eget facilisis.",
    ],
  },
];

export const skillsArray = [
  {
    title: "React Native",
    percentage: 70,
    progressCircleTitle: "",
    bulletedList: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Maecenas varius sapien ut eleifend facilisis. Nam gravida est nisi, non pretium mauris condimentum vitae.",
      "Donec vehicula sed eros eget facilisis.",
    ],
    direction: "right",
  },
  {
    title: "Swift",
    percentage: 70,
    progressCircleTitle: "",
    bulletedList: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Maecenas varius sapien ut eleifend facilisis. Nam gravida est nisi, non pretium mauris condimentum vitae.",
      "Donec vehicula sed eros eget facilisis.",
    ],
    direction: "right",
  },
  {
    title: "C/C++",
    percentage: 70,
    progressCircleTitle: "",
    bulletedList: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Maecenas varius sapien ut eleifend facilisis. Nam gravida est nisi, non pretium mauris condimentum vitae.",
      "Donec vehicula sed eros eget facilisis.",
    ],
    direction: "right",
  },
  {
    title: "Python",
    percentage: 70,
    progressCircleTitle: "",
    bulletedList: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Maecenas varius sapien ut eleifend facilisis. Nam gravida est nisi, non pretium mauris condimentum vitae.",
      "Donec vehicula sed eros eget facilisis.",
    ],
    direction: "right",
  },
];
