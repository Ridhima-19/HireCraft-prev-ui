import React, { useState } from "react";


//for now keeping dummy data
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
    <div
      className="flex bg-gray-50 min-h-screen p-6 gap-6"
      
    >
      {/* Filters */}
      <div className="w-1/4 bg-white shadow rounded-2xl p-4">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>
        <input
          type="text"
          placeholder="Search by candidate name"
          className="w-full border rounded-lg px-3 py-2 mb-3"
        />
        <select className="w-full border rounded-lg px-3 py-2 mb-3">
          <option>Job Title</option>
          <option>Frontend Developer</option>
          <option>Backend Developer</option>
        </select>
        <select className="w-full border rounded-lg px-3 py-2 mb-3">
          <option>Status</option>
          <option>Shortlisted</option>
          <option>Interview Scheduled</option>
        </select>
        <select className="w-full border rounded-lg px-3 py-2 mb-3">
          <option>Platform</option>
          <option>LinkedIn</option>
          <option>Naukri</option>
        </select>
        <select className="w-full border rounded-lg px-3 py-2">
          <option>Experience</option>
          <option>0-2 yrs</option>
          <option>3-5 yrs</option>
          <option>5+ yrs</option>
        </select>
      </div>

      {/* View Applications Section */}
      <div className="flex-1 bg-white shadow rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-6">View Applications</h2>

        {/* If No Applications */}
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
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
              Upload JD
            </button>
          </div>
        ) : (
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-3">Candidate Name</th>
                <th className="p-3">Current Company</th>
                <th className="p-3">Experience</th>
                <th className="p-3">Skills</th>
                <th className="p-3">Platform</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app.id} className="border-b hover:bg-gray-50">
                  <td className="p-3 font-medium">{app.name}</td>
                  <td className="p-3">{app.company}</td>
                  <td className="p-3">{app.experience}</td>
                  <td className="p-3">{app.skills.join(", ")}</td>
                  <td className="p-3">{app.platform}</td>
                  <td className="p-3">
                    <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-700">
                      {app.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ViewApplications;
