import React from "react";

const BottomSection = () => {
  return (
    <section className="w-full bg-white">
      {/* Outer white wrapper with side + bottom spacing, flush at top */}
      <div className="w-[90%] mx-auto px-3 md:px-5 pb-3 md:pb-5 pt-0">
        {/* Capsule div */}
        <div className="w-full relative bg-[#00F0A0] rounded-[0px_80px_80px_80px] py-12 lg:py-20 px-6 lg:px-16">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 font-['Inter'] text-black">
            
            {/* Left content */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#101828] tracking-[-0.02em]">
                Ready to get started?
              </h2>
              <p className="mt-3 text-base md:text-lg text-[#344054]">
                Let’s make this happen. We’re ready to talk when you are.
              </p>
            </div>

            {/* Right button */}
            <div className="mt-6 lg:mt-0">
              <button className="bg-[#101828] text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-[#1D2939] transition">
                Talk to an expert
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomSection;
