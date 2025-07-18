import React from 'react';
import { FaBuilding, FaCalendarAlt, FaMapMarkerAlt, FaChevronRight } from 'react-icons/fa';

const Experience = () => {
  const experience = {
    company: "L&T Technology Services",
    position: "Software Engineer",
    duration: "Jan 2022 - Present",
    location: "India",
    type: "Full-time",
    description: [
      "Directed the transition of a Django-based platform to Jenkins, improving scalability by 35% and cutting operational costs.",
      "Automated compliance tasks using Java, resulting in significant improvements in reporting efficiency.",
      "Collaborated on full-stack development using Python/Django and React.js, enhancing system performance and integration.",
      "Integrated multiple systems with REST APIs for seamless data exchange, reducing synchronization time by 40%.",
      "Reduced query execution times by 25% and improved PostgreSQL scalability by 50%."
    ],
    skills: ["Java", "Python", "Django", "React.js", "PostgreSQL", "REST APIs", "Jenkins"]
  };

  return (
    <section id="experience" className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Work <span className="text-netflix-red">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-netflix-red mx-auto"></div>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-netflix-red"></div>

          {/* Experience Item */}
          <div className="relative flex items-start mb-8">
            {/* Timeline Dot */}
            <div className="absolute left-6 w-4 h-4 bg-netflix-red rounded-full border-4 border-dark-bg"></div>

            {/* Experience Card */}
            <div className="ml-16 card-gradient rounded-lg p-6 w-full border border-gray-700 hover:border-netflix-red transition-colors">
              {/* Company and Position */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{experience.position}</h3>
                  <div className="flex items-center text-netflix-red mb-2">
                    <FaBuilding className="mr-2" />
                    <span className="font-semibold">{experience.company}</span>
                  </div>
                </div>

                <div className="text-gray-300 text-sm">
                  <div className="flex items-center mb-1">
                    <FaCalendarAlt className="mr-2" />
                    <span>{experience.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="mr-2" />
                    <span>{experience.location} • {experience.type}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Key Responsibilities & Achievements:</h4>
                <ul className="space-y-2">
                  {experience.description.map((item, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                      <FaChevronRight className="text-netflix-red mr-3 mt-1 flex-shrink-0" size={12} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div>
                <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-netflix-red/20 text-netflix-red border border-netflix-red/30 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <div className="card-gradient rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4">Professional Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-netflix-red mb-2">35%</div>
                <p className="text-gray-300">Scalability Improvement</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-apple-blue mb-2">40%</div>
                <p className="text-gray-300">Reduced Synchronization Time</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-netflix-red mb-2">25%</div>
                <p className="text-gray-300">Faster Query Execution</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;