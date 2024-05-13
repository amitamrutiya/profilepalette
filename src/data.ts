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
  {
    id: 3,
    name: "Temple Management Web",
    subHeading: "Temple Management Web System",
    description:
      "This is a web application for the GSFC Township Charitable Trust Temple situated in Jamnagar. The application serves real users of the temple and offers a range of functionalities.",
    demoLink: "https://temple.cyclic.app",
    sourceLink: "https://github.com/amitamrutiya2210/Temple-Management-Web",
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
    id: 4,
    name: "Temple Management App",
    subHeading: "Temple Management App System",
    description:
      "This is the same project as above, but as a mobile app. It includes features for booking appointments, making online donations, receiving temple updates, providing contact info, displaying an image gallery, and more.",
    demoLink:
      "https://github.com/amitamrutiya2210/Temple-Management-App#demo-of-project",
    sourceLink: "https://github.com/amitamrutiya2210/Temple-Management-App",
    techStack: ["Flutter", "Dart", "Firebase", "Razorpay", "Git"],
  },
  {
    id: 5,
    name: "Multiple Games",
    subHeading: "One Platform for Multiple Games",
    description:
      "I developed a compilation of several games that includes Piano Tile game, Dinosaur Game, AI tic-tac-toe (easy, medium, hard levels), 2048 Game (3X3, 4X4, 5X5, 6X6), Pac-Man Game, and Mini Sweeper Game",
    demoLink: "https://github.com/amitamrutiya2210/multi_game#demo-for-a-game",
    sourceLink: "https://github.com/amitamrutiya2210/multi_game",
    techStack: ["Flutter", "Dart", "Figma", "Git"],
  },
  {
    id: 6,
    name: "Auth Vault",
    subHeading: "Authentication System in detail",
    description:
      "Auth Vault is a Next.js application that demonstrates how to implement authentication with 2FA, reset password, and resend email verification. It also includes a user/admin dashboard.",
    demoLink: "https://authvault.vercel.app",
    sourceLink: "https://github.com/amitamrutiya2210/Auth-Vault",
    techStack: [
      "Next Js",
      "TypeScript",
      "ShadCN",
      "Next-Auth",
      "ResendMail",
      "Git",
    ],
  },
  {
    id: 7,
    name: "Expense Tracker",
    subHeading: "Track Your Expenses in detail",
    description:
      "This is a full-stack application that allows users to track their expenses. It includes features for adding, deleting, and updating expenses, as well as a user dashboard with interactive graph.",
    demoLink: "https://expense-tracker-pur1.onrender.com",
    sourceLink: "https://github.com/amitamrutiya2210/Expense-Tracker",
    techStack: [
      "React",
      "JavaScript",
      "Express",
      "NodeJS",
      "MongoDB",
      "Appolo Graphql",
      "Git",
    ],
  },
  {
    id: 8,
    name: "SocioBot",
    subHeading: "Social Media Post Generator Bot",
    description:
      "This project is a Telegram bot that generates engaging social media posts based on the events you feed it throughout the day. It uses OpenAI's model to generate the posts.",
    demoLink: "https://t.me/socio_media_bot",
    sourceLink: "https://github.com/amitamrutiya2210/SocioBot",
    techStack: [
      "Node JS",
      "TypeScript",
      "Telegraph",
      "OpenAI GPT-3",
      "MongoDB",
      "Git",
    ],
  },
  {
    id: 9,
    name: "Go Multi Projects",
    subHeading: "Multiple Projects written in GoLang",
    description:
      "This project contains a curated collection of Go projects ranging from basic to advanced levels. It is open-source project that serves as an excellent resource for developers looking to learn GoLang. Each project is designed to showcase specific concepts and features of Go.",
    demoLink: "https://github.com/amitamrutiya2210/Go-Multi-Projects",
    sourceLink: "https://github.com/amitamrutiya2210/Go-Multi-Projects",
    techStack: ["Go", "Docker", "Database", "Apis", "Bots", "CURD", "Git"],
  },
  {
    id: 10,
    name: "Communication Type Survey App",
    subHeading: "Know Your Communication Type",
    description:
      "This application determines users' communication styles based on their responses to specific questions. It allows students to answer 20 questions, and the results for all students are then compiled into the university's Google Sheets.",
    demoLink:
      "https://github.com/amitamrutiya2210/Communication_Type#demo-of-project-",
    sourceLink: "https://github.com/amitamrutiya2210/Communication_Type",
    techStack: ["Flutter", "Dart", "Figma", "Firebase", "GoogleSheets", "Git"],
  },
];

export const BtnList: BtnListType[] = [
  {
    label: "Blog",
    link: "https://medium.com/@amitamrutiya2210",
    icon: "blog",
    newTab: true,
  },
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
