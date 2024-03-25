import ProjectCard from "./ProjectCard";
import '../styles/RecentProjects.scss';

function RecentProjects() {

  return (
    <div>
      <h3>Recent Projects</h3>
      <div className='RecentProjects-Container'>
      <div>
      <ProjectCard
        title='Jobly: Jobs App'
        imagePath="jobly.png"
        projDesc="job application using react and express"
        imageDesc="jobly homepage"
        git="https://github.com/Seth-Lawrence/react-jobly"
        demo='https://react-jobly-kk81.onrender.com/'
      />
      </div>
      <ProjectCard
        title='Warbler: Social App'
        imagePath='warbler.png'
        projDesc="Twitter clone using Python+Flask & Jinja"
        imageDesc="warbler homepage"
        git="https://github.com/Seth-Lawrence/warbler"
        demo='https://seth-lawrence-warbler.onrender.com/'
      />
      </div>
    </div>
  );
}

export default RecentProjects;
