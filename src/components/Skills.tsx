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
      <section className='Skills'>
        <div>
          <Languages />
        </div>
        <div>
          <Technology />
        </div>
      </section>
  )
}

export default Skills;