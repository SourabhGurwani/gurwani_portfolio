import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "Full-Stack Web Development",
      issuer: "CSE PATHSHALA",
      date: "July 2024",
      link: "https://drive.google.com/file/d/1MVQd-oFnmuuyLuuKNIO7K_5YeCvV2zIo/view?usp=sharing",
    },
    {
      id: 2,
      title: "Prompt Engineering for ChatGPT",
      issuer: "Coursera",
      date: "January 2024",
      link: "https://www.coursera.org/account/accomplishments/certificate/XENEKK4BDP8C",
    },
    {
      id: 3,
      title: "Mastering Data Structures & Algorithms using C and C++",
      issuer: "Udemy",
      date: "December 2023",
      link: "https://www.udemy.com/certificate/UC-aab30b0c-d90f-4a27-8550-730f49b17576/",
    },
  ];

  return (
    <section id="certificates" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Centered Heading with Underline */}
        <motion.div
                  className="text-center mb-16"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
                  <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Certifications and academic background that have shaped my skills and professional knowledge.
                  </p>
                </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: cert.id * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
              whileHover={{ y: -5 }}
            >
              <div className="h-full flex flex-col">
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {cert.title}
                  </h3>
                  <div className="mb-4">
                    <p className="text-gray-600 dark:text-gray-300 font-medium">
                      {cert.issuer}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      {cert.date}
                    </p>
                  </div>
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                >
                  <FiExternalLink className="mr-2" />
                  View Certificate
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