import React from 'react';
import ProjectCard from './ProjectCard';
import './projects.scss';
import customers from '../../assets/customers logos.svg';

const Projects = () => {
  return (
    <div className="projects">
      <div className="heading">
        <h1>
          <span>a</span>s<span>k</span> Top projects in the last 5 years
        </h1>
      </div>
      <ProjectCard />
      <div className="customers">
        <h2>
          <span>our</span> satisfied customers
        </h2>
        <img src={customers} alt="clients logos" />
      </div>
    </div>
  );
};

export default Projects;
