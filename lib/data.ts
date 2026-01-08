import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import coookrImg from "@/public/cookr.webp";
import nourishoImg from "@/public/nourisho.webp";
import ippopayImg from "@/public/ippopay.webp";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Cookr : Software Engineer",
    location: "Bangalore, India",
    description:
      "As a Software Engineer at Cookr, I work on developing and enhancing a food-tech mobile application using React Native. My responsibilities include building scalable UI components, implementing subscription and ordering flows, integrating APIs, and improving overall app performance to deliver a smooth user experience.",
    icon: React.createElement(FaReact),
    date: "Jan 2025 – Present",
  },
  {
    title: "Hiyaak System : Software Engineer",
    location: "Bangalore, India",
    description:
      "At Hiyaak System, I contributed to multiple mobile application projects using Flutter and React Native. I was involved in end-to-end feature development, state management, API integrations, and delivering stable, production-ready applications while collaborating closely with cross-functional teams.",
    icon: React.createElement(FaReact),
    date: "Dec 2022 – Jan 2025",
  },
] as const;

// export const projectsData = [
//   {
//     title: "Cookr",
//     description:
//       "An application that helps individuals solve their legal problems and provides a platform to easily hire lawyers.",
//     tags: ["React-Native", "MERN", "JWT AUTH","Eas","Other native libraries"],
//     imageUrl: corpcommentImg,
//   },
//   {
//     title: "Nourisho",
//     description:
//       "This is a Zomato clone application built using React Native and Expo.",
//     tags: ["React Native", "Expo", "React Navigation", "react-native-maps", "expo-av"],
//     imageUrl: rmtdevImg,
//   },
//   {
//     title: "IppoPay",
//     description:
//       "Daily Tracker: Keep track of uncompleted tasks for each day. Retrieve a list of all todos or a specific todo by ID. Monthly Profile Graph: Visualize monthly activity with a profile graph.",
//     tags: ["React Native", "Victory Native", "MongoDB"],
//     imageUrl: wordanalyticsImg,
//   },
// ] as const;

export const projectsData = [
  {
    title: "Cookr",
    description:
      "A food-tech marketplace connecting customers with FSSAI-registered home cooks to deliver healthy, homemade meals directly to their doorstep.",
    tags: [
      "React Native",
      "TypeScript",
      "Redux",
      "REST APIs",
      "Custom UI Components",
    ],
    imageUrl: coookrImg,
  },
  {
    title: "Nourisho",
    description:
      "A food platform connecting users with clean-labelled sellers, delivering fresh, organic, and preservative-free food with a focus on quality and sourcing.",
    tags: [
      "React Native",
      "Expo",
      "React Navigation",
      "react-native-maps",
      "Expo AV",
    ],
    imageUrl: nourishoImg,
  },
  {
    title: "IppoPay",
    description:
      "A unified bill payment application enabling users to pay electricity, water, gas, DTH, broadband, insurance, and credit card bills securely from a single platform.",
    tags: ["Flutter", "BLoC", "Dart", "Payments", "API Integration"],
    imageUrl: ippopayImg,
  },
] as const;

export const skillsData = [
  "C/C++",
  "JavaScript",
  "Dart",
  "TypeScript",
  "React Native",
  "Expo",
  "Flutter",
  "React.js",
  "Git/GitHub",
  "Node",
  "AWS",
  "Firebase Functions/Firestore",
  "Stripe",
  "RazorPay",
  "MongoDB",
  "CSS",
  "REST API",
  "CI/CD (Jenkins)",
  "UAT Testing",
  "MVC Architecture",
  "MVVM",
  "WebRTC",
  "WebSocket",
] as const;
