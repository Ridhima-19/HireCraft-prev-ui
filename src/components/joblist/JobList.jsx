import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import JDCard from "./jdCard"; 
import PaginationFooter from "../pagination/footerPagination";
import { getJdList } from "./api";

export default function JobList() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6; 
  const totalPages = Math.ceil(jobs.length / jobsPerPage);
  const startIdx = (currentPage - 1) * jobsPerPage;
  const currentJobs = jobs.slice(startIdx, startIdx + jobsPerPage);

  const getJobs = () => {
    setLoading(true);
    getJdList(0, 1000)
      .then((it) => {
        setJobs([...it.data.content]);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <div className="flex justify-center items-center flex-1 p-6">
      <motion.div
        className="w-full max-w-7xl mx-auto flex flex-col min-h-[calc(100vh-100px)]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6"
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
          {loading
            ? Array.from({ length: jobsPerPage }).map((_, idx) => (
                <div
                  key={idx}
                  className="h-60 bg-gray-200 rounded-2xl animate-pulse"
                ></div>
              ))
            : currentJobs.map((job) => <JDCard key={job.id} job={job} />)}
        </motion.div>

        {/* Spacer to push footer to bottom if content is short */}
        <div className="flex-1"></div>

        {/* Pagination footer */}
        {!loading && jobs.length > 0 && (
          <PaginationFooter
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        )}
      </motion.div>
    </div>
  );
}
