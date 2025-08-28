
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const CandidateList = () => {
  const location = useLocation();
  const jdData = location.state || {};
  const candidates = jdData.candidates || [];

  const [currentPage, setCurrentPage] = useState(1);
  const candidatesPerPage = 6;

  const [sortedCandidates, setSortedCandidates] = useState(candidates);
  const [sortExperience, setSortExperience] = useState("");
  const [sortNotice, setSortNotice] = useState("");

  // Helper function to parse "3y 1m" into float years
  const parseExperience = (expString) => {
    if (!expString) return 0;
    const yearMatch = expString.match(/(\d+)\s*y/);
    const monthMatch = expString.match(/(\d+)\s*m/);
    const years = yearMatch ? parseInt(yearMatch[1], 10) : 0;
    const months = monthMatch ? parseInt(monthMatch[1], 10) : 0;
    return years + months / 12;
  };

  useEffect(() => {
    let updated = [...candidates];

    // Sort by experience
    if (sortExperience === "lowToHigh") {
      updated.sort((a, b) => {
        const expA = parseExperience(a.Experience || a.experience);
        const expB = parseExperience(b.Experience || b.experience);
        return expA - expB;
      });
    } else if (sortExperience === "highToLow") {
      updated.sort((a, b) => {
        const expA = parseExperience(a.Experience || a.experience);
        const expB = parseExperience(b.Experience || b.experience);
        return expB - expA;
      });
    }

    // Sort by notice period
    const noticeOrder = { "Immediate": 0, "15 days": 1, "30 days": 2, "60 days": 3 };
    if (sortNotice) {
      updated.sort((a, b) => {
        const aNotice = noticeOrder[a.NoticePeriod] ?? 99;
        const bNotice = noticeOrder[b.NoticePeriod] ?? 99;
        return aNotice - bNotice;
      });
    }

    setSortedCandidates(updated);
    setCurrentPage(1); // Reset to first page on new sort
  }, [sortExperience, sortNotice, candidates]);

  const indexOfLast = currentPage * candidatesPerPage;
  const indexOfFirst = indexOfLast - candidatesPerPage;
  const currentCandidates = sortedCandidates.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(sortedCandidates.length / candidatesPerPage);

  return (
    <div className="p-8 bg-gray-100 min-h-screen w-full">
      <h1 className="text-2xl font-bold mb-6">Matching Candidates</h1>

      {jdData && (
        <div className="mb-6 p-4 bg-white rounded shadow-sm">
          <p><strong>Job Title:</strong> {jdData.jobTitle}</p>
          <p><strong>Platform:</strong> {jdData.platform}</p>
          <p><strong>Experience:</strong> {jdData.experience}</p>
          <p><strong>Skills:</strong> {jdData.skills}</p>
        </div>
      )}

      {/* Filters */}
      <div className="mb-4 flex flex-wrap gap-4">
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded text-sm">
          All filters
        </button>

        <select
          value={sortExperience}
          onChange={(e) => setSortExperience(e.target.value)}
          className="bg-white border border-gray-300 px-4 py-2 rounded text-sm"
        >
          <option value="">Sort by experience</option>
          <option value="lowToHigh">Experience: Low to High</option>
          <option value="highToLow">Experience: High to Low</option>
        </select>

        <select
          value={sortNotice}
          onChange={(e) => setSortNotice(e.target.value)}
          className="bg-white border border-gray-300 px-4 py-2 rounded text-sm"
        >
          <option value="">Sort by notice period</option>
          <option value="Immediate">Immediate</option>
          <option value="15 days">15 days</option>
          <option value="30 days">30 days</option>
          <option value="60 days">60 days</option>
        </select>

        <select className="bg-white border border-gray-300 px-4 py-2 rounded text-sm">
          <option>Availability</option>
          <option>Available now</option>
          <option>Serving notice</option>
          <option>Not actively looking</option>
        </select>
      </div>

      {currentCandidates.length > 0 ? (
        <div className="overflow-x-auto rounded-lg shadow">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100 text-gray-700 text-sm">
              <tr>
                <th className="px-4 py-2">S No.</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Experience</th>
                <th className="px-4 py-2">Current Company</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm">
              {currentCandidates.map((candidate, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">{indexOfFirst + index + 1}</td>
                  <td className="px-4 py-2">{candidate.Name || candidate.name}</td>
                  <td className="px-4 py-2">{candidate.Experience || candidate.experience || "N/A"}</td>
                  <td className="px-4 py-2">{candidate.Company || candidate.company || "N/A"}</td>
                  <td className="px-4 py-2">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs mr-2">
                      View Profile
                    </button>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-xs">
                      Download CV
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-600">No matching candidates found.</p>
      )}

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1
                ? "bg-purple-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CandidateList;
