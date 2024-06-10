import React from 'react';
import Image from 'next/image';
import projectsData from '../../components/ProjectsSection/assets/data/projects.json';

export async function getStaticPaths() {
  const paths = projectsData.map(project => ({
    params: { id: project.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const project = projectsData.find(project => project.id.toString() === params.id);
  return { props: { project } };
}

const ProjectPage = ({ project }) => {
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <h1>{project.name}</h1>
      <Image src={project.image} alt={project.name} width={500} height={300} priority />
      <p>{project.description}</p>
      <h3>Technologies</h3>
      <ul>
        {project.technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Demo</a>
    </div>
  );
};

export default ProjectPage;
