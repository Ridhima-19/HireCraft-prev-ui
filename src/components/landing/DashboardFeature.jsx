import React from "react";
import { Link } from "react-router-dom";
import jobMatch from "../../assets/jobmatch_2.png";

const DashboardFeature = () => {
  return (
    <section id="overview" className="mt-4 md:mt-6 lg:mt-6 w-[90%] mx-auto bg-[#f2f4f5] rounded-tr-[80px] rounded-br-[80px] rounded-bl-[80px] py-16">
      <div className="max-w-6xl mx-auto flex justify-between items-start border-b border-black/5 pb-16">
        {/* LEFT SIDE */}
        <div className="max-w-lg space-y-6">
          <h2 className="text-4xl font-semibold leading-tight capitalize">
            Recruiter Dashboard — Final Shortlist At A Glance
          </h2>

          <ul className="space-y-4 text-lg text-black">
            <li className="flex gap-3">
              <div className="w-1 h-1 mt-2 bg-black rounded-full"></div>
              <p>
                <span className="font-semibold">Bulk Actions Made Simple:</span>{" "}
                Shortlist multiple candidates, download CVs in one click, or
                trigger outreach campaigns instantly.
              </p>
            </li>

            <li className="flex gap-3">
              <div className="w-1 h-1 mt-2 bg-black rounded-full"></div>
              <p>
                <span className="font-semibold">Powerful Filters:</span> Narrow
                down by notice period, experience level, or AI match % to find
                the perfect fit faster.
              </p>
            </li>

            <li className="flex gap-3">
              <div className="w-1 h-1 mt-2 bg-black rounded-full"></div>
              <p>
                <span className="font-semibold">Rich Candidate Profiles:</span>{" "}
                Open detailed views with resume, LinkedIn ID, email, and contact
                history all in one place.
              </p>
            </li>
          </ul>

          <Link
            to="/register"
            className="group mt-6 inline-flex items-center justify-between bg-black text-white px-6 py-4 rounded-full w-80 text-lg font-semibold transition-all duration-300 hover:bg-black/90 hover:shadow-xl hover:-translate-y-0.5"
          >
            <span>Sign Up Now for Free</span>
            <span className="w-6 h-6 bg-white text-black rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </Link>
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="w-[560px] h-[560px] rounded-3xl overflow-hidden shadow-md bg-white transition-transform duration-500 ease-out hover:shadow-xl hover:-translate-y-1">
          <img
            src={jobMatch}
            alt="Dashboard preview"
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default DashboardFeature;
