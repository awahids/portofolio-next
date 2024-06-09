// Timeline.js
import React from 'react';
import experienceData from './assets/data/experience.json';
import { calculateExperience } from '../../utils/utils';
import Fade from 'react-reveal/Fade'; // Import Fade from react-reveal
import { FaBriefcase } from 'react-icons/fa'; // Import FaBriefcase icon

const Experience = () => {
  experienceData[0].endDate = new Date().toISOString().slice(0, 10);

  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Work Experience</h2>
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 h-full"></div>
          {experienceData.map((item, index) => (
            <Fade key={index} bottom cascade>
              <div
                className={`mb-8 flex flex-col md:flex-row justify-between items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
              >
                <div className="hidden md:block order-1 w-5/12"></div>
                <div className="order-1 w-full md:w-5/12 px-4 py-4 bg-white rounded-lg shadow-lg">
                  <div className="flex items-center mb-2">
                    <FaBriefcase className="text-xl md:text-3xl text-gray-600 mr-2 md:mr-4" />
                    <h3 className="text-lg md:text-2xl font-bold">{item.company}</h3>
                  </div>
                  <p className="text-md md:text-lg text-gray-700">{item.role} - {calculateExperience(item.startDate, item.endDate)}</p>
                  <p className="text-sm md:text-md text-gray-500">
                    {item.startDateString} - {item.endDateString}
                  </p>
                  <p className="text-base md:text-lg text-gray-800">{item.description}</p>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
