import React, { useState, useRef, useEffect } from 'react';
import skillsData from './assets/data/skill.json';
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaJs, FaDatabase, FaBootstrap, FaLaravel, FaGolang } from 'react-icons/fa6';
import { SiPostgresql, SiMysql } from "react-icons/si";
import './assets/styles/Skill.module.css';

const SkillSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleSkills, setVisibleSkills] = useState(4); // Menampilkan maksimal 4 skill awal
  const skillSectionRef = useRef(null);

  useEffect(() => {
    const skillSectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    });

    skillSectionObserver.observe(skillSectionRef.current);

    // Clean up the observer
    return () => skillSectionObserver.disconnect();
  }, []);

  const skillIcons = {
    'FaReact': FaReact,
    'FaNodeJs': FaNodeJs,
    'FaHtml5': FaHtml5,
    'FaCss3': FaCss3,
    'FaJs': FaJs,
    'FaDatabase': FaDatabase,
    'FaBootstrap': FaBootstrap,
    'FaLaravel': FaLaravel,
    'FaGolang': FaGolang,
    'SiPostgresql': SiPostgresql,
    'SiMysql': SiMysql
  };

  const getSkillIcon = (iconName, colorClass) => {
    const IconComponent = skillIcons[iconName];
    if (IconComponent) {
      return <IconComponent className={`text-5xl ${colorClass}`} />;
    } else {
      return null;
    }
  };

  const handleLoadMore = () => {
    setVisibleSkills(prev => prev + 4); // Menambah 4 skill setiap kali tombol Load More ditekan
  };

  return (
    <section ref={skillSectionRef} className={`py-8 md:py-16 bg-gray-100 ${isVisible ? 'fade-in' : 'fade-out'}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skillsData.slice(0, visibleSkills).map((skill, index) => (
            <SkillItem key={index} name={skill.name} icon={getSkillIcon(skill.icon, skill.color)} />
          ))}
        </div>
        {visibleSkills < skillsData.length && (
          <div className="flex justify-center mt-4">
            <button onClick={handleLoadMore} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none">
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

const SkillItem = ({ name, icon }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg group hover:bg-gray-200 transition duration-300 ease-in-out">
      <div className="mb-2">{icon}</div>
      <div className="text-center">
        <h3 className="text-xl font-bold">{name}</h3>
      </div>
    </div>
  );
};

export default SkillSection;
