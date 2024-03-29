// import {
//   SiRender,
//   SiJsonwebtokens,
//   SiJinja,
// } from "react-icons/si";

import '../styles/Technology.scss';

/** renders technology icons
 *
 * props: none
 *
 * state: none
 *
 * App => Skills => Technology
 */

function Technology() {

  return (
    <section className='Technology-container'>
      <span className='Technology-title'>
        Technology:
      </span>
      <div className='Technology'>
        <i className="devicon-jquery-plain-wordmark colored"></i>
        <i className="devicon-react-original-wordmark colored"></i>
        <i className="devicon-bootstrap-plain-wordmark colored"> </i>
      </div>
      <div className='Technology'>
        <i className="devicon-jasmine-original-wordmark colored"></i>
        <i className="devicon-jest-plain colored"></i>
        <i className="devicon-jira-plain-wordmark colored"></i>
      </div>
      <div className='Technology'>
        <i className="devicon-vite-original-wordmark colored"></i>
        <i className="devicon-git-plain-wordmark colored"></i>
        <i className="devicon-amazonwebservices-plain-wordmark colored"></i>
      </div>
      <div className='Technology'>
        <i className="devicon-github-original-wordmark"></i>
        <i className="devicon-flask-original-wordmark colored"></i>
        <i className="devicon-json-plain colored"></i>
      </div>
      <div className='Technology'>
        <i className="devicon-insomnia-plain-wordmark colored"></i>
        <i className="devicon-vscode-plain-wordmark colored"></i>
        <i className="devicon-vitest-plain colored"></i>
      </div>
      <div className='Technology'>
        <i className="devicon-babel-plain colored"></i>
        {/* <i className="devicon-webpack-plain-wordmark colored"></i> */}
        <i className="devicon-nodejs-plain-wordmark colored"></i>
        <i className="devicon-express-original"></i>
      </div>
      {/* <SiRender />
        <SiJsonwebtokens />
        <SiJinja /> */}

    </section>
  );
}

export default Technology;