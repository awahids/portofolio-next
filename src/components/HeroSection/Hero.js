import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';
import styles from './assets/styles/Hero.module.css';  // Import the CSS module

const Hero = () => {
  return (
    <section className="relative bg-gray-100 py-8 md:py-16 overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
        {/* Content for desktop */}
        <div className="hidden md:block text-center md:text-left md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm Wahid
          </h1>
          <h3 className={`text-xl md:text-2xl text-gray-700 mb-4 ${styles.typingAnimation}`}>
            Backend Developer
          </h3>
          <p className="text-lg md:text-xl text-gray-800 mb-8">
            I have just over a year of experience as a backend developer and specialize in using
            Node.js, Typescript, and Javascript. Please don't hesitate to contact me for further
            information.
          </p>

          {/* GitHub and LinkedIn icons for desktop */}
          <div className="flex space-x-4">
            <a
              href="https://github.com/your-github"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-500 transition-all duration-300"
            >
              <FaGithub className="text-3xl md:text-4xl" />
            </a>

            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-400 transition-all duration-300"
            >
              <FaLinkedin className="text-3xl md:text-4xl" />
            </a>
          </div>
        </div>

        {/* Image and content for mobile */}
        <div className="md:hidden flex flex-col items-center mb-8">
          {/* Photo */}
          <div className="rounded-full border-4 border-white shadow-lg overflow-hidden" style={{ width: '200px', height: '200px' }}>
            <Image
              src="https://awahids.my.id/assets/img/aw.png"
              alt="Wahid's Photo"
              width={200}
              height={200}
              className="w-full"
              // loading="lazy"
              priority
            />
          </div>

          {/* GitHub and LinkedIn icons for mobile */}
          <div className="flex space-x-4 mt-4">
            <a
              href="https://github.com/your-github"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-500 transition-all duration-300"
            >
              <FaGithub className="text-3xl md:text-4xl" />
            </a>

            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-400 transition-all duration-300"
            >
              <FaLinkedin className="text-3xl md:text-4xl" />
            </a>
          </div>

          {/* Summary */}
          <div className="text-center md:text-left md:px-8 mt-4 mx-2.5" style={{ margin: '0 10px' }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I'm Wahid
            </h1>
            <h3 className={`text-xl md:text-2xl text-gray-700 mb-4 ${styles.typingAnimation}`}>
              Backend Developer
            </h3>
            <p className="text-lg md:text-xl text-gray-800 mb-8">
              I have just over a year of experience as a backend developer and specialize in using
              Node.js, Typescript, and Javascript. Please don't hesitate to contact me for further
              information.
            </p>
          </div>
        </div>

        {/* Image for desktop */}
        <div className="hidden md:flex justify-end">
          <div className="rounded-full border-4 border-white shadow-lg overflow-hidden" style={{ width: '256px', height: '256px' }}>
            <Image
              src="https://awahids.my.id/assets/img/aw.png"
              alt="Wahid's Photo"
              width={256}
              height={256}
              className="w-full"
              // loading="lazy"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
