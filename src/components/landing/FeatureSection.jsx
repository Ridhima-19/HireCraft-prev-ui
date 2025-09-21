import React from "react";
import Icon1 from "../../assets/Component 2.svg";
import Icon2 from "../../assets/Component 2 (1).svg";
import Icon3 from "../../assets/Component 2 (2).svg";
import Icon4 from "../../assets/Component 2 (3).svg";

const steps = [
  {
    title: "Upload JD",
    description:
      "Upload or paste your job description — HireCraft auto-extracts role, skills, and experience details.",
    iconSrc: Icon1,
  },
  {
    title: "Source & Score Candidates",
    description:
      "Matching profiles are fetched from Naukri, your JD is posted on LinkedIn, and resumes are scored by our AI engine to highlight top talent.",
    iconSrc: Icon2,
  },
  {
    title: "Automated Outreach",
    description:
      "Top-scoring candidates are automatically contacted through LinkedIn or email to gauge their interest.",
    iconSrc: Icon3,
  },
  {
    title: "Tracker & Review",
    description:
      "All responses update in a central tracker where recruiters can review, shortlist, and move candidate to the next stage.",
    iconSrc: Icon4,
  },
];

const FeatureSection = () => {
  return (
    
      <div id="process" className=" mt-4 md:mt-6 lg:mt-6 w-[90%] mx-auto relative bg-[#f2f4f5] rounded-tl-[0px] rounded-tr-[80px] rounded-br-[80px] rounded-bl-[80px] h-[647px] text-left text-black font-inter">
      <b className="absolute top-[101px] left-[72px] text-[48px] leading-[60px] uppercase">
        How it works — 4 steps
      </b>

      <div className="absolute top-[209px] left-1/2 -translate-x-1/2 w-[1232px] flex flex-wrap justify-center items-start text-[24px] text-[#101828]">
        {steps.map((step, index) => (
          <div key={index} className="w-[304px] flex flex-col items-start justify-center p-[0_12px]">
            <div className="group w-[280px] h-[337px] flex flex-col justify-center items-start rounded-[12px] border border-[#d0d5dd] bg-gradient-to-b from-[#b2ccff]/100 to-[#b2ccff]/0 relative overflow-hidden p-[25px] transition-all duration-300 ease-out hover:scale-[1.03] hover:-translate-y-1 hover:shadow-xl hover:border-[#98a2b3] hover:from-[#b2ccff]/80">
              
              {/* Background Image */}
              <div className="absolute top-0 left-0 w-[278px] h-[335px] opacity-30 z-0">
                <div className="w-full h-full overflow-hidden flex flex-col">
                  <div className="relative w-full h-full overflow-hidden">
                    <img className="w-full h-full object-cover" alt="" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 relative z-10 w-full">
                <div className="flex flex-col pb-[24px]">
                  <div className="flex items-center justify-start">
                    <div className="flex items-start max-w-[230px] w-[48px]">
                      <div className="flex items-center justify-center w-[48px] h-[48px] rounded-[30px] bg-white/80 backdrop-blur-[37px] transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:rotate-3 group-hover:shadow-md">
                        <div className="w-[28px] h-[28px] relative overflow-hidden transition-transform duration-300 ease-out group-hover:scale-110">
                          <img src={step.iconSrc} alt="" className="w-full h-full object-contain" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col mb-[8px] max-w-[250px] transition-colors duration-300">
                  <div className="text-[16px] font-medium leading-[31.2px] group-hover:text-black">{step.title}</div>
                  <div className="border-t border-dashed border-[#344054] group-hover:border-[#000] pt-[13px] mt-[4px] text-[16px] text-[#344054] leading-[22.4px]">
                    {step.description.split("\n").map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
      </div>
    
  );
};

export default FeatureSection;
