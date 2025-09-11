import React from "react";
import { motion } from "framer-motion";
import { FileText, Briefcase, Tags } from "lucide-react";
import { Link } from "react-router-dom";

// Utility: date format
const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

export default function JDCard({ job }) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 ring-1 ring-gray-100 p-4"
      whileHover={{ scale: 1.01, y: -2 }}
      variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
    >
      {/* Header row */}
      <div className="flex justify-between items-start">
        <h3
          className="text-lg font-semibold text-gray-800 truncate max-w-[70%]"
          title={job.title}
        >
          {job.title}
        </h3>
        <span className="text-xs text-gray-500">
          {formatDate(job.createdAt)}
        </span>
      </div>

      {/* Experience */}
      <div className="mt-2 flex items-center text-xs text-gray-700">
        <Briefcase size={14} className="text-indigo-500 mr-1" />
        <span className="font-semibold mr-1">Exp:</span>
        <span>{job.experienceLevel}</span>
      </div>

      {/* Skills */}
      <div className="mt-3">
        <div className="flex items-center mb-1">
          <Tags size={14} className="text-indigo-500 mr-1" />
          <span className="font-semibold text-gray-800 text-sm">Must Have</span>
        </div>
        <div className="flex flex-wrap gap-1">
          {(job.mustHaveSkills || "")
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean)
            .map((skill, idx) => (
              <motion.span
                key={`must-${idx}`}
                whileHover={{ scale: 1.03 }}
                className="px-2 py-0.5 rounded-full text-[11px] font-medium text-gray-800 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100"
              >
                {skill}
              </motion.span>
            ))}
        </div>

        <div className="flex items-center mt-2 mb-1">
          <Tags size={14} className="text-purple-500 mr-1" />
          <span className="font-semibold text-gray-800 text-sm">
            Good To Have
          </span>
        </div>
        <div className="flex flex-wrap gap-1">
          {(job.goodToHaveSkills || "")
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean)
            .map((skill, idx) => (
              <motion.span
                key={`good-${idx}`}
                whileHover={{ scale: 1.03 }}
                className="px-2 py-0.5 rounded-full text-[11px] font-medium text-gray-800 bg-gradient-to-r from-pink-50 to-purple-50 border border-purple-100"
              >
                {skill}
              </motion.span>
            ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-3 flex justify-end gap-2">
        <a
            href={job.jdPdfUrl}
            className="text-blue-800 text-sm font-semibold px-2 py-1 rounded-md hover:bg-blue-50 transition-colors flex items-center gap-1"
            >
            <FileText size={14} />
            JD
        </a>

        <Link
          to={`/jd-report?jdId=${job.id}`}
          className="text-blue-800 text-sm font-semibold px-2 py-1 rounded-md hover:bg-blue-50 transition-colors flex items-center gap-1"
        >
          <FileText size={14} />
          Report
        </Link>
      </div>
    </motion.div>
  );
}
