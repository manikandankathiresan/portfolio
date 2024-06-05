import Html from './components/Skills/img/html.png'
import Css from './components/Skills/img/css.png'
import Bootstrap from './components/Skills/img/bootstrap-framework-logo.png'
import Javascript from './components/Skills/img/javascript.png'
import TypeScript from './components/Skills/img/typescript.png'
import React from './components/Skills/img/react.png'
import Node from './components/Skills/img/nodejs.png'
import MySql from './components/Skills/img/mysql.png'
import Git from './components/Skills/img/git.png'
import Github from './components/Skills/img/github.png'
import Mongodb from './components/Skills/img/mongo-db.png'

const header = {
  // all the properties are optional - can be left empty or deleted
  // homepage: 'https://rajshekhar26.github.io/cleanfolio',
  title: '.js',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Manikandan K',
  role: 'Full Stack Web Developer',
  description:
    'I am a JavaScript Full Stack Developer skilled in React, Node.js, and database management. Proficient in Git, I excel in crafting dynamic web applications with a focus on user-centric design, scalability, and collaboration. With a passion for innovation, I deliver robust solutions that meet the demands of modern web development while ensuring an exceptional user experience.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/manikandan-k-9095/',
    github: 'https://github.com/manikandankathiresan',
    dev: 'https://dev.to/nameismani',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Notes',
    description:
      'MERN Stack Notes Application – your go-to tool for easy and efficient note management. Built with the powerful MERN stack, this app offers a seamless and user-friendly experience for all your note-taking needs.',
    stack: ['React', 'Redux', 'Node.js', 'Fastify.js', 'Mongodb'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Social login',
    description:
      'Secure authentication with our Social Login React App. Integrated with Firebase, it supports Google, Meta, Twitter, and GitHub logins. Simplify user access and enhance security through OAuth integration, ensuring quick and convenient sign-ins for all users.     ',
    stack: ['React', 'Redux', 'firebase'],
    sourceCode: 'https://github.com/manikandankathiresan/react-social-login',
    livePreview: 'https://github.com',
  },
  {
    name: 'e-mart',
    description: `    
    I crafted a React.js e-commerce app with Stripe integration for secure transactions. Users effortlessly browse products, add to cart, and checkout. The Stripe API ensures a seamless payment process, emphasizing reliability and security for a smooth shopping experience.`,
    stack: ['React', 'Redux js-toolkit', 'Redux-thunk'],
    sourceCode: 'https://github.com/manikandankathiresan/stripe-payment-gatway',
    livePreview: 'https://emart-shopy.netlify.app/',
  },
  {
    name: 'Weather App',
    description:
      'Welcome to my Weather Application, a responsive web app providing real-time weather info using React JS and OpenWeather API. Access global weather data with intuitive search and dynamic visuals for a seamless and user-friendly experience.',
    stack: ['React', 'MUI'],
    sourceCode: 'https://github.com/manikandankathiresan/weather',
    livePreview: 'https://checkweather-v2.netlify.app/',
  },
  {
    name: 'Product API',
    description:
      'I’ve created a RESTful API using Node.js. It supports CRUD operations, ensuring efficient data management and seamless integration. This scalable, robust API is designed for high performance and reliable handling of diverse requests.',
    stack: ['Node js', 'Express js', 'MongoDb'],
    sourceCode: 'https://github.com/manikandankathiresan/product-api',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Wedding website',
    description:
      'I created a wedding website for my friend, featuring event details, date and time with a countdown timer, RSVP functionality, a photo gallery, and a route map to the marriage venue for guests.',
    stack: ['React', 'Bootstrap', 'SCSS'],
    sourceCode: 'https://github.com/manikandankathiresan/siva-santhiya',
    livePreview: 'https://manikandankathiresan.github.io/siva-santhiya/',
  },
]

// const skills = [
//   // skills can be added or removed
//   // if there are no skills, Skills section won't show up
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'TypeScript',
//   'React',
//   'Redux',
//   'SASS',
//   'Material UI',
//   'Git',
//   'CI/CD',
//   'Jest',
//   'Enzyme',
//   'Redux',
//   'SASS',
//   'Material UI',
//   'Git',
//   'CI/CD',
//   'Jest',
//   'Enzyme',
// ]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  { name: 'HTML', img: Html },
  { name: 'CSS', img: Css },
  { name: 'Bootstrap', img: Bootstrap },
  { name: 'Javascript', img: Javascript },
  { name: 'Typescript', img: TypeScript },
  { name: 'React', img: React },
  {
    name: 'Redux',
    img: 'https://iconape.com/wp-content/files/te/353276/svg/redux-seeklogo.com.svg',
  },
  {
    name: 'Saga',
    img: 'https://cdn.worldvectorlogo.com/logos/redux-saga.svg',
  },
  {
    name: 'MUI',
    img: 'https://cdn.worldvectorlogo.com/logos/material-ui-1.svg',
  },
  { name: 'Node', img: Node },
  {
    name: 'Fastify',
    img: 'https://asset.brandfetch.io/idkHQKUAvE/idyjPqBNgh.jpeg',
  },
  {
    name: 'Express',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Status_iucn_EX_icon.svg/480px-Status_iucn_EX_icon.svg.png',
  },
  {
    name: 'PostgresSQL',
    img: 'https://cdn.worldvectorlogo.com/logos/postgresql.svg',
  },
  { name: 'MySql', img: MySql },
  { name: 'Mongodb', img: Mongodb },
  { name: 'Git', img: Git },
  { name: 'Github', img: Github },
  { name: 'Jira', img: 'https://cdn.worldvectorlogo.com/logos/jira-1.svg' },
  { name: 'Prisma', img: 'https://cdn.worldvectorlogo.com/logos/prisma-2.svg' },
  { name: 'Vite', img: 'https://cdn.worldvectorlogo.com/logos/vitejs.svg' },


]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'kmanikandan.dev@gmail.com',
}

export { header, about, projects, skills, contact }
