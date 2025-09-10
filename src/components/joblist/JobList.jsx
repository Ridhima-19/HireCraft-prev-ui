
import React from "react";
import { motion } from "framer-motion";
import { FileText, Briefcase, Tags, ChevronLeft, ChevronRight } from "lucide-react";

export default function JobList() {
  // dummy data
  const jobs = [
   {
      id: 1,
      title: "Java Backend Developer",
      description: "Responsible for designing APIs and managing databases",
      experienceLevel: "Mid-Level",
      mustHaveSkills: "Java,Spring Boot,PostgreSQL",
      goodToHaveSkills: "Docker,Kubernetes",
      jdPdfUrl:
        "https://hirecraftcvs.blob.core.windows.net/hirecraft-cv-container/efb664b9-d989-4116-b41c-d2b52900db7a_6800a686bc3db-java-developer.pdf",
      createdAt: "2025-09-09T17:01:25.220659",
    },
    {
      id: 2,
      title: "Java Backend Developer",
      description: "Responsible for designing APIs and managing databases",
      experienceLevel: "Mid-Level",
      mustHaveSkills: "Java,Spring Boot,PostgreSQL",
      goodToHaveSkills: "Docker,Kubernetes",
      jdPdfUrl:
        "https://hirecraftcvs.blob.core.windows.net/hirecraft-cv-container/efb664b9-d989-4116-b41c-d2b52900db7a_6800a686bc3db-java-developer.pdf",
      createdAt: "2025-09-09T17:01:25.220659",
    },
    {
      id: 3,
      title: "Java Backend Developer",
      description: "Responsible for designing APIs and managing databases",
      experienceLevel: "Mid-Level",
      mustHaveSkills: "Java,Spring Boot,PostgreSQL",
      goodToHaveSkills: "Docker,Kubernetes",
      jdPdfUrl:
        "https://hirecraftcvs.blob.core.windows.net/hirecraft-cv-container/efb664b9-d989-4116-b41c-d2b52900db7a_6800a686bc3db-java-developer.pdf",
      createdAt: "2025-09-09T17:01:25.220659",
    },
    {
      id: 4,
      title: "Java Backend Developer",
      description: "Responsible for designing APIs and managing databases",
      experienceLevel: "Mid-Level",
      mustHaveSkills: "Java,Spring Boot,PostgreSQL",
      goodToHaveSkills: "Docker,Kubernetes",
      jdPdfUrl:
        "https://hirecraftcvs.blob.core.windows.net/hirecraft-cv-container/efb664b9-d989-4116-b41c-d2b52900db7a_6800a686bc3db-java-developer.pdf",
      createdAt: "2025-09-09T17:01:25.220659",
    },
  ];

  // date format
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <motion.div
      className="w-full max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* 2 cards per row grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 1 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.08, delayChildren: 0.1 },
          },
        }}
      >
        {jobs.map((job) => (
          <motion.div
            key={job.id}
            className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100 ring-1 ring-gray-100 p-6"
            whileHover={{ scale: 1.01, y: -2 }}
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
          >
            {/* Header row */}
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
              <span className="text-sm text-gray-500">
                Posted: {formatDate(job.createdAt)}
              </span>
            </div>

            {/* Experience */}
            <div className="mt-3 flex items-center text-sm text-gray-700">
              <Briefcase size={16} className="text-indigo-500 mr-2" />
              <span className="font-semibold mr-1">Experience:</span>
              <span>{job.experienceLevel}</span>
            </div>

            {/* Skills */}
            <div className="mt-4">
              <div className="flex items-center mb-2">
                <Tags size={16} className="text-indigo-500 mr-2" />
                <span className="font-semibold text-gray-800">Must Have Skills</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {(job.mustHaveSkills || "")
                  .split(",")
                  .map((s) => s.trim())
                  .filter(Boolean)
                  .map((skill, idx) => (
                    <motion.span
                      key={`must-${idx}`}
                      whileHover={{ scale: 1.03 }}
                      className="px-3 py-1 rounded-full text-xs font-medium text-gray-800 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100"
                    >
                      {skill}
                    </motion.span>
                  ))}
              </div>

              <div className="flex items-center mt-4 mb-2">
                <Tags size={16} className="text-purple-500 mr-2" />
                <span className="font-semibold text-gray-800">Good To Have Skills</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {(job.goodToHaveSkills || "")
                  .split(",")
                  .map((s) => s.trim())
                  .filter(Boolean)
                  .map((skill, idx) => (
                    <motion.span
                      key={`good-${idx}`}
                      whileHover={{ scale: 1.03 }}
                      className="px-3 py-1 rounded-full text-xs font-medium text-gray-800 bg-gradient-to-r from-pink-50 to-purple-50 border border-purple-100"
                    >
                      {skill}
                    </motion.span>
                  ))}
              </div>
            </div>

           
            {/* Footer */}
            <div className="mt-4 flex justify-end">
              <a
                href={job.jdPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-800 font-semibold px-2 py-1 rounded-md hover:bg-blue-50 transition-colors flex items-center gap-1"
              >
                <FileText size={16} />
                View JD
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-800 font-semibold px-2 py-1 rounded-md hover:bg-blue-50 transition-colors flex items-center gap-1"
              >
                  <FileText size={16} />
                  View Report
                </a>
              

            </div>

          </motion.div>
        ))}
      </motion.div>

      
      {/* Pagination buttons */}
        <div className="flex justify-center mt-6">
          <button className="inline-flex items-center gap-2 px-4 py-2 mx-1 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
            <ChevronLeft size={18} />
            Prev
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2 mx-1 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
            Next
            <ChevronRight size={18} />
          </button>
        </div>

    </motion.div>
  );
}
