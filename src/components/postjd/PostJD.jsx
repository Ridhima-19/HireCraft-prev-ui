
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiUploadCloud } from "react-icons/fi";
import postJdImage from "../../assets/postJdImage.png"; 
import { enqueueSnackbar } from 'notistack';
import { addJd, analyzeJd } from "./api";

export default function PostJD() {
  const [file, setFile] = useState(null);
  const [jobTitle, setJobTitle] = useState("");
  const [mustHaveSkills, setMustHaveSkills] = useState("");
  const [shouldHaveSkills, setShouldHaveSkills] = useState("");
  const [experience, setExperience] = useState("");
  const [platform, setPlatform] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Handle file upload + parsing
  const handleFileChange = async (e) => {
    const uploadedFile = e.target.files[0];
    if (!uploadedFile) return;

    // Size check
    const fileSizeMB = uploadedFile.size / (1024 * 1024);
    if (fileSizeMB > 10) {
      enqueueSnackbar("JD size should be less than 10MB.",{variant: 'error'});
      e.target.value = null;
      return;
    }

    // Type check
    const allowedTypes = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(uploadedFile.type)) {
      enqueueSnackbar("Only PDF and DOCX files are allowed.",{variant: 'error'});
      e.target.value = null;
      return;
    }

    setFile(uploadedFile);
    setLoading(true);
    enqueueSnackbar("JD uploaded. Parsing in progress...",{variant: 'info'});

    const formData = new FormData();
    formData.append("file", uploadedFile);
    const response = await analyzeJd(formData);
    const { data } = response;
    try {
      setJobTitle(data.jobTitle || "");
      setMustHaveSkills((data.requiredSkills || []).join(", "));
      setShouldHaveSkills((data.optionalSkills || []).join(", "));
      setExperience(data.experience || "");
    } finally {
      setLoading(false);
    }
  };

  const getPayloadForAddingJd = () => {
      const formData = new FormData();
      formData.append("title", jobTitle);
      formData.append("description", "");
      formData.append("experienceLevel", experience);
      formData.append("mustHaveSkills", mustHaveSkills);
      formData.append("goodToHaveSkills", shouldHaveSkills);
      formData.append("jdFile", file);
      return formData;
  }

  // Submit JD + fetch candidates
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = getPayloadForAddingJd();
      await addJd(payload);
      enqueueSnackbar("JD added. We will notify you via email once reports are ready.", {variant: "info"});
    } catch (error) {
      console.error("Error uploading jd", error);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-10"
      >
        {/* Left: Form */}
        <div className="md:col-span-7 bg-white rounded-2xl shadow-xl p-8 border border-gray-100 mt-0.5">
          <h2 className="text-2xl font-bold mb-2 text-gray-800">
            Upload Job Description
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Upload a JD or fill details below — our parser will auto-extract info
            & fetch candidates.
          </p>

          {/* Upload Box */}
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center text-gray-500 hover:border-indigo-400 hover:bg-indigo-50 transition cursor-pointer mb-0.5">
            <FiUploadCloud className="text-3xl mb-2 text-indigo-500" />
            {file ? (
              <p className="text-sm text-gray-700">{file.name}</p>
            ) : (
              <label className="cursor-pointer text-center">
                <span className="block text-sm font-medium">
                  Click to upload or drag & drop
                </span>
                <span className="text-xs text-gray-400">
                  PDF or DOCX (Max 10MB)
                </span>
                <input
                  type="file"
                  accept=".pdf,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
            )}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Job Title"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
              required
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Must Have Skills"
                value={mustHaveSkills}
                onChange={(e) => setMustHaveSkills(e.target.value)}
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
                required
              />
              <input
                type="text"
                placeholder="Good To Have Skills"
                value={shouldHaveSkills}
                onChange={(e) => setShouldHaveSkills(e.target.value)}
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Experience (e.g. Fresher, 2-5 yrs)"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
                required
              />
              <select
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
                required
              >
                <option value="">Select Platform</option>
                <option value="Naukri">Naukri</option>
                <option value="LinkedIn">LinkedIn</option>
              </select>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium py-3 mb-0.5 rounded-lg shadow hover:shadow-md transition disabled:opacity-50"
            >
              {loading ? "Uploading..." : "Find Matching Candidates"}
            </motion.button>
          </form>
        </div>

        {/* Right Info Box */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-5 flex flex-col justify-center bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 rounded-2xl shadow-xl p-10"
          >
            
            <motion.img
              src={postJdImage}
              alt="Post JD Illustration"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", type: "spring", stiffness: 120 }}
              className="h-56 md:h-72 object-contain mb-6 mx-auto"
            />

            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Smarter Hiring Starts Here 🚀
            </h3>
            <p className="text-gray-600 mb-4">
              Upload your JD, auto-extract skills & experience, and instantly match
              with top candidates across platforms.
            </p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>✔️ Auto-parse JD in seconds</li>
              <li>✔️ Candidate filtering made easy</li>
              <li>✔️ Integrates with Naukri, LinkedIn</li>
            </ul>
          </motion.div>

      </motion.div>

          </>
  );
}
