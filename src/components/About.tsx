import Signature from "./Signature";
import '../styles/About.scss';

/**
 * renders about section
 *
 * props: none
 *
 * state: none
 *
 * LeftNav => About
 *
 */

const About = () => {

  return (
    <section>
      <h1 className='About-header'>About Me</h1>
      <div className='About'>
          Hi, I’m Seth! I'm a software engineer with a background in
          product. I got my start in localization and product analytics.
          In my previous roles, it's always been important to me to continually learn and grow my skills
          as well as my impact, and eventually I was writing functions
          to gather information from hundreds of thousands of lines
          of raw data and building reports from them, and determining
          strategic direction for seven-figure projects. I really
          enjoyed the increasingly technical part of my job. In one
          case I was writing algorithms to determine and find the
          user generated content with the  highest ROI for
          translation, which was later used in algorithms to determine
          which content to auto-translate.
          <br></br>
          <br></br>
          I also enjoy working and collaborating on a team on complex
          questions where the answer might be more complex than just
          'hey this is the right direction'. In localization there's
          also a lot of technical and design considerations, and
          that's what got me started dabbling in some different
          coding languages. I found that I really enjoyed seeing
          what I'm building come together so much that I decided
          to get more formal training to become a software engineer,
          which was a process I really enjoyed.
          <br></br>
          <br></br>
          At this point I want to leverage my current skills and continue
          building and working on interesting products, while also being
          in an environment where I can constantly learn and grow and
          increase my impact. I've found that I’m really passionate
          software engineering and I look forward to using my passion
          to to make a significant and positive impact.
        </div>
        <div>
          <Signature />
        </div>
    </section>
  );
}

export default About;
