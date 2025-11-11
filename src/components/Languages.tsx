import '../styles/Languages.scss';

/** renders language icons
 *
 * props: none
 *
 * state: none
 *
 * App => Skills => Languages
 */

function Languages() {
  return (
    <section className='Languages-container'>

      <ul className='Languages'>
        <li><i className="devicon-typescript-plain colored"></i></li>
       
        <li><i className="devicon-javascript-plain colored"></i></li>
        <li><i className="devicon-csharp-plain colored"></i></li>
        <li><i className="devicon-java-plain colored"></i></li>

        <li><i className="devicon-python-plain-wordmark colored"></i> </li>
        <li><i className="devicon-html5-plain-wordmark colored"></i></li>
        <li><i className="devicon-css3-plain-wordmark colored"></i></li>
        <li><i className="devicon-postgresql-plain-wordmark colored"></i></li>
      </ul>
    </section>
  );
}

export default Languages;
