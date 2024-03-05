import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import LogoDevIcon from '@mui/icons-material/LogoDev';
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, social } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}</span>
        </h1>
      )}
      

      {role && <h2 className='about__role'>{`<> A ${role} </>`}</h2>}
      <p className='about__desc'>{description && description}</p>

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