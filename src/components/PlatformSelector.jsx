import React from "react";

function PlatformSelector() {
  return (
    <div className="flex gap-4">
      <button className="bg-blue-600 text-white px-4 py-2 rounded-sm hover:bg-blue-700">Naukri</button>
      <button className="bg-blue-800 text-white px-4 py-2 rounded-sm hover:bg-blue-900">LinkedIn</button>
    </div>
  );
}

export default PlatformSelector;
