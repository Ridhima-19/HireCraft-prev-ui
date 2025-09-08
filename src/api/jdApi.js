// src/api/jdApi.js
export const uploadJD = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch("http://localhost:8080/api/jd/analyze", {
    method: "POST",
    body: formData,
  });
  return response.json();
};

export const fetchCandidates = async (platform) => {
  const response = await fetch(
    `http://localhost:5000/api/candidates?platform=${platform}`
  );
  return response.json();
};
