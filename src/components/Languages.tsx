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
    <section>
      <h2 className='Languages-title'>
        Languages:
      </h2>
      <div className='Languages'>
      <i className="devicon-typescript-plain colored"></i>
      <i className="devicon-javascript-plain colored"></i>
      <i className="devicon-python-plain-wordmark colored"></i>
      </div>
      <div className='Languages'>
      <i className="devicon-html5-plain-wordmark colored"></i>
      <i className="devicon-css3-plain-wordmark colored"></i>
      <i className="devicon-postgresql-plain-wordmark colored"></i>
      </div>
    </section>
  );
}

export default Languages;
