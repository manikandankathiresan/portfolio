/* eslint-disable react/no-unescaped-entities */
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import LogoDevIcon from '@mui/icons-material/LogoDev'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, social } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}</span>{' '}
          {/* <img
            src='https://em-content.zobj.net/source/telegram/386/man-technologist_1f468-200d-1f4bb.webp'
            alt=''
            height='90px'
          /> */}
        </h1>
      )}
      {role && <h2 className='about__role'>{`<> A ${role} </>`}</h2>}
      🚀 Passionate React.js/Node.js Full Stack Developer 🚀
      <p className='about__desc'>
        <div>
          {' '}
          🎯 As a dedicated Full Stack JavaScript Developer, I specialize in
          crafting innovative solutions with React.js and Node.js.{' '}
        </div>{' '}
        <br />
        <div>
          {' '}
          🎯With a keen eye for detail and a knack for problem-solving, I craft
          robust and scalable web applications that deliver exceptional user
          experiences.{' '}
        </div>
        <br />
        <div>
          {' '}
          🎯 With a passion for innovation, I deliver robust solutions that meet
          the demands of modern web development while ensuring an exceptional
          user experience.{' '}
        </div>
        <br />
      </p>
      <div className='about__contact center'>
        {/* {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )} */}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
                target='_blank'
                rel='noopener noreferrer'
              >
                <GitHubIcon fontSize='large' />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
                target='_blank'
                rel='noopener noreferrer'
              >
                <LinkedInIcon fontSize='large' />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.dev}
                aria-label='linkedin'
                className='link link--icon'
                target='_blank'
                rel='noopener noreferrer'
              >
                {/* <img src="https://cdn1.iconfinder.com/data/icons/logos-and-brands-3/512/84_Dev_logo_logos-512.png" alt='logo' height='50px'/> */}
                <LogoDevIcon fontSize='large' />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
