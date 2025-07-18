import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDownload } from 'react-icons/fa';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'KOTTAKOTA ARAVIND';
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullText]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // Create a temporary link to download the resume
    const link = document.createElement('a');
    link.href = '/Resume.pdf'; 
    link.download = 'Kottakota_Aravind_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          {/* Greeting */}
          <p className="text-lg md:text-xl text-gray-300 mb-4">
            Hello, I'm
          </p>

          {/* Name with typing animation */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            <span className="inline-block">
              {displayedText}
              <span className="animate-pulse text-netflix-red">|</span>
            </span>
          </h1>

          {/* Title */}
          <h2 className="text-xl md:text-2xl lg:text-3xl text-netflix-red font-semibold mb-6">
            Software Developer
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Passionate about optimizing backend performance and creating innovative digital solutions. 
            Specializing in Java, Python, Django with 2+ years of experience at L&T Technology Services.
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="mailto:aravindkottakota1@gmail.com" className="flex items-center text-gray-300 hover:text-netflix-red transition-colors">
              <FaEnvelope className="mr-2" />
              aravindkottakota1@gmail.com
            </a>
            <a href="tel:+91-8179245718" className="flex items-center text-gray-300 hover:text-netflix-red transition-colors">
              <FaPhone className="mr-2" />
              +91-8179245718
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://github.com/aravind667" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-netflix-red transition-colors hover:scale-110 transform"
            >
              <FaGithub size={28} />
            </a>
            <a 
              href="https://linkedin.com/in/aravindkottakota" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-apple-blue transition-colors hover:scale-110 transform"
            >
              <FaLinkedin size={28} />
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary px-8 py-3 rounded-lg text-white font-semibold text-lg"
            >
              Get In Touch
            </button>
            <button
              onClick={downloadResume}
              className="btn-secondary px-8 py-3 rounded-lg text-white font-semibold text-lg flex items-center justify-center"
            >
              <FaDownload className="mr-2" />
              Download Resume
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="border border-gray-300 hover:border-netflix-red px-8 py-3 rounded-lg text-gray-300 hover:text-netflix-red font-semibold text-lg transition-colors"
            >
              View Projects
            </button>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-netflix-red rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;