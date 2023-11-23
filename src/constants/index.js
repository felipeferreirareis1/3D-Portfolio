import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  photoshop,
  php,
  python,
  nodejs,
  mongodb,
  git,
  docker,
  etec,
  ifsp,
  gessica,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Engineering Student",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "photoshop",
    icon: photoshop,
  },
  {
    name: "docker",
    icon: docker,
  },

];

const experiences = [
  {
    title: "Development of Systems",
    company_name: "ETEC Fernando Prestes",
    icon: etec,
    iconBg: "#E6DEDD",
    date: "Feb 2019 - Dec 2021",
    points: [
      "Having completed a technical course in systems development, I bring expertise in React.js and related technologies.",
      "Experienced in cross-functional collaboration, I contribute to creating high-quality web applications with responsive design and cross-browser compatibility.",
      "I actively participate in code reviews, providing constructive feedback to maintain code quality.",
      "Eager to apply my skills and contribute effectively to web development projects.",
    ],
  },
  {
    title: "Engineering of Control & Auto",
    company_name: "IFSP",
    icon: ifsp,
    iconBg: "#383E56",
    date: "Mar 2022 - Present",
    points: [
      "Graduating with a bachelor's degree in Control and Automation Engineering, I possess comprehensive skills in diverse technologies. ",
      "Experienced in collaborative projects, I contribute to creating sophisticated solutions for control systems.",
      "Proficient in implementing responsive design and ensuring cross-browser compatibility, I bring a strong foundation in engineering principles to web application development.",
      "Actively engaging in code reviews, I provide constructive feedback to maintain code quality.",
    ],
  },
  {
    title: "Renewable Energy Electrician",
    company_name: "IFSP",
    icon: ifsp,
    iconBg: "#E6DEDD",
    date: "Jul 2023 - Oct 2023",
    points: [
      "Having completed a course in Renewable Energy Electrician, I bring specialized skills to the field.",
      "Proficient in the installation and maintenance of renewable energy systems, I am well-versed in harnessing sustainable power sources.",
      "My expertise includes implementing responsive design and ensuring cross-browser compatibility in web applications.",
      "Actively engaging in code reviews, I provide constructive feedback to uphold code quality standards.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Website Personal Driver",
    description:
      "Easily navigate and book our top-notch private chauffeur services online. Enjoy the convenience of elegant design, user-friendly navigation, and a hassle-free booking system.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: gessica,
    source_code_link: "https://github.com/felipeferreirareis1/Site-Gessica-Online",
  },
  {
    name: "Work Portfolio",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };