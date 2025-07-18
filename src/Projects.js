import React from 'react';
import { FaExternalLinkAlt, FaGithub, FaCalendarAlt, FaBuilding } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      name: "Jenkins Migration & Full-Stack Development",
      company: "L&T Technology Services (Sony)",
      duration: "Jan 2022 – Present",
      description: [
        "Led the migration of a Django platform to Jenkins, resulting in a 35% improvement in scalability and reduced cloud infrastructure costs.",
        "Automated regulatory compliance with Java modules, streamlining workflows across 30+ systems.",
        "Contributed to both frontend (React.js, JavaScript) and backend (Python/Django) development to enhance integration and user experience.",
        "Integrated REST APIs with LDAP, JIRA, and Gerrit to optimize data exchange and improve system communication.",
        "Optimized PostgreSQL database queries, reducing query time by 25% and improving scalability by 50%."
      ],
      techStack: ["Java", "Python", "Django", "JavaScript", "React.js", "PostgreSQL", "Jenkins", "REST APIs"],
      type: "Enterprise Project",
      impact: "35% scalability improvement, 25% faster queries"
    },
    {
      name: "AI-Driven Predictive Analytics",
      company: "Highradius (Internship)",
      duration: "Aug 2021 – Jan 2022",
      description: [
        "Developed interactive dashboards using Highcharts and JavaScript for data analysis of large datasets.",
        "Implemented AI-driven models for predictive analytics, improving decision-making by 30%.",
        "Enhanced product recommendation systems using machine learning, boosting engagement by 18%."
      ],
      techStack: ["Python", "Highcharts", "JavaScript", "AI/ML", "Data Analytics"],
      type: "Data Analytics Project",
      impact: "30% improved decision-making, 18% increased engagement"
    },
    {
      name: "Interactive Tourism Guide Web Application",
      company: "Self-Developed",
      duration: "Feb 2019 – May 2019",
      description: [
        "Designed and deployed a responsive tourism guide application using HTML5 and Bootstrap, ensuring cross-device compatibility.",
        "Implemented interactive features with JavaScript and jQuery, improving user engagement and navigation.",
        "Utilized CSS3 to enhance the visual design and optimize the layout for various screen sizes.",
        "Deployed using Netlify with version control via Git, ensuring seamless updates."
      ],
      techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery", "Netlify", "Git"],
      type: "Web Application",
      impact: "Cross-device compatibility, Enhanced user engagement"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-dark-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured <span className="text-netflix-red">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-netflix-red mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A showcase of my technical projects and contributions across different domains
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card rounded-lg overflow-hidden">
              {/* Project Header */}
              <div className="p-6 border-b border-gray-700">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-netflix-red/20 text-netflix-red text-sm rounded-full">
                    {project.type}
                  </span>
                  <div className="flex items-center text-gray-400 text-sm">
                    <FaCalendarAlt className="mr-1" />
                    {project.duration}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>

                <div className="flex items-center text-gray-300 mb-3">
                  <FaBuilding className="mr-2" />
                  <span className="text-sm">{project.company}</span>
                </div>

                <div className="bg-apple-blue/20 text-apple-blue px-3 py-1 rounded text-sm">
                  {project.impact}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    {project.description.slice(0, 3).map((desc, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-netflix-red mr-2 mt-1">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-4">
                  <button className="flex items-center px-4 py-2 bg-netflix-red hover:bg-netflix-red/80 text-white rounded transition-colors text-sm">
                    <FaExternalLinkAlt className="mr-2" size={12} />
                    View Details
                  </button>
                  {project.company === "Self-Developed" && (
                    <button className="flex items-center px-4 py-2 border border-gray-600 hover:border-netflix-red text-gray-300 hover:text-netflix-red rounded transition-colors text-sm">
                      <FaGithub className="mr-2" size={12} />
                      GitHub
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center card-gradient p-6 rounded-lg">
            <div className="text-3xl font-bold text-netflix-red mb-2">3</div>
            <p className="text-gray-300">Major Projects</p>
          </div>
          <div className="text-center card-gradient p-6 rounded-lg">
            <div className="text-3xl font-bold text-apple-blue mb-2">35%</div>
            <p className="text-gray-300">Performance Improvement</p>
          </div>
          <div className="text-center card-gradient p-6 rounded-lg">
            <div className="text-3xl font-bold text-netflix-red mb-2">30+</div>
            <p className="text-gray-300">Systems Integrated</p>
          </div>
          <div className="text-center card-gradient p-6 rounded-lg">
            <div className="text-3xl font-bold text-apple-blue mb-2">100%</div>
            <p className="text-gray-300">Compliance Achieved</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;