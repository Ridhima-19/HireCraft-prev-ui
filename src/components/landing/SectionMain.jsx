
import React from "react";
import heroImage from "../../assets/hero-illustration.png";

export default function SectionMain() {
  return (
    <section 
  className="relative w-full h-[732px] font-['Inter'] text-black overflow-hidden" 
  style={{
    background: `
      radial-gradient(
      200% 180% at 85% 20%, 
      rgba(209,224,250,0.9) 0%, 
      rgba(209,224,250,0.35) 25%, 
      rgba(255,255,255,0.98) 50%, 
      #ffffff 40%
    ),
      #ffffff
    `,
    backgroundBlendMode: 'normal',
  }}
>
      {/* Main hero content */}
      <div className="flex items-center justify-between gap-10 px-8 pt-20 h-full max-w-[1216px] mx-auto">
        {/* Text block */}
        <div className="flex flex-col gap-4 max-w-[528px]">
          <div className="flex flex-col gap-[11px]">
            <h1 className="uppercase font-extrabold text-[52px] leading-[60px] text-black">
              AI JOB MATCHING
            </h1>
            <h2 className="uppercase text-[52px] leading-[60px] text-black font-normal">
              FIND THE RIGHT
            </h2>
            <h2 className="uppercase text-[52px] leading-[60px] text-black font-normal">
              CANDIDATES
            </h2>
          </div>

          <p className="text-[16px] leading-6 text-gray-600">
            From JD to qualified candidates – automated and effortless
          </p>

          <a
            href="/register"
            className="w-auto self-start inline-flex items-center justify-center rounded-[60px] bg-[#4880ff] px-5 py-2 text-white text-[16px] font-semibold hover:bg-[#3a6add] transition-colors duration-200 min-w-[140px] max-w-max"
          >
            Get Started
          </a>
        </div>

        {/* Hero Image */}
        <div className="flex-shrink-0">
          <img
            src={heroImage}
            alt="Job Matching Illustration"
            className="w-[560px] h-[560px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}