import React from 'react';
import Image from 'next/image';

const Profile = () => {
  return (
    <section id="profile" className="bg-gray-100 py-8 md:py-16">
      <div className="container mx-auto">
        <h2 id="profile-header" className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My Profile
        </h2>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="flex items-start justify-center">
            {/* Left Column: Photo */}
            <div className="flex-shrink-0 w-64 md:w-80 mr-8">
              <div className="rounded-lg overflow-hidden shadow-lg mb-4">
                <Image
                  src="https://awahids.my.id/assets/img/aw2.jpg"
                  alt="Your Photo"
                  width={320}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right Column: Stats */}
            <div className="flex-1 text-lg text-gray-800">
              {/* Description */}
              <div className="mt-4 px-6 md:px-0 text-right">
                <p>
                  As a backend developer at a Sharia-compliant FINTECH company, I enjoy pursuing my hobbies of photography
                  and gaming outside of work hours. While my primary focus is on developing reliable and secure backend
                  systems, I find that engaging in creative and leisurely activities helps me maintain a healthy work-life
                  balance.
                </p>
              </div>
              {/* Stats Section */}
              <div className="bg-gray-200 rounded-lg p-4 shadow-md flex justify-between mb-4">
                <div className="text-center">
                  <p className="text-lg font-medium">Total Companies</p>
                  <p className="text-2xl font-bold">3</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-medium">Total Projects</p>
                  <p className="text-2xl font-bold">16</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-medium">Years of Experience</p>
                  <p className="text-2xl font-bold">5</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          <div className="flex flex-col items-center">
            {/* Photo */}
            <div className="w-64 md:w-80 rounded-lg overflow-hidden shadow-lg mb-4">
              <Image
                src="https://awahids.my.id/assets/img/aw2.jpg"
                alt="Your Photo"
                width={256}
                height={320}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Stats */}
            <div className="bg-gray-200 rounded-lg p-4 shadow-md mb-4 w-full max-w-md flex justify-between">
              <div className="text-center">
                <p className="text-lg font-medium">Total Companies</p>
                <p className="text-2xl font-bold">3</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-medium">Total Projects</p>
                <p className="text-2xl font-bold">16</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-medium">Years of Experience</p>
                <p className="text-2xl font-bold">5</p>
              </div>
            </div>

            {/* Description */}
            <div className="text-lg text-gray-800 px-6 md:px-0 text-left">
              <p>
                As a backend developer at a Sharia-compliant FINTECH company, I enjoy pursuing my hobbies of photography and
                gaming outside of work hours. While my primary focus is on developing reliable and secure backend systems, I
                find that engaging in creative and leisurely activities helps me maintain a healthy work-life balance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
