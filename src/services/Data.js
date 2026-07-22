import SwiftCart from "../assets/swiftCart.png";
import Event from "../assets/EventSystem.png";
import FilmSage from "../assets/filmsage.png";
import Portfolio from "../assets/portfolio.png";
import Chat from "../assets/Chat.png";
import Agrotrack from "../assets/Agrotrack.jpeg";
import Ekshop from "../assets/Ekshop.png";

export const ProjectsData = [
  {
    title: "Agrotrack",
    description: "A mobile app for farmers, built as my final year project. It tracks crop and soil health, flags pests early, and pulls in live weather data so decisions can be made before problems spread. React Native on the front end, Node.js and PostgreSQL underneath.",
    shortDesc: "A farming tool",
    image: Agrotrack,
    stack: ["ReactNative", "Postgress", "Typescript", "NodeJs"],
    gitLink: "https://github.com/MARKKAGIRI/AGROTRACK",
    // liveLink: "",
  },
  {
    title: "EventHub",
    description: "An event management system that covers the full lifecycle in one place: creating events, handling registrations, issuing tickets, and pushing real-time updates to attendees. Built to replace the usual spreadsheet-and-forms setup organizers get stuck with.",
    shortDesc: "Event Management System",
    image: Event,
    stack: ["ReactJs", "NodeJs", "ExpressJs", "MySql"],
    gitLink: "https://github.com/rodgers-munene/event-management",
    liveLink: "https://event-management-zftu.vercel.app/",
  },  
  {
    title: "Ekshop",
    description:
      "A local e-commerce platform I co-founded to make online shopping practical for students and residents in Nyeri: browse, order, and get an affordable same-area delivery. Built with PHP and MySQL, with M-Pesa payments built in, it now runs 150+ users and 20+ deliveries a day.",
    shortDesc: "E-commerce platform",
    image: Ekshop,
    stack: ["PHP", "MySQL", "JS", "CSS"],
    gitLink: "",
    liveLink: "https://ekshop.store/",
  }, 
  {
    title: "SwiftCart",
    description:
      "A full-stack e-commerce platform built with Node.js, React, and MongoDB, with M-Pesa checkout designed in from the start instead of bolted on after. Focused on a fast catalog, a clean cart flow, and checkout that doesn't lose customers halfway through.",
    shortDesc: "E-commerce platform",
    image: SwiftCart,
    stack: ["NodeJs", "ReactJs", "ExpressJs", "Tailwind"],
    gitLink: "https://github.com/rodgers-munene/swiftcart",
    liveLink: "https://swiftcart-oxor.vercel.app/",
  },
  {
    title: "FilmSage",
    description:
      "A movie discovery web app that pairs a recommendation engine with clean, fast browsing. Built so finding what to watch next takes less time than scrolling through another streaming app's catalog.",
    shortDesc: "Movie Recommendation System",
    image: FilmSage,
    stack: ["React", "NodeJs", "TypeScript", "Tailwind"],
    gitLink: "https://github.com/rodgers-munene/filmsage-web",
    liveLink: "https://filmsage.vercel.app/",
  },
  {
    title: "PortFolio",
    description: "This site is a single-page portfolio built with React and Tailwind, covering shipped work, the stack behind it, and how I actually run a project from discovery through to support after launch.",
    shortDesc: "Developer portfolio website",
    image: Portfolio,
    stack: ["ReactJs", "JavaScript", "Tailwind"],
    gitLink: "https://github.com/rodgers-munene/portfolio-final",
    // liveLink: "https://github.com/rodgers-munene/portfolio-final",
  },
];

export const smallProjects = [
  {
    stack: ["Flutter", "Dart"],
    title: "Flutter Movie App",
    description: "A movie app I built with dart and flutter to practive flutter ui",
    gitLink: "https://github.com/rodgers-munene/movie-app",
  },
  {
    stack: ["Web3", "NodeJs", "ReactJs"],
    title: "A waste Management system",
    description: "A project built on PHP HTML CSS AND JAVASCRIPT for Nyeri waste collection",
    gitLink: "https://github.com/rodgers-munene/MyAsset",
  },
  {
    stack: ["python", "math", "statistics"],
    title: "A trading Algorithm",
    description: "Waste Management system",
    gitLink: "https://github.com/DylanSiegel/Trading-Algo",
  },
];

export const skillsData = [
  {
    title: "Languages",
    details: ["Java", "JavaScript", "Python", "TypeScript", "Dart"],
  },
  {
    title: "Databases",
    details: ["MySql", "MongoDB", "FireBase Firestore", "PostgreSql"],
  },
  {
    title: "other",
    details: ["HTML", "CSS", "Tailwind"],
  },
  {
    title: "Tools",
    details: ["VSCode", "Android Studio", "Linux", "Docker", "Github"],
  },
  {
    title: "Frameworks",
    details: ["React", "React-Native", "NodeJs", "ExpressJs", "Flutter"],
  },
];

export const capabilitiesData = [
  {
    title: "Web Development & UI/UX",
    description: "Responsive, production-grade web apps and interfaces focused on clarity and usability.",
    skills: ["React", "JavaScript", "TypeScript", "Tailwind", "HTML", "CSS"],
  },
  {
    title: "Mobile Development",
    description: "Cross-platform apps with React Native and Flutter.",
    skills: ["React Native", "Flutter", "Dart"],
  },
  {
    title: "Backend, APIs & Databases",
    description: "Reliable REST APIs and services, with schema design across SQL and NoSQL systems.",
    skills: ["NodeJs", "ExpressJs", "PostgreSql", "MySql", "MongoDB", "Python"],
  },
  {
    title: "E-commerce & Payments",
    description: "Online stores with M-Pesa payment integration, built and shipped to real users.",
    skills: ["M-Pesa API", "NodeJs", "PHP", "MySql"],
  },
];
