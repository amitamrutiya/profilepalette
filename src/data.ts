import { BtnListType, ProjectListType } from "./types";

export const projectsData: ProjectListType[] = [
  {
    id: 1,
    name: "StudyNotion",
    subHeading: "Online Learning Platform",
    description:
      "StudyNotion is an online learning platform that allows students to learn and collaborate with each other. Also allows teachers to create courses and manage students.",
    demoLink: "https://studynotion.store",
    sourceLink: "https://github.com/amitamrutiya2210/Study-Notion",
    techStack: [
      "Html",
      "Css",
      "JavaScript",
      "React",
      "Express",
      "NodeJS",
      "MongoDB",
      "Tailwind",
      "Razorpay",
      "Git",
    ],
  },
  {
    id: 2,
    name: "MeetNChillChat",
    subHeading: "Video Calling Application",
    description:
      "MeetnChillChat is a video calling, chatting, and streaming application with a backend and a user interface. Enjoy the seamless video calling, streaming and chatting experience.",
    demoLink: "https://meetn-chat.vercel.app",
    sourceLink: "https://github.com/amitamrutiya2210/MeetnChat",
    techStack: [
      "NextJS",
      "TypeScript",
      "Tailwind",
      "ShadCN",
      "Git",
      "WebRTC",
      "Socket.io",
    ],
  },
];

export const BtnList: BtnListType[] = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "https://www.github.com/amitamrutiya2210",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/amit-amrutiya-109b19241",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "X",
    link: "https://twitter.com/AmitAmrutiya2",
    icon: "twitter",
    newTab: true,
  },
  {
    label: "Resume",
    link: "/resume.pdf",
    icon: "resume",
    newTab: true,
  },
];
