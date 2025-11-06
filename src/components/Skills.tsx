import Technology from "./Technology";
import Languages from "./Languages";

import '../styles/Skills.scss';
/**
 *   renders skills page
 *
 * props: none
 *
 * state: none
 *
 * App => Skills => { Languages, Technologies }
 */
const Skills = () => {

  return (
    <>
      
      <section className='Skills'>
        <span>
          <Languages />
        </span>
        <span>
          <Technology />
        </span>
      </section>
    </>
  )
}

export default Skills;