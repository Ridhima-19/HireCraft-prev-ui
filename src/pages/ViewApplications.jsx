import React, { useState } from "react";

const ViewApplications = () => {
  const [applications, setApplications] = useState([
    {
      id: 1,
      name: "Riya Sharma",
      company: "Infosys",
      experience: "3 yrs",
      skills: ["React", "Node.js"],
      platform: "LinkedIn",
      status: "Shortlisted",
    },
    {
      id: 2,
      name: "Arjun Mehta",
      company: "TCS",
      experience: "5 yrs",
      skills: ["Java", "Spring"],
      platform: "Naukri",
      status: "Interview Scheduled",
    },
  ]);

  return (
    <div className="flex bg-gray-50 min-h-screen p-6 gap-6 font-sans">
      {/* Filters */}
      <div className="w-1/4 bg-white shadow rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Filters</h2>
        <input
          type="text"
          placeholder="Search by candidate name"
          className="w-full border rounded-lg px-3 py-2 mb-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select className="w-full border rounded-lg px-3 py-2 mb-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Job Title</option>
          <option>Frontend Developer</option>
          <option>Backend Developer</option>
        </select>
        <select className="w-full border rounded-lg px-3 py-2 mb-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Status</option>
          <option>Shortlisted</option>
          <option>Interview Scheduled</option>
        </select>
        <select className="w-full border rounded-lg px-3 py-2 mb-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Platform</option>
          <option>LinkedIn</option>
          <option>Naukri</option>
        </select>
        <select className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Experience</option>
          <option>0-2 yrs</option>
          <option>3-5 yrs</option>
          <option>5+ yrs</option>
        </select>
      </div>

      {/* View Applications Section */}
      <div className="flex-1 bg-white shadow rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">View Applications</h2>
        <p className="text-sm text-gray-500 mb-6">
          Manage and track candidates who applied for your job postings.
        </p>

        {applications.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center py-20">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
              alt="No Applications"
              className="w-24 mb-4 opacity-70"
            />
            <p className="text-lg font-semibold mb-2">No Applications Found</p>
            <p className="text-gray-500 mb-4">
              You haven’t shortlisted any candidates yet. Upload a JD to start
              the process.
            </p>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:shadow-md transition">
              Upload JD
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-gray-700">
              <thead>
                <tr className="bg-gray-100 text-left text-sm text-gray-600">
                  <th className="p-3 font-semibold">Candidate Name</th>
                  <th className="p-3 font-semibold">Current Company</th>
                  <th className="p-3 font-semibold">Experience</th>
                  <th className="p-3 font-semibold">Skills</th>
                  <th className="p-3 font-semibold">Platform</th>
                  <th className="p-3 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((app) => (
                  <tr
                    key={app.id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="p-3 font-medium text-gray-800">{app.name}</td>
                    <td className="p-3">{app.company}</td>
                    <td className="p-3">{app.experience}</td>
                    <td className="p-3">{app.skills.join(", ")}</td>
                    <td className="p-3">{app.platform}</td>
                    <td className="p-3">
                      <span
                        className={`px-3 py-1 text-xs rounded-full font-medium ${
                          app.status === "Shortlisted"
                            ? "bg-green-100 text-green-700"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {app.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewApplications;
