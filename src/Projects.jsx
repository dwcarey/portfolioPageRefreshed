import './App.css';
import projectCardData from './projectCardData.js';
import githubIcon from './assets/github-original.svg';
import openInNewIcon from './assets/open-in-new.svg';


function Projects() {
  const handleClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className='section'>
        <h2>Projects</h2>
        <ul>
            {projectCardData.map((project, index) => (
                <li key={index} className='projectListItem'>
                    <h3 className='projectNameText'>{project.projectName}</h3>
                    <img src={project.imageURL} alt={project.projectName} className='projectImage'/>
                    <img src={githubIcon} className='socialIcon github' onClick={() => handleClick(project.codeURL)}/>
                    <img src={openInNewIcon} className='socialIcon openNew' onClick={() => handleClick(project.projectURL)}/>
                </li>
            ))}
        </ul>
    </div>
);
}
export default Projects;


