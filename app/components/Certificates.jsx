import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "Full-Stack Web Development",
      issuer: "CSE PATHSHALA",
      date: "July 2024",
      link: "https://drive.google.com/file/d/1MVQd-oFnmuuyLuuKNIO7K_5YeCvV2zIo/view?usp=sharing", // Add your verification link
    },
    {
      id: 2,
      title: "Prompt Engineering for ChatGPT",
      issuer: "Coursera",
      date: "January 2024",
      link: "https://www.coursera.org/account/accomplishments/certificate/XENEKK4BDP8C", // Add your verification link
    },
    {
      id: 3,
      title: "Mastering Data Structures & Algorithms using C and C++",
      issuer: "Udemy",
      date: "December 2023",
      link: "https://www.udemy.com/certificate/UC-aab30b0c-d90f-4a27-8550-730f49b17576/", // Add your verification link
    },

   
    
  ];

  return (
    <section id="certificates" className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
            My Certifications
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Proof of my continuous learning and expertise in modern technologies.
          </p>
        </motion.div>

        <div className="space-y-6">
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: cert.id * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {cert.title}
                  </h3>
                  <div className="flex items-center mt-2 space-x-4">
                    <p className="text-gray-600 dark:text-gray-300">{cert.issuer}</p>
                    <span className="text-gray-400 dark:text-gray-500">•</span>
                    <p className="text-gray-500 dark:text-gray-400">{cert.date}</p>
                  </div>
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center"
                >
                  <FiExternalLink className="mr-1" />
                  Verify
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;