
import React from "react";
import { Check } from "lucide-react"; 

export default function Section() {
  return (
    <div>
      <section className="w-[90%] mx-auto bg-[#f2f4f5] rounded-[0_80px_80px_80px] py-16 px-6 md:px-16 font-['Inter'] text-black">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold uppercase mb-10">
          <p>Our</p>
          <p>Advantages</p>
        </h2>

        {/* Advantage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="group bg-white p-6 flex justify-between items-center shadow rounded-3xl transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]">
            <p className="text-xl font-medium font-['Inter']">
              Auto-extract profiles from Naukri & Linkedin
            </p>
            <div className="w-8 h-8 bg-[#00F0A0] rounded-full flex items-center justify-center transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:rotate-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-5 h-5 text-black-900 transition-transform duration-300 group-hover:scale-110"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group bg-white  p-6 flex justify-between items-center shadow rounded-3xl transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]">
            <p className="text-xl font-medium font-['Inter']">
              AI-Based Matching & Resume Scores
            </p>
            <div className="w-8 h-8 bg-[#00F0A0] rounded-full flex items-center justify-center transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:rotate-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-5 h-5 text-black-900 transition-transform duration-300 group-hover:scale-110"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group bg-white p-6 flex justify-between items-center shadow rounded-3xl transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]">
            <p className="text-xl font-medium font-['Inter']">
              Download final reports and CVs for HRs
            </p>
            <div className="w-8 h-8 bg-[#00F0A0] rounded-full flex items-center justify-center transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:rotate-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-5 h-5 text-black-900 transition-transform duration-300 group-hover:scale-110"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          {/* Card 4 */}
          <div className="group bg-white p-6 flex justify-between items-center shadow rounded-3xl transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]">
            <p className="text-xl font-medium font-['Inter']">
              Personalized Outreach & Tracker
            </p>
            <div className="w-8 h-8 bg-[#00F0A0] rounded-full flex items-center justify-center transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:rotate-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-5 h-5 text-black-900 transition-transform duration-300 group-hover:scale-110"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}