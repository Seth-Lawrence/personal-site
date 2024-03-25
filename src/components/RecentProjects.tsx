import ProjectCard from "./ProjectCard";

function RecentProjects() {

  return (
    <div>
      <h3>Recent Projects</h3>
      <ProjectCard
        imagePath="jobly.png"
        projDesc="job application using react and express"
        imageDesc="jobly homepage"
        git="https://github.com/Seth-Lawrence/react-jobly"
        demo='https://react-jobly-kk81.onrender.com/'
      />
      {/* <ProjectCard /> */}
    </div>
  );
}

export default RecentProjects;
