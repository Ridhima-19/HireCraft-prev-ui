import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Tags } from "lucide-react";

// Format date
const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

export default function JDSection({ job }) {
  if (!job) return null;

  return (
    <motion.div
      className="bg-white rounded-xl shadow-md border border-gray-100 p-5 mb-6"
      whileHover={{ scale: 1.01 }}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header row with title + JD PDF */}
      <div className="flex justify-between items-center">
        <h2
          className="text-xl font-semibold text-gray-800 truncate max-w-[70%]"
          title={job.title}
        >
          {job.title}
        </h2>

        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-500">
            {formatDate(job.createdAt)}
          </span>
        </div>
      </div>

      {/* Experience */}
      <div className="mt-2 flex items-center text-sm text-gray-700">
        <Briefcase size={16} className="text-indigo-500 mr-1" />
        <span className="font-semibold mr-1">Experience:</span>
        <span>{job.experienceLevel}</span>
      </div>

      {/* Skills */}
      <div className="mt-4">
        {/* Must Have */}
        <div className="flex items-center mb-1">
          <Tags size={16} className="text-indigo-500 mr-1" />
          <span className="font-semibold text-gray-800">Must Have</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-3">
          {(job.mustHaveSkills || "")
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean)
            .map((skill, idx) => (
              <motion.span
                key={`must-${idx}`}
                whileHover={{ scale: 1.05 }}
                className="px-2 py-0.5 rounded-full text-xs font-medium text-gray-800 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100"
              >
                {skill}
              </motion.span>
            ))}
        </div>

        {/* Good To Have */}
        <div className="flex items-center mb-1">
          <Tags size={16} className="text-purple-500 mr-1" />
          <span className="font-semibold text-gray-800">Good To Have</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {(job.goodToHaveSkills || "")
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean)
            .map((skill, idx) => (
              <motion.span
                key={`good-${idx}`}
                whileHover={{ scale: 1.05 }}
                className="px-2 py-0.5 rounded-full text-xs font-medium text-gray-800 bg-gradient-to-r from-pink-50 to-purple-50 border border-purple-100"
              >
                {skill}
              </motion.span>
            ))}
        </div>
      </div>
    </motion.div>
  );
}
