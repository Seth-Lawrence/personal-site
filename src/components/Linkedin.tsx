
import '../styles/Linkedin.scss';

/**
 * renders Linkedin icon
 *
 * props: none
 *
 * state: none
 *
 * App => Navigation => Linkedin
 */

const Linkedin = () => {

  return (
    <span>
    <a className='Linkedin' onClick={() => window.open('http://www.linkedin.com/in/lawrencehobson')}>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" />
    </a>
    </span>
  );
}

export default Linkedin;
