import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
{/* 
      <iframe
        title='map'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d981.7126341884989!2d77.97079426957004!3d10.358757199360374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00aaf786c337cd%3A0xbe9f361a66de2399!2s14%2C%20Agnes%20Mary%20St%2C%20Begambur%2C%20Tamil%20Nadu%20624001!5e0!3m2!1sen!2sin!4v1708567071355!5m2!1sen!2sin'
        width='600'
        height='450'
        frameBorder='0'
        // style='border:0;'
        allowFullScreen=''
        aria-hidden='false'
        // tabIndex='0'
      /> */}
      <a href={`mailto:${contact.email}`}>
        <span type='button' className='btn btn--outline'>
          Email me
        </span>
      </a>
    </section>
  )
}

export default Contact
