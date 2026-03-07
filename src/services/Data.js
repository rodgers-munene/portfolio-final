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
    description: "AgroTrack+ is a mobile application I’m building as part of my final year project. It supports farmers by providing tools for crop monitoring, soil health tracking, pest detection, and weather updates. The app is built with React Native for cross-platform use and powered by a Node.js + PostgreSQL backend for reliable real-time insights.",
    shortDesc: "A farming tool",
    image: Agrotrack,
    stack: ["ReactNative", "Postgress", "Typescript", "NodeJs"],
    gitLink: "https://github.com/MARKKAGIRI/AGROTRACK",
    // liveLink: "",
  },
  {
    title: "EventHub",
    description: "EventHub is a comprehensive event management system designed to streamline the process of organizing and promoting events. It provides features for event creation, registration, ticketing, and real-time updates.",
    shortDesc: "Event Management System",
    image: Event,
    stack: ["ReactJs", "NodeJs", "ExpressJs", "MySql"],
    gitLink: "https://github.com/rodgers-munene/event-management",
    liveLink: "https://event-management-zftu.vercel.app/",
  },  
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
      "A movie recommendation web application designed to help users discover their next favorite movie.",
    shortDesc: "Movie Recommendation System",
    image: FilmSage,
    stack: ["React", "NodeJs", "TypeScript", "Tailwind"],
    gitLink: "https://github.com/rodgers-munene/filmsage-web",
    liveLink: "https://filmsage.vercel.app/",
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
