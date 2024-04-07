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
    name: 'Social login',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['React', 'Firebase'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Image Slider',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['React', 'Redux'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Application setup',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['React', 'Redux js-toolkit', 'Redux-saga'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Weather App',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['React', 'MUI'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Product API',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['Node js', 'Express js', 'MongoDb'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Wedding website',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['Node js', 'Express js', 'MongoDb'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
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
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'kmanikandan.dev@gmail.com',
}

export { header, about, projects, skills, contact }
