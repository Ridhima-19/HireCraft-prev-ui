
import React from "react";

export default function Background() {
  return (
    <section className="w-full bg-white">
      {/* Outer white wrapper with side and bottom spacing, flush at top */}
      <div className="w-[90%] mx-auto px-3 md:px-5 pb-3 md:pb-5 pt-0  ">
        {/* Gradient capsule */}
        <div
          className="w-full relative bg-gradient-to-r from-[#d2ffc8] to-[#b5ffe4] rounded-[0px_80px_80px_80px] py-[36px] md:py-[45px]"
        >
          <div
            className="
              max-w-[1216px] mx-auto
              h-[160px] md:h-[184px]
              px-6 md:px-10
              flex items-center justify-between gap-10
              font-['Inter'] text-black
            "
          >
        {/* 70% */}
        <div className="flex-1">
          <div className=" border-l-2 border-black pl-6">
            <b className="block text-[30px] md:text-[52px] leading-[60px] capitalize">70%</b>
            <p className="mt-1 text-[14px] md:text-[20px] leading-[24px] font-medium max-w-[420px]">
              Manual effort reduced with automated sourcing & outreach
            </p>
          </div>
        </div>

        {/* 5x Faster */}
        <div className="flex-1">
          <div className="border-l-2 border-black pl-6">
            <b className="block text-[30px] md:text-[52px] leading-[60px] capitalize">5x Faster</b>
            <p className="mt-1 text-[14px] md:text-[20px] leading-[24px] font-medium max-w-[420px]">
              From JD upload to candidate shortlist
            </p>
          </div>
        </div>

        {/* 90%+ */}
        <div className="flex-1">
          <div className="border-l-2 border-black pl-6">
            <b className="block text-[30px] md:text-[52px] leading-[60px] capitalize">90%+</b>
            <p className="mt-1 text-[12px] md:text-[20px] leading-[24px] font-medium max-w-[420px]">
              Match accuracy powered by AI-driven resume scoring
            </p>
          </div>
        </div>
          </div>
        </div>
      </div>
    </section>
  );
}