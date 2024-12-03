import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: "Freelance",
    company: "Self-Employed",
    period: "Aug 2024 - Present",
    description: "Working as a freelance developer focusing on bug fixes, feature implementation, and template development. Collaborated with various clients to enhance existing applications and build new features. Specialized in React.js development and responsive web design."
  },
  {
    title: "Front-End Developer",
    company: "EquinoxAnalytics pvt ltd",
    period: "Feb 23 - Aug 2024",
    description: "Built comprehensive learning management system using React, Material UI, and Framer Motion. Developed real-time commenting system with Socket.io and implemented role-based authentication with JWT and Redux."
  },
  {
    title: "Intern trainee",
    company: "Code-well",
    period: "Dec 22 - feb 23",
    description: "Assisted in developing and enhancing user interfaces using React.js. Participated in code reviews and received constructive feedback from senior developers."
  },
  {
    title: "Desktop Support L1",
    company: "Orient Technology",
    period: "Nov 19 - Jan 22",
    description: "Provided technical support and maintenance for desktop systems and applications."
  },
    {
    title: "Desktop Support L1",
    company: "Orient Technology",
    period: "Nov 19 - Jan 22",
    description: "Provided technical support and maintenance for desktop systems and applications."
  }
];

export const Experience = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
        >
          Experience
        </motion.h2>
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-600"></div>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`flex items-center mb-12 ${
                index % 2 === 0 ? 'flex-row-reverse' : ''
              }`}
            >
              <div className="w-1/2 px-6">
                <div className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg ${
                  index % 2 === 0 ? 'ml-6' : 'mr-6'
                }`}>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{exp.title}</h3>
                  <p className="text-blue-600 dark:text-blue-400 mb-2">{exp.company}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{exp.period}</p>
                  <p className="text-gray-700 dark:text-gray-400">{exp.description}</p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};