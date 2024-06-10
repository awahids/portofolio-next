import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import projectsData from './assets/data/projects.json';
import styles from './assets/styles/Project.module.css';

SwiperCore.use([Pagination, Navigation]);

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const projectSectionRef = useRef(null);

  useEffect(() => {
    const projectSectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    });

    projectSectionObserver.observe(projectSectionRef.current);

    return () => projectSectionObserver.disconnect();
  }, []);

  return (
    <section ref={projectSectionRef} className={`py-8 md:py-16 bg-gray-100 ${isVisible ? 'fade-in' : 'fade-out'}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">My Projects</h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
        >
          {projectsData.map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div className={`${styles.projectCard} group`}>
      <img src={project.image} alt={project.name} className={styles.projectImage} />
      <div className={styles.projectInfo}>
        <h3 className="text-xl font-bold">{project.name}</h3>
        <div className={styles.techTags}>
          {project.technologies.map((tech, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">{tech}</span>
          ))}
        </div>
      </div>
      <div className={styles.overlay}>
        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Demo</a>
      </div>
    </div>
  );
};

export default ProjectsSection;
