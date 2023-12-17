import './App.css';
import projectCardData from './projectCardData.js';


function Projects() {
  const handleClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div>
        <h1>Projects</h1>
        <ul>
            {projectCardData.map((project, index) => (
                <li key={index} onClick={() => handleClick(project.projectURL)}>
                    <h3>{project.projectName}</h3>
                    <img src={project.imageURL} alt={project.projectName} />

                    {/*consider adding a link to github and project using
                    two different icons and click handlers  */}
                </li>
            ))}
        </ul>
    </div>
);
}
export default Projects;


