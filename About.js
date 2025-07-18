import React from 'react';
import { FaUser, FaCode, FaRocket, FaAward } from 'react-icons/fa';

const About = () => {
  const highlights = [
    {
      icon: <FaCode className="text-netflix-red" size={24} />,
      title: "2+ Years Experience",
      description: "Specialized in Java, Python, Django development"
    },
    {
      icon: <FaRocket className="text-apple-blue" size={24} />,
      title: "Performance Optimization",
      description: "Achieved 25% increase in system efficiency"
    },
    {
      icon: <FaAward className="text-netflix-red" size={24} />,
      title: "SPOT Award Winner",
      description: "Recognized for automation scripts reducing delivery time by 40%"
    }
  ];

  const achievements = [
    "Developed over 20+ automation scripts, reducing software delivery time by 40%",
    "Ensured full regulatory compliance by designing and implementing 10+ modules",
    "Improved PostgreSQL scalability by 50% and reduced query execution times by 25%",
    "Mentored junior developers and led cross-functional teams"
  ];

  return (
    <section id="about" className="py-20 bg-dark-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About <span className="text-netflix-red">Me</span>
          </h2>
          <div className="w-24 h-1 bg-netflix-red mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Profile Image and Basic Info */}
          <div className="text-center lg:text-left">
            <div className="w-48 h-48 mx-auto lg:mx-0 mb-8 rounded-full bg-gradient-to-br from-netflix-red to-apple-blue p-1">
              <div className="w-full h-full rounded-full bg-dark-bg flex items-center justify-center">
                <FaUser size={80} className="text-gray-300" />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">Kottakota Aravind</h3>
            <p className="text-netflix-red text-lg mb-4">Software Developer</p>

            <div className="space-y-2 text-gray-300">
              <p><strong>Location:</strong> India</p>
              <p><strong>Experience:</strong> 2+ Years</p>
              <p><strong>Specialization:</strong> Full-Stack Development</p>
              <p><strong>Education:</strong> B.Tech Computer Science</p>
            </div>
          </div>

          {/* Right Column - About Content */}
          <div>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Software Developer with 2+ years of experience at L&T Technology Services, 
              specializing in Java, Python, Django for web application development. 
              Expertise in optimizing backend performance, automating workflows with AI/ML, 
              and integrating REST APIs.
            </p>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Proficient in full-stack development, achieving a 25% increase in system efficiency 
              and mentoring junior developers. Passionate about creating innovative digital solutions 
              and continuously learning new technologies.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="text-center p-4 rounded-lg card-gradient">
                  <div className="mb-3 flex justify-center">{highlight.icon}</div>
                  <h4 className="text-white font-semibold mb-2">{highlight.title}</h4>
                  <p className="text-sm text-gray-400">{highlight.description}</p>
                </div>
              ))}
            </div>

            {/* Key Achievements */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Key Achievements</h4>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-netflix-red mr-3 mt-1">▶</span>
                    <span className="text-gray-300">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;