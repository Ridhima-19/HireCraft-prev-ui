
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PostJD() {
  const [jobTitle, setJobTitle] = useState("");
  const [mustHaveSkills, setMustHaveSkills] = useState("");
  const [shouldHaveSkills, setShouldHaveSkills] = useState("");
  const [experience, setExperience] = useState("");
  const [platform, setPlatform] = useState("");
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const navigate = useNavigate();

  const handleJDUpload = async (e) => {
    const uploadedFile = e.target.files[0];
    if (!uploadedFile) return;

    // Size check
    const fileSizeMB = uploadedFile.size / (1024 * 1024);
    if (fileSizeMB > 10) {
      alert("JD size should be less than 10MB.");
      e.target.value = null;
      return;
    }

    // Type check
    const allowedTypes = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!allowedTypes.includes(uploadedFile.type)) {
      alert("Only PDF and DOCX files are allowed.");
      e.target.value = null;
      return;
    }

    setFile(uploadedFile);
    setUploading(true);

    const formData = new FormData();
    formData.append("file", uploadedFile);

    try {
      const response = await fetch("http://localhost:8080/api/jd/analyze", {
        method: "POST",
        body: formData,
      });

      const parsed = await response.json();

      if (parsed.error) {
        alert("JD parsing failed: " + parsed.error);
      } else {
        setJobTitle(parsed.jobTitle || "");
        setMustHaveSkills((parsed.requiredSkills || []).join(", "));
        setShouldHaveSkills((parsed.optionalSkills || []).join(", "));
        setExperience(parsed.experience || "");
        alert("JD parsed and fields auto-filled successfully!");
      }
    } catch (err) {
      console.error("JD parsing failed:", err);
      alert("Failed to parse JD. Please enter manually.");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const jdData = {
      jobTitle,
      mustHaveSkills,
      shouldHaveSkills,
      experience,
      platform,
      fileName: file?.name || "",
    };

    try {
      const endpoint = `http://localhost:5000/api/candidates?platform=${platform}`;
      const response = await fetch(endpoint);
      const data = await response.json();

      const keywords = [
        ...mustHaveSkills.split(","),
        ...shouldHaveSkills.split(","),
      ]
        .map((s) => s.trim().toLowerCase())
        .filter(Boolean);

      const filteredCandidates = data.filter((candidate) => {
        const candidateSkills = (candidate.Skills || "").toLowerCase();
        return keywords.some((kw) => candidateSkills.includes(kw));
      });

      navigate("/candidates", {
        state: { ...jdData, candidates: filteredCandidates },
      });
    } catch (error) {
      console.error("Error fetching candidates:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow-md p-6 w-full max-w-lg space-y-4"
    >
      <h3 className="text-xl font-semibold text-gray-800">
        Search the Matching Candidates
      </h3>

      {/* JD Upload */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Upload JD (PDF/DOCX, Max 10MB)
        </label>
        <input
          type="file"
          accept=".pdf,.docx"
          onChange={handleJDUpload}
          className="w-full border rounded-md px-3 py-2 bg-gray-50"
        />
        {uploading && (
          <p className="text-sm text-blue-500 mt-1">Parsing JD...</p>
        )}
        {file && !uploading && (
          <p className="text-sm text-green-600 mt-1">Uploaded: {file.name}</p>
        )}
      </div>

      {/* Job Title */}
      <div>
        <label className="block text-sm font-medium mb-1">Job Title</label>
        <input
          type="text"
          placeholder="e.g. Frontend Engineer"
          required
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          className="w-full border rounded-md px-3 py-2 bg-gray-50"
        />
      </div>

      {/* Must Have Skills */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Must Have Skills
        </label>
        <input
          type="text"
          placeholder="e.g. JavaScript, React"
          value={mustHaveSkills}
          onChange={(e) => setMustHaveSkills(e.target.value)}
          className="w-full border rounded-md px-3 py-2 bg-gray-50"
        />
      </div>

      {/* Should Have Skills */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Good To Have Skills
        </label>
        <input
          type="text"
          placeholder="e.g. AWS, Docker"
          value={shouldHaveSkills}
          onChange={(e) => setShouldHaveSkills(e.target.value)}
          className="w-full border rounded-md px-3 py-2 bg-gray-50"
        />
      </div>

      {/* Experience */}
      <div>
        <label className="block text-sm font-medium mb-1">Experience</label>
        <input
          type="text"
          list="experience-suggestions"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          placeholder="e.g. Fresher, 2-5 yrs, 5+ yrs"
          className="w-full border rounded-md px-3 py-2 bg-gray-50"
        />
        <datalist id="experience-suggestions">
          <option value="Fresher" />
          <option value="0-2 yrs" />
          <option value="2-5 yrs" />
          <option value="5+ yrs" />
        </datalist>
      </div>

      {/* Platform */}
      <div>
        <label className="block text-sm font-medium mb-1">Hiring Platform</label>
        <select
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
          className="w-full border rounded-md px-3 py-2 bg-gray-50 text-gray-700"
          required
        >
          <option value="" disabled hidden>
            Select platform
          </option>
          <option value="Naukri">Naukri</option>
          <option value="LinkedIn">LinkedIn</option>
        </select>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="bg-green-600 text-white font-medium py-2 px-4 rounded-md hover:bg-green-700 w-full"
      >
        Find Matching Candidates
      </button>
    </form>
  );
}