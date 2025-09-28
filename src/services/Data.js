import SwiftCart from "../assets/swiftCart.png";
import Event from "../assets/EventSystem.png";
import FilmSage from "../assets/filmsage.jpeg";
import Portfolio from "../assets/portfolio.png";
import Chat from "../assets/Chat.png";
import Agrotrack from "../assets/Agrotrack.jpeg";
import Ekshop from "../assets/Ekshop.png";

export const ProjectsData = [
  {
    title: "Ekshop",
    description:
      "EkShop is a local e-commerce platform I co-founded to make shopping easier for students and residents in Nyeri. It allows users to browse products, place orders, and get affordable deliveries. The platform is built with PHP and MySQL, integrates M-Pesa payments, and currently serves over 150 users with 20+ daily deliveries.",
    shortDesc: "E-commerce platform",
    image: Ekshop,
    stack: ["PHP", "MySQL", "JS", "CSS"],
    gitLink: "",
    liveLink: "https://ekshop.store/",
  },
  {
    title: "Agrotrack",
    description: "AgroTrack+ is a mobile application I’m building as part of my final year project. It supports farmers by providing tools for crop monitoring, soil health tracking, pest detection, and weather updates. The app is built with React Native for cross-platform use and powered by a Node.js + PostgreSQL backend for reliable real-time insights.",
    shortDesc: "A farming tool",
    image: Agrotrack,
    stack: ["ReactNative", "Postgress", "Typescript", "NodeJs"],
    gitLink: "https://github.com/MARKKAGIRI/AGROTRACK",
    // liveLink: "",
  },  
  {
    title: "SwiftCart",
    description:
      "A modern, full-stack e-commerce platform built using Node.js, React, and MongoDB, designed to deliver a fast, user-friendly shopping experience with features like M-Pesa integration.",
    shortDesc: "E-commerce platform",
    image: SwiftCart,
    stack: ["NodeJs", "ReactJs", "ExpressJs", "Tailwind"],
    gitLink: "https://github.com/rodgers-munene/swiftcart",
    liveLink: "https://swiftcart-oxor.vercel.app/",
  },
  {
    title: "FilmSage",
    description:
      "A movie recommendation android application designed to help users discover their next favorite movie.",
    shortDesc: "Movie Recommendation System",
    image: FilmSage,
    stack: ["Expo", "React-Native", "TypeScript", "NativeWind"],
    gitLink: "https://github.com/rodgers-munene/filmsage-mobile",
    // liveLink: "https://github.com/rodgers-munene/filmsage-mobile",
  },
  {
    title: "Event Management System",
    description:
      "A modern, responsive Event Management System built with React and Vite.",
    shortDesc: "Manage Your Events",
    image: Event,
    stack: ["NodeJs", "ReactJs", "ExpressJs"],
    gitLink: "https://github.com/monicahwamuhu2/Event-Management-System-Grp-16",
    // liveLink:
      // "https://github.com/monicahwamuhu2/Event-Management-System-Grp-16",
  },
  {
    title: "PortFolio",
    description: "Personal portfolio",
    shortDesc: "Developer portfolio website",
    image: Portfolio,
    stack: ["ReactJs", "JavaScript", "Tailwind"],
    gitLink: "https://github.com/rodgers-munene/portfolio-final",
    // liveLink: "https://github.com/rodgers-munene/portfolio-final",
  },
  // {
  //   title: "LetsChart",
  //   description: "A live web chart application",
  //   shortDesc: "Web Chat Application",
  //   image: Chat,
  //   stack: ["ReactJs", "NodeJs", "Tailwind", "Socket-io"],
  //   gitLink: "https://github.com/rodgers-munene",
  //   liveLink: "https://github.com/rodgers-munene",
  // },
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

export const funFacts = [
  "I am a curious soul",
  "I love playing BasketBall",
  "Favourite Meal - Anything that involves Chapati",
  "I love creating - I love fixing bugs",
  "Favourite Show - Attack on Titan",
  "I love networking and meeting new people",
  "I value clear communication",
];
